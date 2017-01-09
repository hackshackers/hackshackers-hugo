#!/usr/bin/env node
/**
 * Initialize Hugo-Lunr indexing
 */

var hugolunr = require('hugo-lunr');
var path = require('path');
var indexer = new hugolunr();
var dir = process.argv[2];

indexer.setInput(path.join(dir, '**'));
indexer.setOutput('themes/hackshackers-2017/static/js/lunr-index.json');
indexer.setExcludes([
  path.join(dir, 'data', '**'),
  path.join(dir, 'content-images', '**')
]);
indexer.index();
