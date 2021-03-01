---
title: How NYPL Labs Turns Physical Data Into Digital Knowledge, a Hacks/Hackers NYC
  guest post
authors:
- Chrys Wu
date: "2013-09-16"
_migration:
  id: 17060
  timestamp: 1486602221
tags:
- Maps
- New York Public Library
- NYPL Labs
- public participation
- transcription
- video
categories:
- Meetups
groups:
- New York
---

{{< figure link="http://www.nypl.org/collections/labs" src="https://newyorkfamilyhistory.org/sites/default/files/nypl\_logo1\_0.gif" alt="New York Public Library" >}}

[_**Guest post by Dave Riordan, Product Manager, [NYPL Labs][1]**_]

Last week, we had the pleasure of hosting and speaking at the incredible [Hacks/Hackers NYC meetup][2], a collective of some of the most talented and interesting folks in New York with a bent toward building a better-informed citizenry through journalism, technology and design. They welcomed us and we fit right in.

Rather than have myself and Ben Vershbow do our traditional dog-and-pony show (that poor, poor pony), the entire Labs team got up on stage to share some of our most interesting projects and technical investigations, several of which were shown for the first time.

Here’s a quick rundown of what we covered:

_pssst &#8211; if you want to follow along, we’ve posted our slides from the evening. ([PDF][3] | [Scribd][4])_

Ben Vershbow, Labs’ founder and manager covered the philosophy and history of Labs, along with 4 of our projects:

{{< figure link="http://twitpic.com/dcx0xd" src="http://twitpic.com/show/thumb/dcx0xd.jpg" alt="@nypl_stereo is in da house #hhnyc" caption="Hacks/Hackers needed 3D glasses to get the full Stereogranimator effect." >}}

  * **NYPL Historical Geospatial Program**, including the [Map Warper][5], which transforms pictures of old maps into actionable geospatial data, the NYC Chronology of Place, our historical gazetteer for New York, and our [Ghost Map][6] prototype, which unifies historical city directories with historical maps.
  * **[The Stereogranimator][7]**, which transforms vintage 3D photographs called stereographs into pseudo-3D wiggle-GIFs — mashing up vintage photography with vintage web – and real 3D anaglyphs.
  * **[What’s on The Menu][8]**, where we put our historical restaurant and banquet menu collection online and ask volunteers to help turn them into a structured dataset of culinary and economic history (and the [first official API from NYPL][9]).
  * **[DirectMe NYC: 1940][10]**, a rapid-response tool infused with the knowledge of our [Milstein Division][11] librarians we built to make the 1940 US Federal Census immediately usable by fusing old phonebooks with geneological tools, old maps, and NY Times headlines. In a fortuitous coincidence Zeehsan Lakhani, our developer emeritus behind the project, happened to be in the audience. And look: [we found J.D. Salinger][12]!

In addition, Ben plugged [NYPL’s Digital Collections API][13], NYPL’s open API that powers our new [Digital Collections][14] site.

Paul Beaudoin, data scientist/oil painter, shared our prototype of [Ensemble][15], a crowd-powered data mining app designed to transform our theatre program collection from the [New York Public Library for the Performing Arts][16] into a dataset of historical performances and performers. He took us on a tour of parallel efforts in academia, newsrooms and citizen science, and discussed some of the challenges of figuring out how to extract information with a highly complex data model from documents with widely divergent layouts and templates. We also got to see a [custom visualization][17] of how many users come together on Ensemble to generate a consensus of what the materials accurately represent. Also see these two related citizen science projects from Zooniverse — with whom NYPL Labs is partnering, [thanks to the NEH][18] — to build an open source transcription engine that can make projects like [oldweather.org][19] and [notesfromnature.org][20] easier to set up.

