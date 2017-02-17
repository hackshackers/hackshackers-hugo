#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter');

const contentDir = 'content';
const contentAbsDir = path.join(__dirname, contentDir);

glob(`${contentDir}/**/*.md`, { ignore: '**/README.md' }, (err, files) => {
  if (err) throw err;
  console.log(`found ${files.length} files`);
  files.forEach(processFile);
});

/**
 * Process a file
 *
 * @param string file Relative path to file
 */
function processFile(file, idx) {
  const rawFile = fs.readFileSync(file, 'utf8');

  let content;
  try {
    // Read the file but ignore the links at the bottom
    content = matter.read(file).content;
    content = content.split('[1]')[0].trim();
  } catch (e) {
    console.log(`Error parsing ${file}`);
    return;
  }

  const converted = convertShortcodeEmbeds(content);

  // Check for unconverted embeds
  const remainingEmbeds = getEmbedUrls(converted);
  if (remainingEmbeds && remainingEmbeds.length) {
    console.log([`Check embeds in ${file} (${idx}):`, ...remainingEmbeds, ''].join("\n"));
  }

  // Skip if no changes
  if (converted === content) {
    return;
  }

  fs.writeFile(file, rawFile.replace(content, converted), (err) => {
    if (err) {
      console.log(`Error writing to ${file}`);
    }
    console.log(`Wrote to ${file}`);
  });
}

/**
 * Get URLs of embedded content
 *
 * @param string Markdown content
 * @return array URLs of embedded content
 */
function getEmbedUrls(content) {
  // strip URLs that are links, either (foo)[http://bar] or {{< link="http://bar" ... >}}
  const strippedLinks = content.replace(/(\[|link=")http:/, '');

  // ok to use inexact regex, these will need to be checked manually anyway
  return strippedLinks.match(/http:[\w\/-_\.]+/g);
}

/**
 * Convert http -> https embeds Hugo shortcodes
 *
 * @param string content Original content
 * @return string Converted content
 */
function convertShortcodeEmbeds(content) {
  let converted = content;

  // replace Meetup static domains
  converted = converted.replace(/http:\/\/photos\d.meetupstatic/, 'https://secure.meetupstatic');

  // Replace Hugo shortcodes
  converted = converted.replace('src="http:', 'src="https:');
  return converted;
}
