---
title: Maps, Mobile Security, Touch-Free Browsing and more at Hacks/Hackers NYC Demo
  Day 2
authors:
- Frank Hebbert
date: "2011-04-07"
_migration:
  id: 2264
  timestamp: 1486602234
categories:
- Demos
- News
groups:
- New York
---

![][1][Hacks/Hackers NYC Demo Day 2][2], held at [New Work City][3], covered a lot of ground. ![][4]A crowd gathered for dinner from [4food][5] followed by six entertaining and informative presentations covering the spectrum of news and hacking, from content generation to mapping, with a dose of security and a hardware demo too.

Each demo was strictly limited to 5 minutes. Here’s a brief overview of each one, with highlights from the presentations and Q&A. Demogivers and participants, feel free to add clarifications or questions in the comment thread below!

[![][6]][7]**Mike Lewis, [Kapost][8]**[][8]  
Kapost is a workflow management tool for editors, providing a web dashboard to manage pitches, drafts and payments. Mike framed the need for Kapost as a reflection of changing newsrooms: rather than managing a handful of full-time writers, editors are managing many freelancers, using email and custom spreadsheets. Enter Kapost, “salesforce.com for content”.

Mike demoed the dashboard, showing the status of all posts, submitted, draft, and so on, and a timeline showing the status of each article. He walked through how editors can create a pitch, and how a writer can pick it up, including some neat payment rate tools and analytics that give editors an overview of writers’ performance.

Questions probed the ability to integrate Kapost with existing content management systems (all the biggies plus XML-RPC), flexibility of data entry (flexible), where content lives (your servers), and a suggestion to introduce bidding for writers to compete on price for each pitch.

[![][9]][10]**Matt Terenzio, [Localeaks][11]**  
Localeaks provides a web delivery service for local, anonymous tips to news organizations. Inspired by the debate around Wikileaks back in December, Matt built a system for people to write, encrypt and transmit tips.

Five minutes can be really short, so we didn’t get to see a demo. Matt passed on some useful tips for setting up a server to support secure leaking: turn off most of the webserver logging (timestamps, IPs, etc), enforce secure connection, don’t use PHP, or use a decent framework like [CodeIgniter][12].

During the Q&A, Matt said over 1,448 organizations have used the service, with nearly 10,000 tips handled. Answers came from the crowd as well as the stage, with a suggestion to convert PDFs to image files for transmission (not least because an anonymously submitted PDF could be a great virus delivery mechanism, straight into the news organization).

**Jonathan Hall, [SenseCast][13]**[][13]  
SenseCast was the night’s hardware demo, a “touch-free, germ-free news interface”. Jonathan explained that the SenseCast takes a different approach to digital out-of-home media, which is typically dominated by advertisers and lacking in content (or as he put it, “advertising rich and content poor”).

[![][14]][15]With a Kinect controller linked to a simple news feed browser, Jonathan demoed scrolling though New York Times headlines by waving his arms, and marking an article as a favorite by hovering over a button. Definitely a crowd-pleaser. SenseCast can also take photos, and the admin interface included a dashboard showing total users, page views and more.

Questions got into the gestures and the market:  
“Why not use a push gesture rather than hover?” Jonathan explained that adding more gestures complicates things for the user: While the system can detect gestures as sophisticated as a thumbs-up, users would need to learn a gesture vocabulary before they can be comfortable using the screen, and that would make it harder for walk-ups to use SenseCast.

“Who will buy this?” Places where the big advertisers aren’t already, maybe in doctors’ waiting rooms.

And most importantly&#8230; “Do your arms get tired?”

[![][16]][17]**Nathan Freitas, [The Guardian Project][18]**   
The Guardian Project is building secure communication tools for activitists, election monitors and journalists. As Nathan puts it, ”Imagine if Blackberry was designed for journalists and activists rather than executives”, the project is rebuilding mobile device functionality but with security and privacy in mind from the start.

Demoing [Tor running on Android][19], Nathan walked us through some uses and tools from the project, including a camera app that auto-detects faces and blurs them out. 50,000 users have downloaded the tools with recent deployments in Afghanistan and Libya.

Questioners wondered about the speed hit from running Tor on your phone (not too bad once it gets going), and the size of the project (eight core collaborators and a wider network). If I was giving out a “social impact” pin, this demo would have got it.

