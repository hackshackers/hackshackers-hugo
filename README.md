# Hacks/Hackers

This site is built using [Hugo](https://gohugo.io), a static site generator written in [Go](http://golang.org/). This repository contains the general site configuration and `hackshackers-2017` theme; all of the content should live in the [hackshackers-hugo-content](https://github.com/hackshackers/hackshackers-hugo-content) repository, which is a submodule of the main repo.

### Local dev setup

1. [Install](https://gohugo.io/overview/installing/) Hugo
1. Clone/download this repo
  1. Make sure to initialize the submodule in `content/`
1. `$ hugo serve`

That will build the static pages and start the local Go server at [http://localhost:1313/](http://localhost:1313/).

### Working with site assets

```
$ cd themes/hackshackers-2017
$ npm install
$ npm start
```

This will start [Webpack](https://webpack.github.io/). Source files for SASS, JS, and images live in `themes/hackshackers-2017/client/`. Webpack will watch for changes and recompile as needed. When Webpack recompiles, it will trigger a reload of the page.