---
title: 'NYC’s Open(source).athon: Coding, Bao and Demos'
authors:
- Julie Geng
date: "2010-10-03"
_migration:
  id: 911
  timestamp: 1486602236
tags:
- Hackathons
categories:
- News
groups:
- New York
---

{{< figure src="https://secure.meetupstatic.com/photos/event/e/6/d/7/600_18479095.jpeg" >}}

Put more than forty Hacks/Hackers members in the gorgeous [OpenPlans][1] penthouse with plentiful caffeine, wifi, and a coding mission and you have the [first Hacks/Hackers open(source).athon in New York City][2], which took place on October 2 and attracted participants from as Chicago (from [The Chicago Tribune][3]), Washington DC (from [Publish2][4]) and even Florida (from [The Poynter Institute][5]).

The day-long event was the brainchild of [Scott Klein][6], editor of news applications of [Pro Publica][7], who knew from his own work that newsrooms around the world had useful and unique in-house software, but no time to open-source them for others to use. When Hacks/Hackers NYC wanted to hold a &#8220;techie event,&#8221; he raised his hand with this idea. (Moral of the story, send in your ideas to Hacks/Hackers, we might implement them.)

And thus, the seed idea for [open(source).athon][8] was born, so he, [Jennifer 8. Lee][9], [Chrys Wu][10], and [Al Shaw][11] set the wheels in motion for event, which was supported by [Google][12], the [Knight Foundation][13] and [O&#8217;Reilly Media][14].

<!--more-->In a day of intense collaborating and socializing (fueled by 

[bao][15] and banh mi sandwiches), hacks and hackers grinded away at projects ranging from defining site objects for [Django Tupperware][16], to extracting an open-source, configurable structure from [Ms. Back-Man][17], a [New York Times][18] backup app running on Ruby on Rails. Whether you’re a news junkie who “wants news intravenously,” as [Dave Winer of Scripting.com][19] said, or a journalist who relies on [DocumentCloud][20] to handle primary source documents, these projects could be of interest.

{{< figure src="http://photos3.meetupstatic.com/photos/event/e/6/d/8/600_18479096.jpeg" alt="Hacks/Hackers open(source).athon on October 2 in OpenPlans Penthouse" >}}

[Joe Germuska][21] from the [Chicago Tribune][22] found his sweet spot with [Jeremy Ashkenas and Samuel Clay][23], both developers of DocumentCloud. DocumentCloud is a “workscape app” to help journalists and others organize their documents and records. After exchanging instant messaging contact info, Joe pointed out an error he encountered on DocumentCloud when trying to upload large documents—and Jeremy fixed it in a flash. Other than troubleshooting, Jeremy, Sam and Joe worked on improving and simplifying Backbone, a JS mode and framework within DocumentCloud.

It is in the best interest for journalists to define this world, Joe said, &#8220;before someone else defines it for us” in a succinct description of how journalists have benefited from collaboration with the hackers around the room.

{{< figure src="http://photos4.meetupstatic.com/photos/event/e/6/d/1/600_18479089.jpeg" alt="open(source).athon at OpenPlans Penthouse" >}}

But it isn’t about the hacks getting all the perks. [John Keefe][24], a self-proclaimed &#8220;protojournohacker&#8221; who is the news director of WNYC, spent the day “absorbing, learning and socializing around code.” He and [Chrys][10] learned about how Al from [Talking Points Memo][25] created an app that near-instantaneously provided pageview statistics, particularly for breaking news stories, shortening the time it takes getting that information from the database to about 500 milliseconds. Later, they took raw Associated Press election data and [parsed it][26] for easier consumption by news organizations.

{{< figure src="http://photos2.meetupstatic.com/photos/event/e/6/c/d/600_18479085.jpeg" >}}

Then [Matt Terenzio][27] teamed up with [Dave Winer][28] on his “mega application” called [Feedhose][29]. The application is a real-time news aggregator, similar to the Associated Press wire, which will allow users to configure what feeds to aggregate, and it will automatically update and have notifications. Dave hopes that others will be able to build widgets out of this application as well, and expects not only avid readers of news to take advantage of this app but also news organizations who need the instantaneous, real-time updates that FeedHose will deliver.

{{< figure src="http://photos3.meetupstatic.com/photos/event/e/6/d/9/600_18479097.jpeg" alt="open(source).athon at OpenPlans Penthouse on 10/2/10" >}}

[While many of the collaborative groups were focused on building something new or adding functionality,][30] [Aron Pilhofer][31] and [Tyson Evans][32] of  [The New York Times][18] had a functional application that they needed to strip down: [Ms. Back-man][33], a configurable tool that backs up databases to Amazon’s S3, with support for MySQL and Mongo. Originally called Back-man, this tool has been successfully used at the Times for over a year, and although it’s “not sexy, it’s important to have … like plumbing,” Aron described. After the first iteration, Back-man was modified to work with databases on multiple servers, hence the “Ms.” in front. Aron and Tyson’s task for the day was to extract the sensitive, Times-specific code, and simplify it for open source while Scott wrote the documentation. By the end of the day, they had completed “about 80 percent” of the work needed before they could release it, and were optimistic about its completion in the coming days. (Had it been a two-day hackathon, they would have finished early Sunday morning)

[John Goodsen][34] and [Nick Ehle][35] worked on a jQuery frontend for [Radtrack][36], an agile project management app already in use. The interface, called [jKanban][37], added drag-and-drop functionality for cards and tasks within a project, and other elements that focused on improving collaboration across distributed teams.

{{< figure src="http://photos3.meetupstatic.com/photos/event/e/6/d/5/600_18479093.jpeg" alt="Bao from Baohouse at open(source).athon on 10/2/10" >}}

Some projects at the event had a more specific focus. [Michael Thaler][38] was working on [ThinkUp][39], an app originally conceived by [Gina Tripani][40] of [Lifehacker][41], that aggregates and counts replies from various social media sites such as [Twitter][42] and [Facebook][43]. Michael focused on putting in the time zone setting, which was not in the beta. [Jim Robert][44] and his team were working on [Django Tupperware][16], which automatically updates the settings object with each request, by “moving the settings out of the settings.py file and into the database.” [Erik Hinton][45] and [Juan Muller][46] sat down with a pen and paper at first to sketch out their project, called [SVG Simplifier][47], which takes large SVG files and compresses them to be less intensive on browsers.

Other projects were in their infant stages. [Jeremy Zilar][48] and his team wanted to brainstorm and code a plugin for [WordPress][49] to offer structured comments, so that the comment field was “not just a box,” and would allow site administrators to specify comment types, such as a question, a link, or a correction, and give them the ability to sort responses based on type.

{{< figure src="http://photos2.meetupstatic.com/photos/event/e/6/d/0/600_18479088.jpeg" alt="Jeremy Ashkenas speaking at the open(source).athon at OpenPlans Penthouse on 10/2/10" >}}

Meanwhile, [Andrew Schaaf][50] had put in a week’s worth of work on his latest project, VideoStuff, before he brought it to the open(source).athon. He envisions it to be a DocumentCloud for videos and slides. The app would, for example, recognize individual “scenes” within videos, bookmark and tag them, or help to re-encode video that needs to be analyzed. Andrew suggested that political campaigns could collect footage on their opponents and be better able to extract the relevant content.

As the hackers committed their last bits of code to github, Jenny and [Beth Davidz][51] presented their work to the group: a brand-new redesign of the [Hacks/Hackers logo][52], individualized logos for each chapter, as well as a new motto, “rebooting journalism,” all of which were pushed live as the hacks and the hackers packed up for the day.

All in all, though some projects remained unfinished, it paved the way for fu ture meet-ups and hackathons.

And special thanks to [Michael Keating, business development manager, of OpenPlans][53] who gave up his Saturday to be chaperone.

{{< figure src="http://photos2.meetupstatic.com/photos/event/e/6/d/a/600_18479098.jpeg" >}}

[Pictures (many by the talented Dan Nguyen)][54] are being uploaded [on Meetup][54].

_Julie Geng, a student at Brooklyn Law School, feels that journalism is her first love. She is a hack who wants to be a hacker. This was her first open(source).athon, but hopefully not her last._

 [1]: http://openplans.org
 [2]: http://meetupnyc.hackshackers.com/calendar/14541710/?eventId=14541710&action=detail
 [3]: http://chicagotribune.com
 [4]: http://publish2.com
 [5]: http://poynter.org
 [6]: http://www.twitter.com/kleinmatic
 [7]: http://www.propublica.org/
 [8]: http://www.twitter.com/opensourceathon
 [9]: http://www.twitter.com/jenny8lee
 [10]: http://www.twitter.com/MacDivaONA
 [11]: http://www.twitter.com/A_L
 [12]: http://code.google.com/opensource/
 [13]: http://knightfoundation.org
 [14]: http://oreilly.com
 [15]: http://baoahausnyc.org
 [16]: http://bitbucket.org/jiaaro/django-tupperware
 [17]: http://github.com/NYTimes/MsBackMan
 [18]: http://www.nytimes.com
 [19]: http://www.scripting.com
 [20]: http://www.documentcloud.org
 [21]: http://www.twitter.com/JoeGermuska
 [22]: http://www.chicagotribune.com
 [23]: http://www.documentcloud.org/about
 [24]: http://www.twitter.com/jfkeefe
 [25]: http://www.talkingpointsmemo.com/
 [26]: http://gist.github.com/607951
 [27]: http://www.twitter.com/mterenzio
 [28]: http://www.twitter.com/davewiner
 [29]: http://scripting.com/stories/2010/09/30/feedhoseAFirehoseForFeeds.html
 [30]: http://photos3.meetupstatic.com/photos/event/e/6/d/7/600_18479095.jpeg
 [31]: http://www.twitter.com/pilhofer
 [32]: http://www.twitter.com/tysone
 [33]: http://github.com/NYTimes/MsBackman
 [34]: http://www.twitter.com/jgoodsen
 [35]: http://meetupnyc.hackshackers.com/members/7404415/
 [36]: http://radtrack.com/
 [37]: http://github.com/jgoodsen/jkanban
 [38]: http://www.twitter.com/mithaler
 [39]: http://thinkupapp.com/
 [40]: http://www.twitter.com/ginatripani
 [41]: http://www.lifehacker.com
 [42]: http://www.twitter.com
 [43]: http://www.facebook.com
 [44]: http://meetupnyc.hackshackers.com/members/12927072/
 [45]: http://www.twitter.com/erikhinton
 [46]: http://www.twitter.com/juancmuller
 [47]: http://github.com/jcmuller/svgsimplifier
 [48]: http://www.twitter.com/silencematters
 [49]: http://www.wordpress.org
 [50]: http://meetupnyc.hackshackers.com/members/10255427/
 [51]: http://www.twitter.com/bethdavidz
 [52]: http://photos3.meetupstatic.com/photos/theme_head/e/8/0/2/full_179394.jpeg
 [53]: http://openplans.org/team/#michael-keating
 [54]: http://meetupnyc.hackshackers.com/photos/1089268/