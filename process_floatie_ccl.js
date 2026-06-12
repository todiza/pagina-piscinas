const { Jimp } = require('jimp');
const path = require('path');

const imagePath = path.join(__dirname, 'public/images/hero_floatie.png');

console.log('Reading image from:', imagePath);
Jimp.read(imagePath).then(image => {
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  const data = image.bitmap.data;

  console.log(`Image loaded: ${width}x${height}. Scanning pixels...`);

  // Helper to check if pixel is background-like (bright and neutral)
  // We use a lower brightness threshold (120) to capture shadows, and a higher saturation
  // tolerance for very bright pixels to capture yellow color bleed at the floatie outer edges.
  function isBgColor(x, y) {
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx+1];
    const b = data[idx+2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max - min;
    const bri = (r + g + b) / 3;
    
    if (bri > 220) {
      return sat < 65; // captures yellow reflections on white background
    }
    return bri > 120 && sat < 35; // captures darker shadows in donut holes
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
      let touchesBorder = false;

      while (head < queue.length) {
        const curr = queue[head++];
        const cx = curr % width;
        const cy = Math.floor(curr / width);
        component.push(curr);

        if (cx === 0 || cx === width - 1 || cy === 0 || cy === height - 1) {
          touchesBorder = true;
        }

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

      // If the component touches the border (outer background) OR is larger than 150 pixels (torso & leg holes)
      if (touchesBorder || component.length > 150) {
        console.log(`Component size: ${component.length}, touchesBorder: ${touchesBorder} -> Set to transparent`);
        for (let i = 0; i < component.length; i++) {
          bgMask[component[i]] = 1;
        }
      } else {
        // Small components like swimsuit highlights are kept opaque
        console.log(`Small component size: ${component.length} at (${component[0] % width}, ${Math.floor(component[0] / width)}) -> Kept opaque`);
      }
    }
  }

  console.log('Feathering alpha channel edges (5x5 kernel)...');
  const smoothAlpha = new Uint8Array(width * height);
  const radius = 2; // 5x5 kernel for very soft edges
  
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

  console.log('Saving processed image...');
  return image.write(imagePath);
}).then(() => {
  console.log('Advanced transparency keying and feathering completed successfully.');
}).catch(err => {
  console.error('Error processing image:', err);
});
