#!/usr/bin/env node
/**
 * Initialize Hugo-Lunr indexing
 */

var hugolunr = require('hugo-lunr');
var path = require('path');
var indexer = new hugolunr();
var dir = process.argv[2];

// Process file content before adding to index JSON file
var readFileCallback = function(fileData) {
  if (!fileData.content) {
    return fileData;
  }
  // Strip Hugo shortcodes
  fileData.content = fileData.content.replace(/{{ \w+ .*?}}/gi, '');

  return fileData;
}

indexer.setInput(path.join(dir, '**'));
indexer.setOutput('themes/hackshackers-2017/static/js/lunr-index.json');
indexer.setExcludes([
  path.join(dir, 'data', '**'),
  path.join(dir, 'content-images', '**'),
  path.join(dir, '**/README.md'),
  path.join(dir, '**/_index.md'),
  path.join(dir, 'wercker.yml')
]);
indexer.setFileOpts({
  matter: {delims: '---', lang:'yaml'},
  taxonomies: ['tags', 'categories', 'authors'],
  params: ['date'],
  callback: readFileCallback
});
indexer.index();
