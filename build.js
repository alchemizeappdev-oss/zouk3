const fs = require('fs');
const key = process.env.HF_KEY || '';
fs.writeFileSync('config.js', `window.HF_KEY = "${key}";\n`);
console.log('config.js written');
