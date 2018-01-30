# Hacks/Hackers

## Overview

This site is built using [Hugo](https://gohugo.io), a static site generator written in [Go](http://golang.org/).

This is the "main" repository, containing general site configuration, sample content, and the `hackshackers-2017` [theme](https://gohugo.io/themes/overview/). **The theme contains all of the templates, CSS, and JS files.**

All of the site's content pages are generated from Markdown files in [hackshackers-hugo-content](https://github.com/hackshackers/hackshackers-hugo-content). **Think of that repository as the database.**

## Setup

### Install Hugo

[Install](https://gohugo.io/overview/installing/) Hugo if you haven't already.
The minimum required version is **v0.34**.

Use `$ hugo version` to see what's currently installed on your machine and then upgrade if needed.

### Download the content

`cd` into the root of this repository and download the content into a directory called `content`:

```
$ cd hackshackers-hugo
$ git clone https://github.com/hackshackers/hackshackers-hugo-content.git content
```

### Run a local dev site

```
$ hugo serve
```

This command starts the local Go server. It will watch for changes and reload the page in your browser. You'll see a message like:

```
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
```

### Working with site assets

We use [Webpack](https://webpack.github.io/) to "bundle" CSS and JavaScript files.

```
$ cd themes/hackshackers-2017
$ npm install
$ npm start
```

This will start Webpack and watch for changes in `themes/hackshackers-2017/webpack-src/`. Files in this directory should **not** be loaded directly; we use them only as to create the Webpack bundle.

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

## Branching and pull requests

1. Fork the repository
  1. Use [hackshackers-hugo](https://github.com/hackshackers/hackshackers-hugo) for updates to the Hugo site config and site theme.
  1. Use [hackshackers-hugo-content](https://github.com/hackshackers/hackshackers-hugo-content) to edit the content of existing pages or add new pages to the site.
1. `$ git checkout master && git pull origin master` (ensures you have the latest updates)
1. `$ git checkout -b [my-feature-branch]` (creates and checks out a new branch)
1. Make your changes and test them locally
1. `$ git push origin [my-feature-branch]`
1. Go to GitHub and make a pull request to merge your changes into the `master` branch of `hackshackers/hackshackers-hugo` or `hackshackers/hackshackers-hugo-content`

## Deployments

We have two development tiers to which we deploy automatically when new commits are received in a corresponding Github branch in **hackshackers-hugo**:

| Branch     | Tier          | Usage |
|------------|---------------|-------|
| `master` | [hh-production](http://hh-production.s3-website-us-west-2.amazonaws.com/)<br>(hackshackers.com) | Restricted branch for the live site; this branch should **only** receive commits via pull request. |
| `sandbox`    | [hh-sandbox](http://hh-sandbox.s3-website-us-west-2.amazonaws.com/) | This branch is **never** merged to `master`; use for testing unfinished work. |

### Deploying new/updated content

New commits on the `master` branch of **hackshackers-hugo-content** are automatically pulled into both the `production` and `sandbox` branches of **hackshackers-hugo**, which then deploy automatically to the production and sandbox tiers, respectively.
