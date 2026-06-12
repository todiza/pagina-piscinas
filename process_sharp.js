const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public/images/floatie.png');
const tempPath = path.join(__dirname, 'public/images/floatie_temp.png');

async function processImage() {
  try {
    // Read the image
    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Iterate over pixels to make white transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // If it's pure or nearly pure white
      if (r > 240 && g > 240 && b > 240) {
        // Make it transparent
        data[i + 3] = 0;
      }
    }

    // Write the output image
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(tempPath);

    // Replace the original
    const fs = require('fs');
    fs.renameSync(tempPath, inputPath);
    console.log('Successfully made floatie image transparent!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
