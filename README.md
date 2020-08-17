# Hacks/Hackers

## Overview

This site is built using [Hugo](https://gohugo.io), a static site generator written in [Go](http://golang.org/).

## Editing content

Make updates to Markdown files in the `content/` directory. Be sure to follow the patterns for YAML "front matter".

Make sure to use [Hugo shortcodes](https://gohugo.io/content-management/shortcodes/), especially our [custom shortcodes](themes/hackshackers-2017/layouts/shortcodes) for iframes and Tweet embeds.

## Setup

### Install Hugo

[Install](https://gohugo.io/getting-started/installing/) Hugo if you haven't already.

The current production build uses **v0.42.1**. If your local build fails, use `$ hugo version` to see what's currently installed on your machine and [upgrade](https://gohugo.io/getting-started/installing/#upgrade-hugo) if needed. If you can't get it to work, let us know!

### Run a local dev site

```
$ hugo serve
```

This command starts the local Go server. It will watch for changes and reload the page in your browser. You'll see a message like:

```
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
```

### Working with site assets

#### JS 

JS and CSS assets are part of the `hackshackers-2017` theme. Source files are in `themes/hackshackers-2017/webpack-src/` and compile to `themes/hackshackers-2017/static/js`. Note that the Webpack bundle is tracked in Git so you need to `npm run build` and commit it before it can be deployed.

```
$ cd themes/hackshackers-2017
$ npm install
$ npm start
```

#### Other static asssets

`themes/hackshackers-2017/static/` contains assets that **can** be referenced directly by HTML pages:

* `js/` - compiled Webpack files and other JS
* `images/` - images that belong to the _theme_ (not content images
* `svg/` - SVG assets
* other stuff as needed

Each of these subdirectories of `themes/hackshackers-2017/static/` is copied to the _root directory_ when a Hugo build happens. So you would include them with a root-relative URL like:

```
/themes/hackshackers-2017/static/images/work.png
...
<img src="/images/work.png">
```

### Lunr.js search index

`npm run indx` is used in the Amplify pre-build phase to generate a search index for Lunr.js. See `init-hugo-lunr.js`. 

## Branching and pull requests

1. Fork the repository
1. `$ git checkout master && git pull origin master` (ensures you have the latest updates)
1. `$ git checkout -b [my-feature-branch]` (creates and checks out a new branch)
1. Make your changes and test them locally
1. `$ git push origin [my-feature-branch]`
1. Go to GitHub and make a pull request to merge your changes into the `master` branch of `hackshackers/hackshackers-hugo`

## Hosting and deployments

The site is hosted on AWS using [Amplify](https://aws.amazon.com/amplify/) to automate builds, S3 hosting, and CloudFront CDN.

New commits on the `master` branch automatically trigger a rebuild and deployment.
