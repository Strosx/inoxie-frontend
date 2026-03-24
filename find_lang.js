const fs = require('fs');
const path = require('path');

// Try to find the [lang] directory
const appDir = "C:\\Users\\macie\\Documents\\repos\\inoxie-frontend\\app";
const entries = fs.readdirSync(appDir);
console.log('App dir entries:', entries.slice(0, 5));
const langDir = entries.find(d => d.startsWith('['));
console.log('Lang dir:', langDir);
