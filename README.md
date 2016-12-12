# Hacks/Hackers

[![wercker status](https://app.wercker.com/status/fe62437d890aa393a1bd651a16be98a9/s/master "wercker status")](https://app.wercker.com/project/byKey/fe62437d890aa393a1bd651a16be98a9)


## Overview

This site is built using [Hugo](https://gohugo.io), a static site generator written in [Go](http://golang.org/).

This is the "main" repository, containing general site configuration, sample content, and the `hackshackers-2017` [theme](https://gohugo.io/themes/overview/). **The theme contains all of the templates, CSS, and JS files.**

All of the site's content pages are generated from Markdown files in [hackshackers-hugo-content](https://github.com/hackshackers/hackshackers-hugo-content). **Think of that repository as the database.** It is included as a [submodule](https://github.com/blog/2104-working-with-submodules) of the main repo.

## Local dev setup

To start the local Go server at [http://localhost:1313/](http://localhost:1313/) with pages compiled from the `sample-content/` directory:

1. [Install](https://gohugo.io/overview/installing/) Hugo
1. `$ git clone https://github.com/hackshackers/hackshackers-hugo.git`
  1. Or `$ git clone git@github.com:hackshackers/hackshackers-hugo.git` if you have a SSH key set up
1. `$ cd hackshackers-hugo`
1. `$ hugo --config=devConfig.toml server`

Git submodules can be tricky to work with, so we recommend using the sample content. But if you _really_ want to run the production content locally, replace step 4 with:

1. `$ git submodule update --init --recursive`
1. `$ hugo server`

Once the local server is running, it will watch for changes when you save the files you're working on and automatically reload any open browser tabs.

### Working with site assets

We use [Webpack](https://webpack.github.io/) to "bundle" CSS and JavaScript files.

```
$ cd themes/hackshackers-2017
$ npm install
$ npm start
```

This will start Webpack and watch for changes in `themes/hackshackers-2017/webpack-src/`. Files in this directory should **not** be loaded directly; we use them only as to create the Webpack bundle.

`themes/hackshackers-2017/static/` contains assets that **can** be referenced directly by HTML pages:

* `webpack/` - compiled Webpack assets
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

We have three development tiers to which we deploy automatically when new commits are received in the corresponding Github branch in **hackshackers-hugo**:

| Branch     | Tier          | Usage |
|------------|---------------|-------|
| `production` | [hh-production](http://hh-production.s3-website-us-west-2.amazonaws.com/)<br>(hackshackers.com) | Restricted branch for the live site; this branch should **only** receive commits from the `master` branch. |
| `master`     | [hh-staging](http://hh-staging.s3-website-us-west-2.amazonaws.com/) | Branch off and merge into `master`; use `hh-staging` for final pre-production QA testing before merging to `production`. |
| `sandbox`    | [hh-sandbox](http://hh-sandbox.s3-website-us-west-2.amazonaws.com/) | This branch is **never** merged to production; use for testing unfinished work. |

### Deploying new/updated content

New commits on the `master` branch of **hackshackers-hugo-content** are automatically pulled into both the `production` and `master` branches of **hackshackers-hugo**, which then deploy automatically to the production and staging tiers, respectively.
