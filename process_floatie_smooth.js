const { Jimp } = require('jimp');
const path = require('path');

const imagePath = path.join(__dirname, 'public/images/hero_floatie.png');

console.log('Reading image from:', imagePath);
Jimp.read(imagePath)
  .then(image => {
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    console.log(`Image loaded successfully: ${width}x${height}. Extracting alphas...`);

    const alphas = new Uint8Array(width * height);

    // Pass 1: Determine initial alpha based on color proximity to white
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const r = image.bitmap.data[idx + 0];
        const g = image.bitmap.data[idx + 1];
        const b = image.bitmap.data[idx + 2];

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max - min;
        const brightness = (r + g + b) / 3;

        let alpha = 255;

        // If the pixel is very bright and has very low saturation (close to white)
        if (brightness > 200 && saturation < 30) {
          // Calculate a smooth transition
          const startThreshold = 200;
          const endThreshold = 245;
          const t = (brightness - startThreshold) / (endThreshold - startThreshold);
          const factor = Math.max(0, Math.min(1, t));
          alpha = Math.round(255 * (1 - factor));
        }

        alphas[y * width + x] = alpha;
      }
    }

    console.log('Feathering alpha channel edges...');
    const smoothAlphas = new Uint8Array(width * height);
    
    // Pass 2: Box blur on alpha channel to create smooth feathered edges
    const radius = 1; // 3x3 kernel
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = y * width + x;
        
        let sum = 0;
        let count = 0;
        
        for (let dy = -radius; dy <= radius; dy++) {
          for (let dx = -radius; dx <= radius; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
              sum += alphas[ny * width + nx];
              count++;
            }
          }
        }
        
        smoothAlphas[idx] = Math.round(sum / count);
      }
    }

    // Pass 3: Apply smoothed alpha back to the image data
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        image.bitmap.data[idx + 3] = smoothAlphas[y * width + x];
      }
    }

    console.log('Writing back processed image...');
    return image.write(imagePath);
  })
  .then(() => {
    console.log('Smooth floatie transparency processing completed successfully.');
  })
  .catch(err => {
    console.error('Error processing image:', err);
  });
