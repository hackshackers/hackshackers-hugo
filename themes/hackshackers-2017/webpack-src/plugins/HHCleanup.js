/**
 * Webpack plugin for versioning bundles and chunks with the hash of the last Git commit
 */

var fs = require('fs');
var path = require('path');

/**
 * Setup bindings
 */
function HHCleanup(themeRootDir) {
  this.root = themeRootDir;
  this.cleanup = this.cleanup.bind(this);
};

/**
 * Do the cleaning up
 */
HHCleanup.prototype.cleanup = function() {
  // Delete unneeded styles.js that Webpack creates because we have a styles.css
  console.log('Deleting styles.js');
  fs.unlinkSync(path.resolve(this.root, '../static/lib/styles.js'));

  // Move CSS to partial so it can be included inline in templates
  console.log('Moving styles.css to partials/utils');
  fs.renameSync(
    path.resolve(this.root, '../static/lib/styles.css'),
    path.resolve(this.root, '../layouts/partials/utils/styles.css')
  );
}

/**
 * Hook into webpack plugin architecture
 */
HHCleanup.prototype.apply = function(compiler) {
  compiler.plugin('done', this.cleanup);
}

module.exports = HHCleanup;
