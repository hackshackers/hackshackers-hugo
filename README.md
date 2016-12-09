# Hacks/Hackers

[![wercker status](https://app.wercker.com/status/fe62437d890aa393a1bd651a16be98a9/s/master "wercker status")](https://app.wercker.com/project/byKey/fe62437d890aa393a1bd651a16be98a9)

This site is built using [Hugo](https://gohugo.io), a static site generator written in [Go](http://golang.org/). This repository contains the general site configuration, sample content, and the `hackshackers-2017` theme.

All of the **live** content is in the [hackshackers-hugo-content](https://github.com/hackshackers/hackshackers-hugo-content) repository, which is a [submodule](https://github.com/blog/2104-working-with-submodules) of the main repo.

### Local dev setup

To start the local Go server at [http://localhost:1313/](http://localhost:1313/) with pages compiled from the `sample-content/` directory:

1. [Install](https://gohugo.io/overview/installing/) Hugo
1. `$ git clone git@github.com:hackshackers/hackshackers-hugo.git`
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

### Pull requests and deployments

To edit the Hugo site configuration or the theme, fork _this repo_ ([hackshackers-hugo](https://github.com/hackshackers/hackshackers-hugo)) and make a pull request.

To edit the content or metadata of existing pages, or to create a new page, fork [hackshackers-hugo-content](https://github.com/hackshackers/hackshackers-hugo-content) and make a pull request.

New commits on the `master` branch will trigger an automatic Hugo rebuild and deployment to http://hh-production.s3-website-us-west-2.amazonaws.com/

The `staging` branch works the same way, but deploys to http://hh-staging.s3-website-us-west-2.amazonaws.com/
