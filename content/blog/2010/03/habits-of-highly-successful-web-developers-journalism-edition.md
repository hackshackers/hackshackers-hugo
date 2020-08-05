---
title: Habits of highly successful web developers (journalism edition)
authors:
- Aron Pilhofer
date: "2010-03-26"
_migration:
  id: 299
  timestamp: 1486602238
tags:
- newsroom
- source control
- web applications
categories:
- News
---

My pal Brian Boyer wrote an excellent [synopsis][1] of his [NICAR 2010][2] talk recently. It&#8217;s well worth a read even if you aren&#8217;t writing web applications in your newsroom.

For folks who write software for a living, there&#8217;s nothing here you probably don&#8217;t already know. But for those of us new to this whole development thing, his advice is indispensable &#8212; especially coming from the very different culture of a newsroom.

I&#8217;ll admit, I used to be skeptical. When I formed the Interactive News team at the Times a little more than two years ago, this stuff &#8212; testing, source code control, staging environments &#8212; seemed like an awful lot of useless overhead.

Hey, if it works on my laptop, surely it will work in production. Why bother with a staging deploy? Source control is a great way to store code, but why bother with all the pain of branching, merging and all that?

> What it really boils down to is a difference in approach. As a journalist, the destination is pretty much what matters. How you get the story is less important than the route you take to get there. "Any landing you walk away from&#8230;" and all that.

Testing in particular seemed like a ridiculous waste of time. Why write all that code to test something that obviously works?

Needless to say, I&#8217;ve come around &#8212; even on testing. The first time you catch a massive bug in your code because a test starts failing, you&#8217;ll be sold too. On my team, a solid test suite is a must &#8212; especially if the application is likely to live on nytimes.com for a while. It has saved us (and me) from embarrassing errors too many times to count.

What it really boils down to is a difference in approach. As a journalist, the destination is pretty much what matters. How you get the story is less important than the route you take to get there. &#8220;Any landing you walk away from&#8230;&#8221; and all that.

As a developer, the route is as important as the destination, largely because of scale. Print scales infinitely. It doesn&#8217;t matter what Rube Goldberg contraption you build to get the answers you need. The answers are what&#8217;s important.

As a developer, you learn very quickly that everything matters. Scaling is a logarithmic problem, not a linear one. Code that works fine for X users can explode spectacularly for X + X users. (I&#8217;m still trying to live down the nightmare that was March Madness 2009, trust me on this.) Worse, one application that&#8217;s thrashing can have a cascade effect, and take down everything on that server or slow your shared database server down to a crawl.

The other quirky thing about news applications is the traffic patterns tend to be spiky. Something on the homepage of nytimes.com be exposed to millions of eyeballs, and before you know it your little app will be racing to keep up.

And so, while good habits aren&#8217;t a guarantee, they do tend to force you to solve problems before they become problems. Good habits lead to solid code.

So, yes, there is a lot to learn, especially for journalists who have not spent their careers working in software shops. The code is just the start. But trust me, it&#8217;s worth it.

 [1]: http://hackerjournalist.net/2010/03/13/nicar-2010-talk-good-habits/ "Boyer"
 [2]: http://data.nicar.org/CAR2010/ "NICAR"