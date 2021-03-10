---
title: How we made our maps | Hacks/Hackers NYC
authors:
- Lam Thuy Vo
date: "2011-11-06"
_migration:
  id: 3922
  timestamp: 1486602223
tags:
- census
- Google Fusion Tables
- Maps
- nyc
- ProPublica
- Wall Street Journal
- WNYC
categories:
- Meetups
groups:
- New York
---

When a story is best told through a visual representation of geography, maps are often the best way of telling it. Three journalists joined [Hacks/Hackers NYC][1] to explain how they approached mapmaking for their recent projects. Slides and code from their presentations are available in [this link bundle][2].

{{< figure src="http://farm7.static.flickr.com/6033/6307049776_c2d3f60686.jpg" alt="John Keefe, Albert Sun and Jeff Larson explain how they made their maps at Hacks/Hackers NYC" >}}</p> 

While New York was preparing for Hurricane Irene, John Keefe, WNYC&#8217;s senior executive producer for news, decided to create a [hurricane evacuation map][3] so people could see whether or not they needed to leave their homes.

He used [Google Fusion Tables][4] to make what became one of WNYC&#8217;s most viral news application. The process was simple and fast, he said. John uploaded [shapefiles][5] of the evacuation zone found in the [NYC Datamine][6] to Google FusionTables using [Shape to Fusion][7]. He then customized his map with [FusionTablesLayer Builder][8] and added [JavaScript][9] to create a search box so users could see if they needed to evacuate. The final map:

{{< iframe src="http://project-s3.wnyc.org/news-maps/hurricane-zones/hurricane-zones-mini.html?lat=40.7110&lon=-73.8610&zoom=11" width="400px" height="500px" >}}

[Learn more about John&#8217;s process][10] on his blog.

Albert Sun from The Wall Street Journal gave insight to how he made his [Census Map Maker][11]. Inspired by sites like the [Redistricting Game][12] and the [Public Mapping Project,][13] Albert set out to make his own map which would allow users to [draw their own maps][14] and find census information for the areas they marked. He used a JavaScript overlay on Google Maps and coded the map with [GeoDjango][15].

Albert has open-sourced his code and posted it to [Github][16].

ProPublica’s Jeff Larson spoke about two interactive maps he the produced for ProPublica’s investigation into [corporate influence in the redistricting process][17]. In his maps, Larson combined census data with district maps to show how voter districts were segregated in ways that would [favor certain candidates][18] or keep ethnic groups together in a [voting bloc][19]. (Watch a video about the [complicated issue][20].)

Each map is dynamically generated from over 2GB of data through a new mapping library ProPublica wrote in-house with C, API and Ruby.

Watch all three presentations in the video below:

[View the story &#8220;Hacks/Hackers: How We Made Our Maps&#8221; on Storify][21]]

 [1]: http://meetupnyc.hackshackers.com
 [2]: http://bitly.com/thityS
 [3]: http://project.wnyc.org/news-maps/hurricane-zones/hurricane-zones.html
 [4]: http://www.google.com/fusiontables/Home/
 [5]: http://www.nyc.gov/html/oem/downloads/googleearth/googleearth_hurricane_zone.kmz
 [6]: http://nycopendata.socrata.com/
 [7]: http://shpescape.com/
 [8]: http://gmaps-samples.googlecode.com/svn/trunk/fusiontables/fusiontableslayer_builder.html
 [9]: https://gist.github.com/1332922
 [10]: http://johnkeefe.net/hackshackers-nyc-presentation
 [11]: http://censusmapmaker.com/
 [12]: http://www.redistrictinggame.org/
 [13]: http://www.publicmapping.org/
 [14]: http://censusmapmaker.com/draw/
 [15]: http://geodjango.org/
 [16]: https://raw.github.com/gist/1331934/fc91991d89c156502ed16f90609fab0c9a8ec87e/hackshackerspresentation.txt
 [17]: http://www.propublica.org/article/hidden-hands-in-redistricting-corporations-special-interests/single
 [18]: http://projects.propublica.org/redistricting-maps/fair-districts-mass
 [19]: http://projects.propublica.org/redistricting-maps/protect-your-vote
 [20]: http://www.propublica.org/article/video-the-redistricting-song
 [21]: http://storify.com/lamthuyvo/hacks-hackers-how-we-made-our-maps