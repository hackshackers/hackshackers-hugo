#!/usr/bin/env node
/**
 * Initialize Hugo-Lunr indexing
 */

var hugolunr = require('hugo-lunr');
var path = require('path');
var indexer = new hugolunr();
var entities = require('entities');

// Process file content before adding to index JSON file
var readFileCallback = function (fileData) {
  if (!fileData.content) {
    return fileData;
  }

  // Strip Hugo shortcodes
  fileData.content = fileData.content.replace(/{{ \w+ .*?}}/gi, '');

  // Decode HTML entities
  fileData.content = entities.decodeHTML(fileData.content);

  return fileData;
};

const contentDir = 'content';

indexer.setInput(path.join(contentDir, '**'));
indexer.setOutput('themes/hackshackers-2017/static/lib/lunr-index.json');
indexer.setExcludes([
  path.join(contentDir, 'data', '**'),
  path.join(contentDir, 'content-images', '**'),
  path.join(contentDir, '**/README.md'),
  path.join(contentDir, '_index.md'),
]);
indexer.setFileOpts({
  matter: { delims: '---', lang: 'yaml' },
  taxonomies: ['tags', 'categories', 'authors'],
  params: ['date'],
  callback: readFileCallback
});
indexer.index();
