#!/usr/bin/env node

const babyparse = require('babyparse');
const fs = require('fs');
const glob = require('glob');
const https = require('https');
const matter = require('gray-matter');
const path = require('path');

const contentDir = 'content/data/groups';
const contentAbsDir = path.join(__dirname, contentDir);
const geoApiToken = fs.readFileSync('geo-api-token.txt', 'utf8');

if (!geoApiToken) {
  console.log('MapBox API token is required in ./geo-api-token.txt');
  process.exit();
}

/**
 * Get lat/lon for a location string
 *
 * @param string Location
 * @param func  Callback function after fetching coordinates
 * @return array [lat, lon]
 */
function _getCoordinates(location, callback) {
  const search = location.trim().replace(/[^\w]+/, '+');
  const requestUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${geoApiToken}`;
  https.get(requestUrl, (res) => {
    if (200 !== res.statusCode) {
      console.log(`LatLon search failed for ${location}`);
      callback(null);
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      try {
        const coordinates = JSON.parse(rawData).features[0].center;
        // GeoJSON returns lon,lat but Leaflet.js wants lat,lon
        coordinates.reverse();
        callback(coordinates);
      } catch (err) {
        console.log(err.message);
        callback(null);
      }
    });
  });
}

/**
 * Import a group to YAML
 *
 * @param obj groupInput Group data
 *    string slug     For filename
 *    string label    For map pins, etc.
 *    string url      External URL (e.g. Meetup)
 *    string location Location to search for GPS coordinates
 */
function _importGroup(groupInput) {
  _getCoordinates(groupInput.location, (coordinates) => {
    // Setup group metadata object
    const groupMeta = { label: groupInput.label };
    if (groupInput.url) {
      groupMeta.externalUrl = groupInput.url;
    }
    if (coordinates) {
      groupMeta.coordinates = coordinates;
    }

    const yamlOut = matter.stringify('', groupMeta, { delims: ['', ''] }).trim();
    console.log(`Writing to ${groupInput.slug}.yml`);
    console.log(yamlOut);
    fs.writeFileSync(path.join(contentAbsDir, `${groupInput.slug}.yml`), yamlOut);
  });
}

/**
 * Read input file, delete old data, and start importing, assumes command:
 * node import-groups-csv.js ~/path/to/csv/file.csv
 */
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;

  // Parse file
  const parsed = babyparse.parse(data, {
    header: true,
  });

  // Check for errors
  if (parsed.errors.length) {
    console.log('CSV parsing errors:');
    console.log(parsed.errors);
    process.exit();
  }

  // Check for data
  if (!parsed.data.length) {
    console.log('Parsed data is empty');
    process.exit();
  }

  // Delete the existing files, except the example group
  glob(`${contentAbsDir}/*.yml`, { ignore: '**/example-group.yml' }, (err, files) => {
    if (err) throw err;
    console.log(`Deleting ${files.length} files`);
    files.forEach((file) => fs.unlinkSync(file));

    // Start the import!
    parsed.data.forEach(_importGroup);
  });
});
