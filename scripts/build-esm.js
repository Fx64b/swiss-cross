const fs = require('fs');
const path = require('path');

// Copy CommonJS build to main dist directory
const sourceDir = path.join(__dirname, '../dist');
const esmDir = path.join(__dirname, '../dist/esm');

// Create package.json for ESM
const esmPackageJson = {
  "type": "module"
};

if (!fs.existsSync(esmDir)) {
  fs.mkdirSync(esmDir, { recursive: true });
}

fs.writeFileSync(
  path.join(esmDir, 'package.json'),
  JSON.stringify(esmPackageJson, null, 2)
);

// Copy ESM files and rename .js to .esm.js in main dist
function copyAndRename(srcDir, destDir, suffix = '') {
  const files = fs.readdirSync(srcDir);
  
  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const stats = fs.statSync(srcPath);
    
    if (stats.isDirectory()) {
      const newDestDir = path.join(destDir, file);
      if (!fs.existsSync(newDestDir)) {
        fs.mkdirSync(newDestDir, { recursive: true });
      }
      copyAndRename(srcPath, newDestDir, suffix);
    } else if (file.endsWith('.js')) {
      const newName = file.replace('.js', `${suffix}.js`);
      const destPath = path.join(destDir, newName);
      fs.copyFileSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, path.join(destDir, file));
    }
  });
}

// Copy ESM files to main dist with .esm.js extension
copyAndRename(esmDir, sourceDir, '.esm');