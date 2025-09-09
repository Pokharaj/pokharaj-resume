import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');
const notFoundPath = path.join(distDir, '404.html');

// Read the index.html file
const indexContent = fs.readFileSync(indexPath, 'utf8');

// Extract the asset paths from the original index.html
const scriptMatch = indexContent.match(/<script type="module" crossorigin src="([^"]*)"><\/script>/);
const cssMatch = indexContent.match(/<link rel="stylesheet" crossorigin href="([^"]*)">/);

const scriptSrc = scriptMatch ? scriptMatch[1] : '/pokharaj-resume/assets/index.js';
const cssHref = cssMatch ? cssMatch[1] : '/pokharaj-resume/assets/index.css';

// Create 404.html with GitHub Pages SPA redirect script
// Remove the URL restoration script from index.html and replace with redirect script
const notFoundContent = indexContent
  .replace(/<!-- Start Single Page Apps for GitHub Pages -->[\s\S]*?<!-- End Single Page Apps for GitHub Pages -->/, '')
  .replace(
    /<script type="module" crossorigin src="[^"]*"><\/script>/,
    `<!-- GitHub Pages SPA redirect script -->
<script>
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  // This script takes the current url and converts the path and query
  // string into just a query string, and then redirects the browser
  // to the new url with only a query string and hash fragment,
  // e.g. https://www.foo.tld/one/two?a=b&c=d#qwe, becomes
  // https://www.foo.tld/?/one/two&a=b~and~c=d#qwe
  // Note: this 404.html file must be at least 512 bytes for it to work
  // with Internet Explorer (it is currently > 512 bytes)

  var pathSegmentsToKeep = 1; // Keep the base path segment
  var basePath = '/pokharaj-resume';

  var l = window.location;
  var currentPath = l.pathname;
  
  // If we're already on the base path, redirect to root with query
  if (currentPath === basePath + '/' || currentPath === basePath) {
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      basePath + '/?/' + l.hash
    );
  } else {
    // For other paths, use the standard redirect logic
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  }
</script>

<script type="module" crossorigin src="${scriptSrc}"></script>`
  );

// Write the 404.html file
fs.writeFileSync(notFoundPath, notFoundContent);

console.log('✅ Created 404.html with GitHub Pages SPA redirect script');