Trevor Thornton and Matt Miller, the only members of Labs with actual Library degrees (they make the rest of us slackers look good), shared the approach they’re taking to designing NYPL’s brand spanking new [Archives portal][21], where researchers can go to work with NYPL’s over 8,000 archival collections (unique, unpublished materials — ‘the papers of ’, ‘the records ’. First, Trevor Thornton gave a hilarious “everything you wanted to know about archives but didn’t know to ask” overview, then took us through a tour of the underlying systems that power the archives portal, much of which was designed to treat archival finding aids as data rather than simply as documents. Then he turned things over to Matt Miller to show off some of the cool new interfaces this approach makes possible. They queued up the [Jack Kerouac collection][22], and showed off two hidden features, triggered via an ode to the console cheat codes of the ’80s:

  * By typing “minime” on the Detailed Description, it brings up The Navigator, a Sublime Text-inspired pane that lets you navigate a finding aid based on the structure of the text.
  * By typing “networksarecool” on the Detailed Description, it brings up a network analysis of the archival collection, creating a subject-driven network graph created by the archival arrangement.

Additionally, Matt showed off a [new visualization of the entire NYPL Catalog][23] based on Subject Headings, designed to allow spatial exploration of the library’s overall holdings; hopefully the first step toward creating new approaches that will make NYPL’s entire collections more approachable and navigable. As a bonus, check out another quick visualization Matt made (but didn’t have time to show): [1,001 full-text archival finding aids][24] color-coded by average date of each collection’s components.

{{< figure link="https://twitter.com/erikaherzog/status/377576390721544192/photo/1" src="https://pbs.twimg.com/media/BT1rug0IIAAv7gw.jpg" caption="Brian Foo of NYPL Labs demonstrated his video mashup and annotation tool." >}}

Brian Foo, our resident breakdancer/[fine artist/Kickstarter-er extraordinaire][25], demoed the [video juxtaposition / mashup tool][26] he built for the [Jerome Robbins Dance Division][27] at the Library for the Performing Arts, which is basically a browser-based video editor powered by [Mozilla’s Popcorn.js][28].

Due to rights restrictions, most of the collection can only be viewed while onsite at the Library for the Performing Arts. But we were able to juxtapose several multi-camera shots of ritual dance from Bhutan, then mashed it up with some fly moves and beats from The Jabbawockeez. And there wasn’t time to show it off onstage, much of the inspiration for the juxtaposition tool came from one of Brian’s own art works, [Joyblaster][29], a series of video pieces where people’s personal stories are reconstructed from multi-frame YouTube videos. You can grab some of the code used to power the juxtaposition tool, namely the [Brightcove player for Popcorn.js][30] and [several plugins for Video.js][31].

{{< figure link="https://github.com/NYPL/map-vectorizer" src="https://raw.github.com/NYPL/map-vectorizer/master/feature_detection.png" caption="Teh Vectorizer by NYPL Labs is like OCR for maps. And it can detect additional features on its test set of hand-drawn maps." >}}

Mauricio Giraldo, our mad scientist interaction designer, took us on a tour through the insides of [Teh Vectorizor][32], his groundbreaking tool that crunches our huge backlog of insanely detailed historical insurance maps — formerly turned into data via hand-crafted artisanal processes (which took 3 years to get through 3 boroughs) — into largely automagically generated data through a frankenscript of open source tools. But because it’s not perfect yet, he also showed off an early version of our map data improvement game, which we’re tentatively calling _Polygonzo_, a mobile game that lets people check the Vectorizer&#8217;s accuracy. Ultimately, we&#8217;d like to make this a mobile app that subway-dwelling New Yorkers can play offline, maybe give Angry Birds a run for their money. Keep an eye out in the coming weeks for a first release&#8230;

Finally, we had Dan Vanderkam. Dan’s a friend of Labs and the creator of [Old SF][33], a site that lets you navigate the historical street photographs of San Fransisco from the SF Public Library. Dan demoed the upcoming Old New York project he’s been working on with 40,000+ street photographs from the Library’s [Milstein Division of Local/U.S. History & Genealogy][11]. He also covered his process for [finding and liberating pictures from inside other pictures][34] as many of the Milstein images are actually 2-3 pictures per image, making them normally too small to see in fine detail. Dan figured out a way to extract the pictures within pictures, and he helped us generate larger versions that we’ll hopefully be incorporating and will be available when Old New York launches later this year.

At the end, I put out a final call for everyone present to seek us out, share their ideas, their possible collaborations, their research questions. The mission of Labs and The Library is far too big for us to accomplish on our own and the hacker/researchers of today are going to be blazing the path for all of our users in the near future. It’s gonna be awesome.

Even if you weren’t able to make it, that applies to you too. Drop us a line. We’re <labs@nypl.org> and [@nypl_labs][35]. Let’s build the public library of data together.

 [1]: http://www.nypl.org/collections/labs
 [2]: http://meetupnyc.HacksHackers.com
 [3]: https://dl.dropboxusercontent.com/u/5949624/NYPL-Labs-9-10-13-HacksHackers.pdf
 [4]: http://www.scribd.com/doc/167485575/NYPL-Labs-9-10-13-HacksHackers-Presentation
 [5]: http://maps.nypl.org/warper
 [6]: http://ghostmap.herokuapp.com
 [7]: http://stereo.nypl.org
 [8]: http://menus.nypl.org
 [9]: http://nypl.github.io/menus-api/
 [10]: http://directme.nypl.org
 [11]: http://www.nypl.org/milstein
 [12]: http://directme.nypl.org/results?token=fsdhwicch5ifqjwpjnmucxkcrq
 [13]: http://api.repo.nypl.org/
 [14]: http://digitalcollections.nypl.org
 [15]: http://ensemble.nypl.org
 [16]: http://www.nypl.org/locations/lpa
 [17]: http://ensemble.nypl.org/transcriptions/510fed6e355fd2000200005e/visualize
 [18]: http://www.neh.gov/divisions/odh/grant-news/announcing-6-digital-humanities-implementation-grant-awards-july-2013
 [19]: http://www.oldweather.org/
 [20]: http://www.notesfromnature.org/
 [21]: http://archives.nypl.org
 [22]: http://archives.nypl.org/brg/19343#detailed
 [23]: https://dl.dropboxusercontent.com/u/4070829/catalog-viz-subjects/seadragon.html
 [24]: https://dl.dropboxusercontent.com/u/16562899/archive-image/index.html
 [25]: https://continuouscity.com/
 [26]: http://digitalcollections.nypl.org/tools/video/compose/2099048858001/add-video
 [27]: http://digitalcollections.nypl.org/dance
 [28]: http://popcornjs.org/
 [29]: http://joyblaster.com/
 [30]: https://github.com/NYPL/popcorn-js-brightcove-player
 [31]: https://github.com/NYPL/video-js-plugins
 [32]: https://github.com/NYPL/map-vectorizer
 [33]: http://www.oldsf.org
 [34]: http://www.danvk.org/wp/2013-02-09/finding-pictures-in-pictures/
 [35]: https://twitter.com/nypl_labs