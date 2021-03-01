---
title: Public media needs coding collaborators
authors:
- Barrett Golding
date: "2010-11-22"
_migration:
  id: 1025
  timestamp: 1486602236
tags:
- APM
- npr
- PRX
- pubmedia
- radio
categories:
- News
description: Growing a Pubmedia Commons, sharing code and community.
---

_Public broadcasters — National Public Radio, the Public Broadcasting System and their local affiliates — are playing a significant role in leading media innovation in the 21st century. This is the second of two guest posts about the various projects of &#8220;pubmedia&#8221; &#8212; by which the author refers mainly to public broadcasters and their related Internet efforts.  Here&#8217;s [part one][1].

_ 

The major public radio movers and shakers have undertaken several ambitious Internet projects. The results will take years and cost millions of dollars. Networks and large stations, with the staff to implement these often complex, time-consuming solutions, will benefit most.

But what of the mid-to-small size stations and independents who need simpler, smaller apps? We, the little pubmedia people, need not be left out in the technological cold. What follows are some schemes for co-developing apps and how-tos &#8212; approaches that will help the online operations of every pod/broadcaster.

### Pubmedia Papers

Say a station journocoder has a few free afternoons, and wants to check out some new technology. She learns how it works. Then gets it working at her station. Then . . . well, that&#8217;s often the end of it. Her research-time investment does nada for the next station(s) interested in that same technology.

That is unless we as a community began to collect these bits of techno-insight, sharing them in white papers and tutorials. Some topics might spring from individual effort. For others of widespread interest (e.g., Content Delivery Networks or HTML 5 media streaming), we might commission the research, as a system. We could find out . . .

#### <!--more-->

#### What&#8217;s Out There

Here are examples of two services for which pubmedia-specific API how-tos could inexpensively and immediately help hundreds of our sites:

{{< figure src="http://pubmedia.us/wp/wp-content/uploads/2010/10/value\_added\_news_label.jpg" alt="Value Added News page label" >}}

**1. [Value Added News][2]** describes itself as &#8220;News DNA for searching, sharing and protecting.&#8221; With a simple set of standard web tags (XHTML), a station/producer can &#8220;help people find and assess news content on the web.&#8221; Their [hNews][3] microformat lets both people and search engines sift thru all the information and ads on a page, and extract a story&#8217;s vitals: author, source, geo-location, rights, date, even journalistic [principles][4] (PBS MediaShift post).

{{< figure src="http://pubmedia.us/wp/wp-content/uploads/2010/10/value\_added\_news_pg.jpg" alt="Value Added News screenshot, showing popup window with hNews added story info" >}}

