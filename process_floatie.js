const { Jimp } = require('jimp');
const path = require('path');

const imagePath = path.join(__dirname, 'public/images/hero_floatie.png');

console.log('Reading image from:', imagePath);
Jimp.read(imagePath)
  .then(image => {
    console.log('Image read successfully. Scanning pixels...');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];

      // If the pixel is close to pure white (r,g,b > 240), make it completely transparent
      if (red > 240 && green > 240 && blue > 240) {
        // Check if it's very bright relative to its saturation to avoid killing bright skin
        const max = Math.max(red, green, blue);
        const min = Math.min(red, green, blue);
        if (max - min < 15) { // It's a grayscale/white pixel, not tinted
          this.bitmap.data[idx + 3] = 0; // Alpha to 0
        }
      }
    });

    return image.write(imagePath);
  })
  .then(() => {
    console.log('Hero floatie image processed successfully.');
  })
  .catch(err => {
    console.error('Error processing image:', err);
  });
