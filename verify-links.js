import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
let totalLinksChecked = 0;
let errors = [];

function checkHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileDir = path.dirname(filePath);

  // Match href and src attributes
  const linkRegex = /(?:href|src)=["']([^"'#]+)(?:#[^"']*)?["']/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    let rawUrl = match[1];
    if (
      rawUrl.startsWith('http://') ||
      rawUrl.startsWith('https://') ||
      rawUrl.startsWith('mailto:') ||
      rawUrl.startsWith('tel:') ||
      rawUrl.startsWith('data:') ||
      rawUrl === '#'
    ) {
      continue;
    }

    // Strip query string if present
    const cleanUrl = rawUrl.split('?')[0];

    totalLinksChecked++;
    let resolved;
    if (cleanUrl.startsWith('/')) {
      resolved = path.join(distDir, cleanUrl);
    } else {
      resolved = path.resolve(fileDir, cleanUrl);
    }

    if (!fs.existsSync(resolved)) {
      errors.push({
        source: path.relative(distDir, filePath),
        link: rawUrl,
        resolved: path.relative(distDir, resolved),
      });
    }
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (f.endsWith('.html')) {
      checkHtmlFile(fullPath);
    }
  }
}

walkDir(distDir);
console.log(`Checked ${totalLinksChecked} internal links across all compiled HTML pages.`);
if (errors.length > 0) {
  console.error('Found broken links:', errors);
  process.exit(1);
} else {
  console.log('Success! All internal links and asset references resolved with 0 broken links!');
}