**Larry Adams**, **[Narrative Science][20]**   
“We write stories about numbers” sounds like what a lot of journalists do. But Narrative Science use computers to write the stories, covering sports, real estate and finance so far. Their tools turn data tables into stories, like converting dry baseball scores into a narrative &#8212; a feat that spurs Little League parents to write grateful emails.

[![][21]][22]The project started a year ago at Northwestern University and has grown to a team of 11 engineers and three journalists. Larry walked through history, needs case, and architecture of the system. The journalists set up framing and phrasebooks for each type of story &#8212; for example, Little League stories use a softer tone than college baseball. Once set up, new data can be converted into a story and sent directly into the content management system of a news outfit. Without knowing it, you may already have read articles written by the Narrative Science system (perhaps you are reading one right now&#8230;).

Questions helped to clarify some of the system’s potential, revealing that Larry and his team are looking at social media as a way to improve stories, perhaps detecting when a player leaves the field injured, and also digging into census data as way of writing local news about migration and change. Despite the mind-blowing complexity of the problem, once the recipes for a story are set up, each successive story takes only a few seconds to produce.

[![][23]][24]**Steven Romalewski,** **[OASISnyc][25]**  
Steve demoed the [OASIS interactive NYC map][26], specifically to demonstrate a couple of features that can support journalism. As he put it, these days an interactive map is maybe a little “so what,” but OASIS is actually pretty special.

In addition to layers and layers of NYC data, the map now features historic land use dating back to 2003. Zooming in on Williamsburg in Brooklyn, we saw purple-shaded manufacturing areas replaced by yellow-toned residential blocks as Steve moved the slider. The map also supports Google Fusion Tables, a topic recently covered by Hacks/Hackers. The ultimate plan is to let users pick any existing Fusion Table and see it on the map.

[![][27]][28]Questioners got excited about the potential of Fusion Tables to easily map other data sources, like census data, and the possibility of embedding the map into other sites. Briefly touching on the NYPL’s great digitized map collection, Steve showed historic maps accessible as layers in the stack, potentially allowing users to view Manhattan in 1775 with today’s land use on top. Demo nights are always fun, and this was no exception. I’m looking forward to the next one!

_Photos by Danny Chong and Joshua Winata_

 [1]: /content-images/news/2011/04/HHDD2-check-in-e1302188737292.jpeg "HHDD2-check-in"
 [2]: http://meetupnyc.hackshackers.com/events/16882913/
 [3]: http://nwc.co
 [4]: /content-images/news/2011/04/HHDD2-saying-hi-e1302188856616.jpeg "HHDD2-saying-hi"
 [5]: http://4food.com/
 [6]: /content-images/news/2011/04/HHNYCDD2-kapost-e1302189604357.jpeg "HHNYCDD2-kapost"
 [7]: http://meetupnyc.hackshackers.com/photos/1334895/22514101/
 [8]: http://kapost.com
 [9]: /content-images/news/2011/04/HHNYDD2-localeaks-e1302191963600.jpeg "HHNYDD2-localeaks"
 [10]: http://meetupnyc.hackshackers.com/photos/1334895/22514151/
 [11]: http://localeaks.com/
 [12]: http://codeigniter.com
 [13]: http://sensecast.com/
 [14]: /content-images/news/2011/04/HHNYCDD2-sensecast-e1302190169858.jpeg "HHNYCDD2-sensecast"
 [15]: http://meetupnyc.hackshackers.com/photos/1334895/22514167/
 [16]: /content-images/news/2011/04/HHNYCDD2-Guardian-Project-e1302190381306.jpeg "HHNYCDD2-Guardian-Project"
 [17]: http://meetupnyc.hackshackers.com/photos/1334895/22513686/
 [18]: http://guardianproject.info
 [19]: https://blog.torproject.org/blog/tor-android
 [20]: http://narrativescience.com
 [21]: /content-images/news/2011/04/HHNYCDD2-narsci-e1302190578750.jpeg "HHNYCDD2-narsci"
 [22]: /content-images/news/2011/04/HHNYCDD2-narsci.jpeg
 [23]: /content-images/news/2011/04/HHNYCDD2-oasisnyc-e1302190913780.jpeg "HHNYCDD2-oasisnyc"
 [24]: http://meetupnyc.hackshackers.com/photos/1334895/22514242/
 [25]: http://oasisnyc.net
 [26]: http://http://www.oasisnyc.net/map.aspx
 [27]: /content-images/news/2011/04/HHNYCDD2-frank-e1302191570148.jpeg "HHNYCDD2-frank"
 [28]: http://meetupnyc.hackshackers.com/photos/1334895/22514047/