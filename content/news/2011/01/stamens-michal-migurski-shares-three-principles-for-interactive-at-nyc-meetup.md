---
title: Stamen’s Michal Migurski shares three principles for interactive at NYC Meetup
authors:
- Kennedy Elliott
date: "2011-01-16"
_migration:
  id: 1855
  timestamp: 1486602235
tags:
- maps
- Maps
- Stamen
categories:
- News
- Talks
groups:
- New York
---

Much to the enjoyment of the map junkies of the group, Hacks/Hackers NYC welcomed [Michal Migurski][1], partner and resident cartography guru of interactive agency [Stamen Design][2], to the [Jan. 11 meetup][3]. He showcased two of his “civic-oriented” projects, Oakland Crimespotting and This Tract, each aiming to make government data interactive and accessible for the public good.

{{< figure link="/content-images/blog/2011/01/Screen-shot-2011-01-13-at-11.50.08-PM.png" src="/content-images/blog/2011/01/Screen-shot-2011-01-13-at-11.50.08-PM-224x300.png" >}}

Migurski introduced his company and shared some of Stamen&#8217;s [past work][4], including [Digg Swarm][5], which represented online buzz following the reported death of Saddam Hussein.

Migurski also shared [MSNBC Historical Hurricane Map][6], a highly interactive program that plots more than 150 years’ worth of data from 1,410 hurricanes.

For [SFMOMA Artscape][7], Stamen visualized over 3,500 artistic works on a sliding navigational backdrop for the San Francisco Museum of Modern Art. Here, users can discover works by clicking on artist names, individual artwork, and a variety of other variables.

Next, Migurski discussed three contexts he regularly keeps in mind when constructing his interactive pieces.

The first, “Here vs. There,” refers to the geographical nature of his work. Data is typically anchored by a physical landscape, or more simply, plotted on a map. Drawing in data from specific geographic locations sometimes more effectively tells a story about the collective whole, Migurski believes.

The second context, “Now vs. Then,” indicates a timeline exists in the work, or an analysis of trending over time. In the case of the MSNBC Hurricane Map, users could toggle between more than 150 years of hurricane data, and visualize trends during this time frame.

“Small-Here vs. Big-Here” is his third guiding principle, and emphasizes the importance of giving users customizable tidbits of personalized information (i.e. stats about a particular user’s hometown) and comparing that data to a national, or macro, level. Migurski referenced [The Long Now Foundation][8] as an example of a project that touches on all three of these concepts: big here, long now, and existing for a long period of time.

Moving on to his next project, [Oakland Crimespotting][9], which was inspired by a [Crime Watch][10], the Oakland Police Department’s slightly archaic crime mapping website. The Crime Watch website’s usability was low; with pixelated graphics, strange icons and above all, forcing the user to answer a series of questions about which data he/she would like to plot before revealing the map visualization.

Migurski’s group revamped the site. Knowing they could rely on faster browser speeds, they designed an interface that gives the user an overview of available data and allows them to drill down as necessary. Because Migurski says he believes it’s “important for every crime to have local context,” each incident has its own linkable and easily referenced Web page.

He says he hopes this interactive database will foster more informed awareness and meaningful discussion in Oakland &#8211; part of how he believes programmers like him can repurpose data for the public good. And by automatically incorporating data directly from the Oakland PD, Stamen can maintain the Crimespotting map with relatively little upkeep.

Next, Migurski showed off another of Stamen’s projects, [This Tract][11], which he described as a “weekend hack that turned into something larger.” Using census data, the program gives detailed stats about each tract by ethnic makeup, education, age, income and more, and compares each tract to various scales, such as county, state and national data.

Before delving into the details of This Tract, he mentioned a few other data visualizations from other individuals who have created maps with the same census data. The New York Times project, [Mapping America: Every City, Every Block][12], mapped such variables as ethnic makeup and change in median monthly rent over the past decade.

Eric Fisher produced a visually stunning [Flickr set of maps][13], visualizing ethnic makeup in several cities. “Radical Cartographer” Bill Rankin created a similar [map of Chicago][14], where racial divisions are prominent. Lastly, Migurski admired promotional advertising for the 2010 census, noting they promise the return of public good in exchange for participation in the census.

Turning the focus back to his project, he called out particular tract data, illustrating the racial makeup of New York&#8217;s Chinatown, the educational level of those living around Harvard, as well as how many senior citizens live in Collier County, Fla.

This Tract signifies Migurski’s growing interest in using government/census data to give a broader, national perspective than what was possible with Crimespotting. Because census spreadsheets can be very large, sometimes with hundreds of columns of data, Migurski had to write a Python script he calls [census-tools][15]. He also used [Protovis][16] to allow some interactive appeal, like tool tips, and the FCC [census block conversions API][17].

He concluded his presentation with a reminder of his three guiding contexts: Here vs. There, Now vs. Then and Small-Here vs. Big-Here.

**</p> 

{{< figure link="http://www.slideshare.net/kennedyelliott/michal-migurski-data-in-context" src="/content-images/blog/2011/01/MMSlides1-300x264.png" alt="Michal Migurski's slideshow: Data in Context" >}}

</strong>

_Kennedy Elliott is a visual storyteller based in New York, NY, and a newbie to [Hacks/Hackers NYC][18]. You can tweet her_ [_@kennelliott_][19]_._

 [1]: http://mike.teczno.com/
 [2]: http://stamen.com/
 [3]: http://meetupnyc.hackshackers.com/calendar/15911556/?from=list&offset=0
 [4]: http://stamen.com/everything
 [5]: http://labs.digg.com/swarm/
 [6]: http://stamen.com/msnbc_historical_hurricane_maps
 [7]: http://stamen.com/clients/sfmoma_artscope
 [8]: http://longnow.org/
 [9]: http://oakland.crimespotting.org/
 [10]: http://gismaps.oaklandnet.com/crimewatch/
 [11]: http://thistract.com/
 [12]: http://projects.nytimes.com/census/2010/explorer
 [13]: http://www.flickr.com/photos/walkingsf/4981444199/in/set-72157624812674967/
 [14]: http://www.radicalcartography.net/index.html?chicagodots
 [15]: https://github.com/migurski/census-tools
 [16]: http://vis.stanford.edu/protovis/
 [17]: http://reboot.fcc.gov/developer/census-block-conversions-api
 [18]: http://meetupnyc.hackshackers.com/
 [19]: http://www.twitter.com/#!/kennelliott