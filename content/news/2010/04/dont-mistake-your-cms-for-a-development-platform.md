---
title: Don’t mistake your CMS for a development platform
authors:
- Scott Klein
date: "2010-04-13"
_migration:
  id: 353
  timestamp: 1486602238
tags:
- content management system
- development
- news applications
categories:
- News
description: You’ll be quicker and have happier programmers if you leave the CMS to
  what it’s really good at, and let the newsroom developers use MVC frameworks like
  Django and Ruby on Rails.
---

The Washington Post was an early pioneer in building interactive journalism applications, hiring luminaries no less bright than Adrian Holovaty and Derek Willis, among others. But they admit they’ve fallen behind in recent years.

Post managing editor Raju Narisetti recently sounded an all-too-common refrain to explain the paper&#8217;s slump, blaming their antiquated content management system. It &#8220;can&#8217;t really handle a lot of the databases and open-access information,&#8221; he said in [a piece by Post ombudsman Andrew Alexander][1].

While the Post is far from the only news organization decrying an old, inflexible content management system, CMSes shouldn&#8217;t be an obstacle to building news applications. Even the best CMS was designed to do a different job and &#8212; good or bad &#8212; shouldn&#8217;t be mistaken for an expressive, open development platform.

CMSes are good at mapping complex editorial processes onto a repeatable digital workflow. They store and retrieve complex data, for the most part very reliably. They trade flexibility for ease-of-use. Creating new stories or photos is usually simple, thanks ironically to the system&#8217;s rigidity. Learn how to add a byline once and you should be able to do it anywhere.

This tradeoff is common to many systems: the more flexible, the harder it is to use, and vice-versa. Compare a professional SLR camera with a point-and-shoot, or a manual transmission car and an automatic. Customizability comes at the cost of ease-of-use.

> My advice to news organizations trying to build applications: You’ll be quicker and have happier programmers if you leave the CMS to what it’s really good at, and let newsroom developers use what makes things easy for them.

So you don’t have to tell your CMS what a headline is in order to write one, and chances are excellent that the vagaries of your editorial process are pretty well handled by your CMS, even if it doesn’t always seem that way.

Interactive news applications, on the other hand, require maximum flexibility. Developers building news applications need a true tabula rasa, and the tools they use shouldn&#8217;t come with assumptions about the final result. They may create a Flash application [mapping Olympic medals][2] or a huge [database of stimulus contracts][3]. They may end up not building a Web page at all, but [an API][4] consumed only by other computer programs.

In fact, while there have long been interesting interactive applications on news websites, the heyday of complex journalism done using software &#8212; which I suspect we’re in now &#8212; couldn’t have started before the advent of the free, open-source rapid software development frameworks Django and Ruby on Rails.

Django (2005), Ruby on Rails (2004) and [MVC frameworks][5] like them enabled a whole new kind of development: what I call “deadline software.” Putting 100,000 records from a Freedom of Information Act request online and making them searchable no longer took a team of developers weeks, but could be done by one or two developers in days or even hours. News organizations could take a perishable, competitive set of data, and get something sophisticated online quickly enough to match &#8212; and beat &#8212; the story a traditional reporter could write.

These frameworks were born to serve the needs of a fast-turnaround news cycle. Django was developed by Adrian Holovaty and others at a newspaper &#8212; the Lawrence (Kansas) Journal-World.

Developing outside your CMS doesn’t mean news applications won&#8217;t match the rest of your site. At ProPublica, our news applications &#8212; which run under subdomains like &#8220;projects.propublica.org&#8221; &#8212; fetch core files from our main website using plain http requests to keep headers, footers and other styles consistent.

The Chicago Tribune&#8217;s news apps team also takes this approach. &#8220;Almost all of our applications look like they live inside the mother website,&#8221; says Brian Boyer, Tribune&#8217;s editor of news applications. &#8220;But we either cheap out and just [reproduce the header and footer][6] or get tricky and [pull the header and footer][7] as fragments from the CMS &#8212; the latter technique lets us keep navigation, etc., current.&#8221;

News applications can pull stories using RSS or APIs, and readers can navigate between content and news application pages totally unaware that they&#8217;re traversing systems, platforms, and even geographic server locations. Your site search engine and ad servers should also happily support this.

Developing outside your CMS also doesn&#8217;t mean your IT department has to purchase and support new servers. Another technology enabling deadline software is reliable cloud infrastructure products like Amazon’s Elastic Computing Cloud (EC2), which is enormously scalable and, inexpensive relative to [dedi server][8] hosting. Most news applications managers I&#8217;ve spoken with use services like EC2 to deploy applications quickly with a minimum of long-term commitment.

So my advice to news organizations trying to build applications: You’ll be quicker and have happier programmers if you leave the CMS to what it’s really good at, and let newsroom developers use what makes things easy for them.

Incidentally, the Post is hard at work upgrading their technology and already thinking along these lines. Their chief digital officer, Vijay Ravindran, told me &#8220;just as plain HTML has gone the way of the dinosaur, so has using the CMS to do everything.&#8221;

Are you creating news applications in your newsroom? Please share your setups and stories in the comments.

_

{{< figure link="/content-images/news/2010/04/kleinmug.png" src="/content-images/news/2010/04/kleinmug-150x150.png" >}}</p> 

Scott Klein is the Editor of News Applications at </em>[_ProPublica_][9]_, directing news application development and production. He also moonlights as co-founder of_ [_DocumentCloud_][10]_, an independent non-profit organization that helps newsrooms organize and publish their source documents online._

 [1]: http://www.washingtonpost.com/wp-dyn/content/article/2010/03/12/AR2010031203408.html
 [2]: http://2010games.nytimes.com/medals/map.html
 [3]: http://projects.propublica.org/recovery/
 [4]: http://developer.nytimes.com/docs id=n:sw
 [5]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
 [6]: http://nursinghomes.apps.chicagotribune.com/
 [7]: http://homicides.redeyechicago.com/
 [8]: https://www.servermania.com/dedicated-servers-hosting.htm
 [9]: http://www.propublica.org/
 [10]: http://www.documentcloud.org/