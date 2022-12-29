---
title: New Orleans kicks off hackathon series
authors:
- Samantha Sunne
date: "2017-02-09"
_migration:
  id: 17734
  timestamp: 1489111422
tags:
- Hackathons
groups:
- Canterbury
---

#### **By** [**Samantha Sunne**][1]

Hacks/Hackers [New Orleans][2] held its first hackathon this week, digging into dirty assessment data, partial wetlands maps, unanswered recycling questions and other problems just waiting to be solved. The organizers partnered with [ONA][3], which also opened a New Orleans group last year. The HH Nola group has grown to almost 200 members since it launched about six months ago.

&#8220;We were fortunate to have so many talented participants whose interests converged around issues important to our community,&#8221; organizer [Troy Thibodeaux][4] said. &#8220;Each group came away with some wonderful progress to show for the day, and the call for a follow-up was pretty much unanimous.&#8221;

The event drew about 30 people, congregating around topics like public safety and real estate data. The final projects were:

{{< figure link="http://precycle.jonathanhooper.net/" src="/content-images/news/2017/02/Screen-Shot-2017-02-06-at-7.22.48-AM.png" alt="Screen Shot 2017-02-06 at 7.22.48 AM" >}}

[**Precycle**][5]

You&#8217;d think a town famous for drinking would know how to recycle, but no. There&#8217;s widespread confusion about what you can recycle and where &#8211; or if you can even recycle at all. A team put together a demo app called [Precycle][5] that informs users of their recycling items and days, and even offers automated reminders. The team planned to expand the app to include compost.

[**Gulf Wetlands map**][6]

The [Gulf Restoration Network][7], an environmental nonprofit, has been trying to analyze wetlands use permits, but struggling to wrangle with some data stored in levelDB. One attendee [wrote a parser][8], and over the course of the day they managed to get the data into a usable format. Next, the group will use it to populate [a map of wetlands uses][9] in the Gulf area. Users can see who owns the permit, as well as links to the document itself and deadlines for adding public comment. The current map, seen [here][6], will be expanded by end of 2018 to include Texas and Florida.

{{< figure link="https://gulfwetlandsmap.carto.com/viz/d36aa682-1d07-11e6-bc20-0ef7f98ade21/public_map" src="/content-images/news/2017/02/Screen-Shot-2017-02-09-at-1.23.44-PM.png" alt="Screen Shot 2017-02-09 at 1.23.44 PM" >}}

[**Nola guns**][10]

Another map produced at the hackathon was of &#8220;firearm discharge&#8221; incidents in New Orleans, one of the most crime-ridden cities in the U.S. The team wanted to check for a correlation between firearm discharges and neighborhoods, and surprisingly, the tourist-heavy French Quarter was one of the [densest areas of the map][10]. In the future, a teammember said, they hope to make the map automatically update.

[**Calls for Service**][11]

Crime data is always some of the most popular data around, for nerds and average citizens alike. Somewhat similar to the guns team, the 911 team put together a [visualization dashboard][11], including a map of calls for service. The tool uses an API to automatically pull data from the [New Orleans open data portal][12]. It can be downloaded as HTML and reused for other projects &#8211; just replace the data source!

{{< figure link="http://nolacfs.com/" src="/content-images/news/2017/02/Screen-Shot-2017-02-09-at-1.26.02-PM.png" alt="Screen Shot 2017-02-09 at 1.26.02 PM" >}}

[**311 app**][13]

The local [CfA][14] brigade, [Code for New Orleans][15], has been interested in 311 data for a while, and found some brothers in arms at the hackathon. They ended up [creating a survey][16] to get feedback about the 311 system and started investigating why the city doesn&#8217;t already have an app for submitting issues into the 311 system. [Building a mobile app][13] was out of scope for this particular hackathon, but may be a project to tackle in the future.

[**Assessment data**](https://github.com/bhelx/nola-assessor-data)

This team didn&#8217;t end up with a friendly public-facing app, sadly, but they certainly tried their hardest. Several intrepid hackers struggled to clean a monster set of 10 years of state assessment data, getting it significantly closer to usability. At least now the data can accessed via several CSVs, rather than writing code. A local reporter expressed interest in using it for a story, and in fact, assessment data was the most popular topic among all at the hackathon.

{{< tweet 828712825359040518 >}}

The assessment data is one project that is likely to be continued at another hackathon at a later date. Several attendees expressed interest in a series of civic hacking hackathons, something of a rare occurrence in New Orleans. More hacking and problem-solving to come!

 [1]: https://twitter.com/samanthasunne
 [2]: https://www.meetup.com/hacks-hackers-new-orleans/
 [3]: https://www.meetup.com/ona-new-orleans/
 [4]: https://twitter.com/tthibo?lang=en
 [5]: http://precycle.jonathanhooper.net/
 [6]: https://gulfwetlandsmap.carto.com/viz/d36aa682-1d07-11e6-bc20-0ef7f98ade21/public_map
 [7]: http://www.healthygulf.org/
 [8]: https://github.com/togakangaroo/scott2-leveldb-parser
 [9]: https://gulfwetlandsmap.carto.com/viz/ee6706e4-f243-4835-8e44-5cc437bcf47f/public_map
 [10]: http://nolaguns.lkdev.com/
 [11]: http://nolacfs.com/
 [12]: http://data.nola.gov
 [13]: https://github.com/codefornola/311
 [14]: https://www.codeforamerica.org/
 [15]: http://meetup.com/code-for-New-Orleans/
 [16]: https://docs.google.com/forms/d/e/1FAIpQLScbY9u6TZdDOTTWel1KReKwBBCevCHa6_jjEwLrCyNOu6nHcA/viewform
