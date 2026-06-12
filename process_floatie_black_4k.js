const { Jimp } = require('jimp');
const path = require('path');

const srcPath = 'C:\\Users\\trabajo\\.gemini\\antigravity-ide\\brain\\d351eec4-7f56-4c56-943d-8981b2106dc8\\hero_floatie_4k_1781223507776.png';
const destPath = path.join(__dirname, 'public/images/hero_floatie.png');

console.log('Reading image from:', srcPath);
Jimp.read(srcPath).then(image => {
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  const data = image.bitmap.data;

  console.log(`Image loaded: ${width}x${height}. Finding all dark components (including inner holes)...`);

  // Helper to check if pixel is background-like (dark)
  function isBgColor(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx+1];
    const b = data[idx+2];
    
    // Pure black or very dark gray/shadow
    return r < 30 && g < 30 && b < 30;
  }

  const visited = new Uint8Array(width * height);
  const bgMask = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (visited[idx] || !isBgColor(x, y)) continue;

      // Start BFS for new component
      const component = [];
      const queue = [idx];
      visited[idx] = 1;

      let head = 0;
      while (head < queue.length) {
        const curr = queue[head++];
        const cx = curr % width;
        const cy = Math.floor(curr / width);
        component.push(curr);

        // Neighbors (4-connectivity)
        const neighbors = [];
        if (cx > 0) neighbors.push(curr - 1);
        if (cx < width - 1) neighbors.push(curr + 1);
        if (cy > 0) neighbors.push(curr - width);
        if (cy < height - 1) neighbors.push(curr + width);

        for (let i = 0; i < neighbors.length; i++) {
          const n = neighbors[i];
          if (!visited[n]) {
            const nx = n % width;
            const ny = Math.floor(n / width);
            if (isBgColor(nx, ny)) {
              visited[n] = 1;
              queue.push(n);
            }
          }
        }
      }

      // If the component is large enough (to avoid clearing sunglasses or tiny dark details)
      // or if it touches the border (outer background)
      const touchesBorder = component.some(pixelIdx => {
        const px = pixelIdx % width;
        const py = Math.floor(pixelIdx / width);
        return px === 0 || px === width - 1 || py === 0 || py === height - 1;
      });

      if (touchesBorder || component.length > 200) {
        console.log(`Found background component of size ${component.length} (touchesBorder: ${touchesBorder}). Setting to transparent.`);
        for (let i = 0; i < component.length; i++) {
          bgMask[component[i]] = 1;
        }
      } else {
        console.log(`Keeping small component of size ${component.length} opaque.`);
      }
    }
  }

  console.log('Feathering alpha channel edges (5x5 kernel for soft border)...');
  const smoothAlpha = new Uint8Array(width * height);
  const radius = 2; // 5x5 kernel
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      
      let bgCount = 0;
      let totalCount = 0;
      
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const ny = y + dy;
          const nx = x + dx;
          if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
            if (bgMask[ny * width + nx]) {
              bgCount++;
            }
            totalCount++;
          }
        }
      }
      
      const bgRatio = bgCount / totalCount;
      smoothAlpha[idx] = Math.round(255 * (1.0 - bgRatio));
    }
  }

  // Apply alphas back to the image data
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      data[idx + 3] = smoothAlpha[y * width + x];
    }
  }

  console.log('Saving processed transparent 4K image to:', destPath);
  return image.write(destPath);
}).then(() => {
  console.log('Transparent 4K floatie image saved successfully.');
}).catch(err => {
  console.error('Error processing image:', err);
});
