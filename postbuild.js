const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy assets if needed
if (fs.existsSync('www')) {
  fs.cpSync('www', 'dist', { recursive: true });
}