Check their short  [slideshow][5] and this [&#8220;Tech and Law: hNews tutorial&#8221;][6]. Two-hundred sites already use hNews, including AOL and AP, which co-founded the standard, along with Tim Berners-Lee.  (You may have heard his other invention: the [World Wide Web.][7]) [][7]

**2. [oEmbed][8]** &#8212; also a widely adopted protocol &#8212; provides and displays embedded media, such as audio and video. oEmbed-ing your site makes it easy for others (blogs, press, etc.) to discover and share your multimedia. The [oohEmbed][9] format makes using the API even easier. There&#8217;s a [Drupal][10] module; and oEmbed is now part of [WordPress&#8217; core.][11]

YouTube, Flickr, Vimeo, and Hulu are all oEmbed providers. Plenty of pubmedia sites could (should?) be too &#8212; if only we had our own tutorial explaining how to make use of it. Hmmm . . .

Pubmedia could take advantage of so many other existing solutions: [Amazon Web Services][12], [FOAF][13] (Friend of a Friend &#8212; suggested by WGBH&#8217;s Chris Beer), Mechanical Turk (a [guest post][14] here at _H/H_ linked to ProPublica&#8217;s [guide to using it][15]) &#8212; a good start on what these Pubmedia Papers could be.

One big barrier to using these services is the staff time it takes to figure out how-to. Instead of each of us individually immersing ourselves in every new API, what if we sent a couple people on a tech-checking mission? They could then share their experience: sometimes as research results, often as an easy to follow step-by-step tutorial. The collective savings and benefits would be enormous.

#### What&#8217;s In Here

That&#8217;s right: Think inside the box. We in public media have created a staggering amount of innovative code ourselves, for news reports, music streams, and multimedia presentations.

Look at the Flash work of [360degrees][16] from a decade ago, or what [MediaStorm][17] is doing now. Many us spent our early online days huddled around [KCRW&#8217;s music][18] feeds. [WFMU&#8217;s _Beware of the Blog_][19] is a treasure-trove of archival audio/video esoterica. [Transom][20] (the first website to win a Peabody) was blogging and social-sharing before there was a WordPress or MySpace.

Why not have a way to compensate stations to dust off their code, wrap some narrative around it, and present it to the pubmedia world? We&#8217;d encourage breaking scripts down into reusable elements (a.k.a., [abstraction][21]).

### Sharing Code and Community

A next step would be to take on some small communally coded projects. We&#8217;d ask: &#8220;What simple online tools does every pubmedia site need?;&#8221; then develop them together. These would be small-scale, open-source solutions that complement, not conflict with, the large projects ([PMP, PBCore, etc.][1]). Examples:

  * A WordPress plugin and Drupal module that one-click insert pubmedia content into blog posts.
  * 

{{< figure src="http://pubmedia.us/wp/wp-content/uploads/2010/10/social.png" alt="Facebook and twitter icons" >}} 
    A common set of social-sharing scripts, possibly based on NPR&#8217; s icons, adapted to different platforms (mobile, web. etc.).</li> 

      * Maybe even a Pubmedia Player, in HTML5 with Flash fallback, suited for both audio, video, and slideshows, with embed/download/share options. One that reports stats on not only number-of-plays, but also on location-of-pauses &#8212; logging where a user stopped play. It would have a common look and functionality, but be individually brand-able by stations/indies, and skinnable by users. People would learn to use it once, at any of our sites, then know how to use it everywhere.</ul> 

    The [Pubmedia Commons][22] screed expands on this concept. For insight into how collaborations might help journocoders, I talked to two who&#8217;ve spent countless spare hours on side projects: Chris Beer made [NPR/Solr][23], a &#8220;more like this&#8221; tool for retrieving related stories. And John Tynan created the [NPR/Simile Timeline][24].

    #### Code

    > Peer review — an activity in which people other than the author of a software deliverable examine it for defects and improvement opportunities — is one of the most powerful software quality tools available. Peer review methods include inspections, walkthroughs, peer deskchecks, and other similar activities. After experiencing the benefits of peer reviews for nearly fifteen years, I would never work in a team that did not perform them.

    > —Karl E. Wiegers, [&#8220;Humanizing Peer Reviews&#8221;][25]
    > 
    > Peer code reviews are the single biggest thing you can do to improve your code.

    > —Jeff Atwood, [&#8220;Coding Horror: Code Reviews: Just Do It&#8221;][26]

    Even within large pubmedia orgs, journocoders rarely have opportunities to inspect each other&#8217;s code. Chris Beer works with dozens of other developers at WGBH, but, &#8220;with heads down in our own project,&#8221; rarely does one team look at another&#8217;s scripts. &#8220;On-the-ground web-devs don&#8217;t have a place to talk.&#8221; And not just tech-talk: &#8220;We don&#8217;t know what&#8217;s needed.&#8221; Chris would like anyone in the system &#8220;be able to say &#8216;we want this,&#8217; and roughly what &#8216;this&#8217; should do.&#8221;

    John Tynan agrees: &#8220;The questions I have are mostly not technical,&#8221; he says of his new [Public Radio Roadtrip App][27] (&#8220;crowdsourcing the process of putting pubradio stories on a map&#8221;). His concerns are &#8220;mostly about usability, finding out how users might use the app we want to create.&#8221;

    He imagines a place where &#8220;users can kick the tires,&#8221; and where pubmedia people connect &#8220;not only across silos, disciplines, and programming language camps, but also with non-programmers: to gain all types of expertise.  I want to get in touch with people who **don&#8217;t** think like me.&#8221;

    Q: So how do you foster a community?

    A. Look to the librarians.

    #### Community

    As part of Chris Beer&#8217;s [PBCore][28] work, he often consults with the healthy, active community called [code{4}lib][29]: &#8220;coders for libraries, libraries for coders.&#8221; They have an email list, a conference, and an always humming [IRC channel][30] ([#code4lib][31] &#8212; login any weekday and you&#8217;ll see scores of folk chatting code).

    Pubmedia already has plenty of places to collaborate (see Jessica Clark&#8217;s [&#8220;Guide to Rising Public Media Networks in the U.S.&#8221;][32]):

      * [PubForge][33] discussion maillist.
      * [Public Media][34] Google Group.
      * [#pubmedia][35] twitter tag (and weekly [tweet meet][36])
      * [PubCamp][37] unconferences
      * [Help.HacksHackers][38] (&#8220;a place for journalists and technologists to solve technoproblems&#8221;)

    What we don&#8217;t have is the habit of collaboration &#8212; at least not amongst ourselves. We participate in outside interactions &#8212; Stack Overflow, WordPress forums, etc. But sharing code within pubmedia is not as instinctual &#8212; yet.

    Chris Beer wonders: &#8220;What counts as useful? Code-dumps are not inherently useful; you need a road map, a community around a project &#8212; one person often cannot possibly support it alone.&#8221;

    I talked to PBS social strategist, [Jonathan Coffman][39], about this. He sees software projects in &#8220;two tiers: the code, and the use.&#8221; The code must be &#8220;handed down in packaged way. We need education and evangelizing: getting the word out.&#8221; Also vital is &#8220;showing the value to superiors&#8221; of this open-source ethic. All these aspects are part of &#8220;supporting the people dealing with putting public media into online environments.&#8221;

    #### Sharing

    John Tynan points to how coders have used the [NPR API][40] as an &#8220;example of what could be done.&#8221; To make his NPR [Roadtrip App][27] he used [KCRW’s python NPR API library][41] (with generous advice from NPR and KCRW). One by-product of John&#8217;s apps is his [portable query generator][42], a compact form for making API calls to NPR&#8217;s archives, &#8220;which can be extensible: other people can incorporate it into their work.&#8221;

    He says a next step would be taking the time to &#8220;show how our scripts can by used by others in their apps: encouraging people to think there are resources out there &#8212; you don&#8217;t need to build from scratch.&#8221; He envisions a set of &#8220;living documents&#8221; that grow with use, reuse, and refinements.

    His first step, though, would be &#8220;making people aware of fact the code exists; and that help is available for their work.&#8221; Along the way &#8220;we&#8217;d get a feel what expertise is out there&#8221; &#8212; who mixes a mean social media salsa, and who&#8217;s got jQuery juice; who&#8217;s a Python [Parselmouth][43] and who&#8217;s a promotion ninja.

    John&#8217;s testing [Google Moderator][44] to get input into &#8220;how specific functions are working. People can vote ideas up or down. A monitor can survey topics, and say &#8216;Nobody&#8217;s answered this one, could someone take a look.&#8217; Similar tools have been suggested using Stack Exchange for [public media][45] and [broadcast][46] conversations.&#8221;

    Chris Beer&#8217;s NPR/Solr project stumbled because he needed server resources for other projects, so he had to remove the app. That could be avoided in the future if we have &#8220;somewhere for large projects to live,&#8221; such as a collective [Amazon&#8217;s Web Services][47] account (which has inexpensive instance/hour auto-scaled micro-fees).

    Pubmedia online in the USA presents itself as set of separate fiefdoms, not a unified presence made up of distinctive personalities. For front-end display that might be fine. But that doesn&#8217;t mean we back-end dwellers can&#8217;t confab, conspire, and co-create.

    The [Pubmedia Commons][48] hopes to help make that happen. We&#8217;ve started by aggregating a [river-of-news feed][49] of blogs on public media matters, archiving the weekly [#pubmedia chat][50], and documenting our [WordPress customizations][51]. It&#8217;ll take a little seed money &#8212; we&#8217;ll be applying to the [usual suspects][52]. But most of all, we need your participation. Please enter your comments, ideas, and related efforts below.

    _Barrett Golding is Fearless Leader of the [Hearing Voices][53] producer collective; and keeper of the [PubMedia Commons][48], where we share code and community. He offered two posts to Hacks/Hackers in an effort to build interest in technology development that supports the mission and goals of public media._

 [1]: ../2010/10/08/public-media-is-investing-in-major-digital-projects/
 [2]: http://valueaddednews.org/ "Value Added News"
 [3]: http://microformats.org/wiki/hnews "Database error · Microformats Wiki"
 [4]: http://www.pbs.org/idealab/2010/02/what-are-the-universal-principles-that-guide-journalism032.html "MediaShift Idea Lab . What Are the Universal Principles that Guide Journalism? | PBS"
 [5]: http://valueaddednews.org/images/slideshow.html "Valueadded"
 [6]: http://blog.tech-and-law.com/2010/05/hnews-value-added-news-hnews-tutorial.html "Tech and Law: hNews & Value Added News, hNews tutorial - & copyright and licensing options to follow?"
 [7]: http://en.wikipedia.org/wiki/Tim_Berners-Lee "Tim Berners-Lee - Wikipedia, the free encyclopedia"
 [8]: http://www.oembed.com/ "oEmbed: Embedded representation of a URL on third party sites"
 [9]: http://oohembed.com/ "oohEmbed.com - your one-stop oEmbed provider"
 [10]: http://drupal.org/project/oembed "oEmbed | drupal.org"
 [11]: http://codex.wordpress.org/Embeds "Embeds « WordPress Codex"
 [12]: http://aws.amazon.com/ "Amazon Web Services"
 [13]: http://cbeer.info/blog/2010/10/17/5-useful-standards-for-public-media-projects/ "Useful Standards for Public Media Projects: FOAF | Musings"
 [14]: ../2010/10/15/reporting-recipe-using-amazons-mechanical-turk-for-data-projects/ "Reporting Recipe: Using Amazon’s Mechanical Turk for Data Projects | Hacks/Hackers"
 [15]: http://www.propublica.org/article/propublicas-guide-to-mechanical-turk/
 [16]: http://www.360degrees.org/360degrees.html "360degrees"
 [17]: http://www.mediastorm.com/ "MediaStorm: A Multimedia Production Studio"
 [18]: http://www.kcrw.com/music/programs "KCRW 89.9 FM - Listen to Free Music Online"
 [19]: http://blog.wfmu.org/freeform/ "WFMU's Beware of the Blog"
 [20]: http://transom.org/ "Transom: A Showcase and Workshop for New Public Radio"
 [21]: http://en.wikipedia.org/wiki/Abstraction_(computer_science) "Abstraction (computer science) - Wikipedia, the free encyclopedia"
 [22]: http://pubmedia.us/2010/03/pubmedia-commons/ "Pubmedia Commons : PubMedia Commons"
 [23]: http://cbeer.info/blog/2010/03/19/npr-api-solr/ "NPR API + Solr = ? | Musings"
 [24]: http://npr-simile-timeline.googlecode.com/svn/trunk/newsample.html "NPR Timeline"
 [25]: http://www.processimpact.com/articles/humanizing_reviews.html "Humanizing Peer Reviews"
 [26]: http://www.codinghorror.com/blog/2006/01/code-reviews-just-do-it.html "Coding Horror: Code Reviews: Just Do It"
 [27]: http://opensourcebroadcasting.blogspot.com/2010/10/refining-assumptions-about-public-radio.html "Open Source Broadcasting: Refining Assumptions about a Public Radio Roadtrip App"
 [28]: http://pbcore.org/2.0/ "PBCore: Public Broadcasting Metadata Dictionary Project"
 [29]: http://code4lib.org/ "code4lib | coders for libraries, libraries for coders"
 [30]: http://code4lib.org/irc "IRC | code4lib"
 [31]: irc://irc.freenode.net/code4lib
 [32]: http://www.pbs.org/mediashift/2010/09/a-guide-to-rising-public-media-networks-in-the-us266.html "MediaShift . A Guide to Rising Public Media Networks in the U.S. | PBS"
 [33]: http://lists.pubforge.org/mailman/listinfo/publist "Publist Info Page"
 [34]: http://groups.google.com/group/public_media/ "public media | Google Groups"
 [35]: http://search.twitter.com/search?q=%23pubmedia "#pubmedia - Twitter Search"
 [36]: http://pubmediachat.org/ "PubMediaChat"
 [37]: http://www.publicmediacamp.org/ "PublicMediaCamp | An unconference in support of public media"
 [38]: http://help.hackshackers.com/ "Help.HacksHackers.Com -- A place for journalists and technologists to solve technoproblems"
 [39]: http://www.jonathancoffman.com/resume/ "Resume | Jonathan Coffman"
 [40]: http://www.npr.org/api/index.php "API Overview : Tech Center : NPR"
 [41]: http://packages.python.org/kcrw.nprapi/ "Documentation for KCRW’s python NPR API library — kcrw.nprapi v1.0b3 documentation"
 [42]: http://code.google.com/p/npr-simile-timeline/ "npr-simile-timeline - Project Hosting on Google Code"
 [43]: http://harrypotter.wikia.com/wiki/Parseltongue#Harry_Potter_as_a_Parselmouth "Parseltongue - Harry Potter Wiki"
 [44]: http://www.google.com/moderator/ "Google Moderator"
 [45]: http://area51.stackexchange.com/proposals/23668/public-media-npr-pbs-and-beyond "Public Media: NPR, PBS, and beyond. - Area 51 - Stack Exchange"
 [46]: http://area51.stackexchange.com/proposals/20591/backstage "Backstage - Area 51 - Stack Exchange"
 [47]: http://aws.amazon.com/autoscaling/ "Auto Scaling"
 [48]: http://www.pubmedia.us/
 [49]: http://feeds.feedburner.com/PubmediaPlanet "PubMedia Planet"
 [50]: http://pubmedia.us/cat/chat/ "Chat : PubMedia Commons"
 [51]: http://pubmedia.us/cat/wordpress/ "WordPress : PubMedia Commons"
 [52]: http://generalapp.newschallenge.org/SNC/ViewItem.aspx?pguid=6671c4e8-ddb2-4170-9b12-e864115cc5a3&itemguid=7fe4ed9b-eda0-4e31-8790-b1704ded1ce7 "Knight News Challenge"
 [53]: http://hearingvoices.com/