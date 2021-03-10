---
title: Open(source).athon in NYC kicks off
authors:
- stacycowley
date: "2010-10-02"
_migration:
  id: 900
  timestamp: 1486602236
tags:
- Hackathons
- nyc
categories:
- News
groups:
- New York
---

{{< figure link="/content-images/news/2010/10/hackathon-0261.jpg" src="/content-images/news/2010/10/hackathon-0261.jpg" >}}

Hi from the inaugural Hacks/Hackers NYC Hackathon, where the caffeine has been replenished and the coders are getting down to geekery.

For the full-real time experience, you can follow [@opensourceathon][1] and watch [#hackshackers][2]. I&#8217;ll be blogging notes from the day, recapping the speakers&#8217; presentations and chronicling what the programming teams are working on.

We started the day with a crisis: Coffee shortage! Fortunately, [Jenny 8. Lee][3] charged into the fray and returned with provisions. Lots and lots of fully-caffeine-loaded provisions (we unanimously ruled decaf &#8220;not coffee&#8221;).

Armed with java and bagels, we gathered for the opening presentation from Aaron Williamson, counsel to the [Software Freedom Law Center][4].

<!--more-->

**Open-source licensing 101** (an overview of Aaron&#8217;s remarks, direct quotes from him marked)

All open-source licenses give you the right to copy, modify and redistribute code. They don&#8217;t limit who can use the code: It&#8217;s not an open-source license if you can&#8217;t use the software commercially, or for military applications.

The place to find licenses is at the [Open Source Initiative][5] website. They come in two main flavors, &#8220;copyleft&#8221; and permissive.

A **copyleft** license requires all new code derived from the work to also be released as open-source. It follows the philosophy of [Richard Stallman][6] (a &#8220;free software moralist&#8221;), and the most popular copyleft license is the [GNU General Public License][7] (GPL).

**Permissive** licenses don&#8217;t place restrictions on derivative work. You can take the code, build something new with it, and keep that as secret and proprietary as you like. Products derived from permissively licensed open-source software are ubiquitous these days; Apple used BSD as the basis of its Unix-based OS X.

Those are the two camps, but there are a huge range of options along the way, including &#8220;weak copyleft&#8221; licenses (which allow parts of programs to be incorporate into others; [**LGPL**][8] is a common one) and distinctions within the permissive camp, especially around patent protections.

&#8220;Patents have become an enormous problem for software developers. Anyone who owns patents sort of by definition has a lot more money than you do.&#8221; A bunch of modern licenses &#8212; notably, [Apache 2.0][9] &#8212; pass on patent licenses from all the contributors. &#8220;In many ways these are symbolic gestures. If Oracle comes along and sues me, unless Oracle contributes to that program I don&#8217;t have a patent license.&#8221;

Communities tend to coalesce around a preferred license; for example, Ruby coders have adopted the highly permissive [MIT License][10] (which is &#8220;badly written&#8221; &#8212; too much passive voice! &#8212; &#8220;but a fine license&#8221;). You&#8217;re free to adopt any license you like for your own products, but you&#8217;ll be swimming upstream if you ditch the license the community knows and likes: &#8220;If you damn the torpedoes and go GPL, the trade-off will be fewer people using your code.&#8221;

Other notable licenses: The [Affero General Public License][11] (AGPL) tries to solve a loophole. The GPL (which was first used in the late &#8217;80s) is linked to physical distribution of a software program. But now many apps are used over a network. The AGPL explicitly extends the license&#8217;s protections to software accessed that way.

Sick of TLAs and legal minutia yet? If so, check out [WTFPL][12], which is exactly what it sounds like. The FAQ is excellent: &#8220;What the $%#! is not clear in “DO WHAT THE $%#! YOU WANT TO?&#8221; (that is an, er, edited version). Aaron&#8217;s take: &#8220;It&#8217;s a valid free software license as far as I&#8217;m concerned.&#8221;

Aaron did a quick run-through on public domain issues, starting with the two ways works can become public domain: 1) the copyright expires, or 2) the creator explicitly abandons their copyright.

Route #1 &#8220;almost never happens now &#8212; the lawyers and Senators who work for Disney will keep extending copyright indefinitely.&#8221; Route #2 is harder than you&#8217;d think. Some jurisdictions &#8212; primarily in Europe, especially Germany and France &#8212; have strong &#8220;moral rights&#8221; stances and basically don&#8217;t let a creator waive all rights forever. &#8220;If you&#8217;re really hardcore public domain, your best option is [Creative Commons 0][13] license. It&#8217;s unclear whether this is effective in all jurisdictions.&#8221; Aaron&#8217;s view: &#8220;I personally wouldn&#8217;t recommend a public domain license for code like Creative Commons &#8212; I think it&#8217;s admirable, but I would go for a highly permissive license if that&#8217;s what you&#8217;re after.&#8221;

Next up, Q&A, starting with the question &#8220;What if there&#8217;s code sitting around on [github][14] or some such with no license attached?&#8221; Aaron&#8217;s answer: &#8220;All rights reserved. If there&#8217;s no license, you have to assume full copyright.&#8221;

Q: &#8220;What does the [noncommercial Creative Commons license][15] block?&#8221; Aaron&#8217;s answer: &#8220;Nobody knows what it prohibits, including the Creative Commons .&#8221; [note-taker&#8217;s interjection: This is a constant headache for reporters &#8212; does editorial use of an image for journalistic purposes on a for-profit news site violate noncommercial rules?] &#8220;I consider noncommercial licenses a baby step for people who are not really comfortable with free culture to wade in a bit.&#8221;

Parting words: &#8220;License proliferation is a problem. I strongly recommend that people choose widely used licenses.&#8221;

**Open-source development 101**

Next up was presenter [Jeremy Ashkenas][16], lead developer at [DocumentCloud][17].

Jeremy&#8217;s run through of open-source basics started with the question &#8220;why do it?&#8221; One answer: &#8220;The more you give away, the more you get back,&#8221; in bug reports and code contributions for things like cross-browser compatibility.

One definition of a good open-source project is one that&#8217;s being actively used, maintained and patched. &#8220;Most open-source projects are failures by that metric.&#8221; It raises an existential question: &#8220;What are doing when you write software and the code isn&#8217;t run and isn&#8217;t read? In what sense are you programming? Is it just a kind of strange essay you&#8217;ve written for yourself?&#8221;

Before you start contributing to a project, learn its ground rules. For example, the [CoffeeScript][18] project he works on has a few &#8220;golden rules&#8221; including &#8220;no special functions will be added to the runtime.&#8221; Know the rules so you don&#8217;t spend a week coding a feature that can&#8217;t be used.

Every project needs a homepage, which can be as basic as a README file or as fancy as a full website. Example of how _not_ to do it: [Lucene][19]. &#8220;If you don&#8217;t know what it is, you&#8217;re not going to find out from this page.&#8221; One that does it well: [Django][20]. It explains the project, who it&#8217;s for (&#8220;perfectionists with deadlines&#8221;) and has a prominent download link.

Documentation is critical. [YARD][21] is a good tool for Ruby; [Spinx][22] is good for Python. Examples of well-documented projects with good homepages: [Sinatra][23], [Vows][24].

Code has &#8220;a dual audience: You&#8217;re not just writing for the machine.&#8221; Hence the [literate programming][25] movement, which pushes for elegant, well-documented code other humans can read. &#8220;The whole history of programming has been that as the machine gets faster or smarter, every year we can speak more clearly to the reader.&#8221;

[Docco][26] is a documentation generator to help out on that front. It&#8217;s been ported multiple times, including [Rocco][27] (Ruby), [Pocco][28] (Python) and, for the hard core, [Shocco][29] (shell).

At the end of Jeremy&#8217;s talk, the coders scattered off to their teams. I&#8217;m about to go poll the groups on what they&#8217;re working on; that update will come later today.

Shout-out to our sponsors, Google and [OpenPlans][30], which is hosting us in its palatial Soho penthouse. Want to work amid panoramic views and a roof garden? [They&#8217;re hiring.][31]

_-Notes by [@StacyCowley][32], released under [WTFPL][12]_

 [1]: http://twitter.com/opensourceathon
 [2]: http://twitter.com/#search?q=%23hackshackers
 [3]: http://twitter.com/jenny8lee
 [4]: http://www.softwarefreedom.org/
 [5]: http://www.opensource.org/licenses/index.html
 [6]: http://en.wikipedia.org/wiki/Richard_Stallman
 [7]: http://www.gnu.org/licenses/gpl.html
 [8]: http://www.opensource.org/licenses/lgpl-3.0.html
 [9]: http://www.opensource.org/licenses/apache2.0.php
 [10]: http://www.opensource.org/licenses/mit-license.php
 [11]: http://www.gnu.org/licenses/agpl-3.0.html
 [12]: http://sam.zoy.org/wtfpl/
 [13]: http://creativecommons.org/publicdomain/zero/1.0/
 [14]: https://github.com/
 [15]: http://creativecommons.org/about/licenses/
 [16]: http://github.com/jashkenas
 [17]: http://www.documentcloud.org/home
 [18]: http://jashkenas.github.com/coffee-script/
 [19]: http://lucene.apache.org/java/docs/index.html
 [20]: http://www.djangoproject.com/
 [21]: http://yardoc.org/
 [22]: http://sphinx.pocoo.org/
 [23]: http://www.sinatrarb.com/
 [24]: http://vowsjs.org/
 [25]: http://www.literateprogramming.com/
 [26]: http://jashkenas.github.com/docco/
 [27]: http://rtomayko.github.com/rocco/
 [28]: http://fitzgen.github.com/pocco/
 [29]: http://rtomayko.github.com/shocco/
 [30]: http://openplans.org/
 [31]: http://openplans.org/jobs/
 [32]: http://twitter.com/stacycowley