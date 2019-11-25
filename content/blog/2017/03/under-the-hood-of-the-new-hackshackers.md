---
title: Under the hood of the new hackshackers.com
authors:
  - Josh Kadis
categories:
  - Technology
date: 2017-03-10
---

_If you just want to know how to contribute code or text, check out the [Hack This Site][1] documentation. If you're curious about the design process, we'll cover that soon in another post. If you want to learn more about how the site works, read on._

This being Hacks/Hackers, an imperative for this site was the idea that anyone can "hack" it. In practice, this meant that we needed an architecture that lets anyone tinker with the site's container (HTML templates, JavaScript, and CSS) as well as its content.

In the CMS-driven sites that we're all used to building and using, authors write content on one web page, which sends it to a server, which saves it to a row in the database. When someone's browser requests a URL on the site, the server figures out which database row corresponds to the request, fetches it from the database, builds a HTML page, and sends it back to the browser. (This is an oversimplified version.)

Within this standard architecture, we could open-source the container's code in a public GitHub repository. But that's not feasible for the content; it needs the context of the server.

## Thinking static

Thinking about opening up the content, our team at Alley Interactive started looking at static site generators. These are programs that translate static content files (usually [Markdown][2]) and templates to static HTML files that are uploaded to the site. Unlike the continuously running programs that power a CMS, the static site generator runs only when you need to compile a build.

Going back to that oversimplified explanation of a CMS, what actually happens when someone's browser requests a URL is that they probably receive a cached version of the HTML page. This saves the server from rebuilding the same HTML page over and over, and improves performance.

With a static site generator, the cache is the whole site. It's _fast_.

## Hello, Hugo

So, which static site generator to use? The incumbent was [Jekyll][3], written in Ruby. The upstart was [Hugo][4], written in Go.

|                         | Jekyll | Hugo |
|-------------------------|--------|------|
| Adoption/popularity     | ✔︎      |      |
| Ease of setup           |        | ✔︎    |
| Plugin architecture     | ✔︎      |      |
| Documentation           | ✔︎      |      |
| Code/content separation |        | ✔︎    |
| JS/CSS flexibility      |        | ✔︎    |
| Build speed             |        | ✔︎    |
| Something new           |        | ✔︎    |

As the static site generator that powers [GitHub Pages][5], Jekyll is by far the more popular. It has plenty of plugin hooks and clear documentation. Jekyll is very solid.

But it had two main drawbacks for our goal of making both the container and content user-editable. One, setting up a local Ruby environment could be a drag for anyone who wanted to tinker with the site. Two, Jekyll requires a file structure that makes it hard to wall content off from code.

Hugo, on the other hand, is a breeze to set up. Because all the content is in its own directory, we can make that a completely separate [GitHub repository][6]. It's also less opinionated about how you set up your JavaScript and CSS, and the site builds are lightning-fast -- milliseconds instead of minutes.

Overall, Hugo's easy setup and build speed convinced us that it was the better choice to help more people make more contributions to hackshackers.com.

## Other (technical) stuff

In a standard Hugo setup, all the content source files live in the `content/` directory. This served us well, because we could make it an entirely separate repository included as a [Git submodule][7] of the [main site][8]. Hugo's configuration also allowed us to place the data files inside the content repository, although our build script has to delete them before deploying the finished site.

Speaking of the [build script][9], we used [Wercker][10], a [Docker][11]-based service that integrates with GitHub. When there are new commits on the `master` branch of the main repository, Wercker runs a fresh Hugo build and pushes the resulting files to Amazon S3. There's a [separate build script][12] for new commits in the content submodule.

The map on the homepage and Groups page is generated using [Leaflet.js][13] and Hugo [data files][14]. Leaflet is pretty awesome and handled most everything we wanted to do by default. The only nonstandard feature is a [custom button][15] on mobile screens that toggles whether the map is draggable. This prevents it from capturing page scroll when you don't want it to.

Finally, search can be the Achilles heel of static sites. But [Lunr.js][16] solved it for us quite easily. After each Hugo build, we rebuild a site index file. It takes a moment to load the index on the [search page][17], but then each search takes only milliseconds.

_Josh Kadis is the Director of Product Development for [Alley Interactive][18], the digital team for publishers. Alley is proud to support Hacks/Hackers, OpenNews, and other organizations at the intersection of journalism and technology._

[1]: /hack-this-site/
[2]: https://daringfireball.net/projects/markdown/
[3]: https://jekyllrb.com/
[4]: https://gohugo.io/
[5]: https://pages.github.com/
[6]: https://github.com/hackshackers/hackshackers-hugo-content
[7]: https://github.com/blog/2104-working-with-submodules
[8]: https://github.com/hackshackers/hackshackers-hugo
[9]: https://github.com/hackshackers/hackshackers-hugo/blob/master/wercker.yml
[10]: https://www.wercker.com/
[11]: https://www.docker.com/
[12]: https://github.com/hackshackers/hackshackers-hugo-content/blob/master/wercker.yml
[13]: http://leafletjs.com/
[14]: https://gohugo.io/extras/datafiles/
[15]: https://github.com/hackshackers/hackshackers-hugo/blob/master/themes/hackshackers-2017/webpack-src/js/map/index.js#L87
[16]: http://lunrjs.com/
[17]: /search/#hacks
[18]: https://www.alleyinteractive.com/

<meta name="twitter:card" content="summary">
<meta name="twitter:image:src" content="https://hackshackers.com/content-images/about/hackshackers_logomark.png">
