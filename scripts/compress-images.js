const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 需要处理的图片目录
const directories = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../src/assets'),
  path.join(__dirname, '../src/assets/images')
];

// 支持的图片格式
const imageExtensions = ['.png', '.jpg', '.jpeg'];

// 压缩选项
const compressionOptions = {
  png: {
    quality: 75,
    compressionLevel: 9,
    effort: 10
  },
  jpeg: {
    quality: 75,
    mozjpeg: true
  }
};

// 最大重试次数
const MAX_RETRIES = 3;

// 文件大小阈值（字节）
const SIZE_THRESHOLD = 200 * 1024; // 200KB

// 递归遍历目录
async function processDirectory(directory) {
  try {
    const files = fs.readdirSync(directory);
    
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        await compressImage(filePath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

// 压缩单个图片
async function compressImage(filePath, retryCount = 0) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const options = ext === '.png' ? compressionOptions.png : compressionOptions.jpeg;
    
    const originalSize = fs.statSync(filePath).size;
    
    // 如果文件小于阈值，跳过压缩
    if (originalSize < SIZE_THRESHOLD) {
      console.log(`Skipping ${path.basename(filePath)}: Size already below threshold`);
      return;
    }
    
    console.log(`Compressing: ${filePath}`);
    
    const data = await sharp(filePath)
      .toFormat(ext.slice(1), options)
      .toBuffer();
    
    const tempPath = filePath + '.temp';
    fs.writeFileSync(tempPath, data);
    const newSize = fs.statSync(tempPath).size;
    
    // 确保压缩后的文件质量可接受
    if (newSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
      console.log(`✓ Compressed ${path.basename(filePath)}: ${savings}% reduction`);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`! Skipped ${path.basename(filePath)}: Compression would increase file size`);
    }
  } catch (error) {
    console.error(`Error compressing ${filePath}:`, error);
  }
}

// 开始处理所有目录
console.log('Starting image compression...');
Promise.all(directories.map(dir => processDirectory(dir)))
  .then(() => console.log('Image compression completed!'))
  .catch(error => console.error('Error during compression:', error));