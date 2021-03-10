---
title: A Behind-the-Scenes Look at the New York Times “Moment in Time” Project
authors:
- Jennifer 8. Lee
date: "2010-07-28"
_migration:
  id: 607
  timestamp: 1486602237
categories:
- Meetups
- News
groups:
- New York
---

{{< figure link="/content-images/news/2010/07/moment-in-time.png" src="/content-images/news/2010/07/moment-in-time.png" alt="New York Times Moment in Time" >}}

The latest [Hacks/Hackers NYC][1] gathering was all about photojournalism, hosted in the breathtaking [Open Plans][2] [penthouse][3] (with a wraparound balcony and a fantastic view) on July 27. Jonathan Tepper, co-founder of [Demotix][4], talked about his crowdsourced photo wire based in London, and the team behind The New York Times&#8217; &#8220;Moment in Time&#8221; discussed their project that mapped 14,000 user-submitted images onto an interactive globe.

Around 70 people attended with a good mix of programmers and content folk. There was a big contingent from Newsweek, which arrived together, and we even had a representative from [10gen][5], the company which makes [MongoDB][6], the database that was used for the &#8220;Moment in Time&#8221; project. (He came wearing a MongoDB T-shirt, so was easy to spot)

<!--more-->

### Moment in Time

{{< figure link="/content-images/news/2010/07/nytmomentintime2.jpg" src="/content-images/news/2010/07/nytmomentintime2-300x204.jpg" alt="Jacqui Maher, Jim Estrin and Zach Wise of The New York Times discuss their Moment in Time project at the Hacks/Hackers NYC Meetup on July 27, 2010" >}}

**Genesis**

[Jim Estrin][7], co-editor of the [New York Times Lens blog][8], was driving one day when he came up with the idea of [calling on people around the world][9] to take photos in a single moment in time so they could &#8220;see what that moment would look like.&#8221; The purpose was two-fold: to take photos all around the world and to have a shared group experience. Jim wanted a project that would draw in both amateurs and professionals, which is why he stripped down the rights requests with interesting consequences (more on that below).

&#8220;I felt it was an experiment to learn from: how do you do it so large for so many moving parts?&#8221; Jim said.

[Jacqui Maher][10] was called upon to help with the back end, and [Zach Wise][11] &#8212; multimedia designer and Flash ninja (if we can still say ninja) &#8212; programmed the front-end interface for the front-end.

He debated whether a moment in time was a shared instant (which would have left one third of the globe in the dark at any given time), or a fixed time on the clock that would roll over the world (e.g. &#8220;noon on April 30&#8221;). He opted for the first and settled on May 2, a Sunday, at 15:00 U.T.C., which was 11 a.m. in New York City. The date was selected because he wanted college students to be able to participate before they got distracted. And the time was selected to minimize parts of the world that would be in the dead middle of the night (though a couple in New Zealand even [set their alarm for 3 a.m. to take a photo of the moon][12]). The runner up was the summer solstice, June 21.

To give readers some guidance, they created categories: Religion, Play, Nature and the Environment, Family, Work, Arts and Entertainment, Money and the Economy, Community and Social Issues.

**Submissions**

From the beginning, Jim predicted the project would get 10,000-20,000 submissions.

&#8220;Jacqui thought we were clinically insane and planned for 1,000,&#8221; said Jim. To give context, the largest New York Times photo submission project was [The Puppy Diaries][13], which was up for six months and received 4,000 submissions. As Jacqui noted, this ended up being the equivalent of three or four &#8220;Puppy Diaries&#8221; but submitted within a very compressed period of time. At the peak submission period, photos were getting timestamped to the millisecond, meaning that hundreds of photos were coming in at the same minute. It could have looked like denial of service attack to the servers.

All photos were approved by an editor. Someone of course asked about porn/spam. In the end the team only edited two photos for nudity, and one was intended as a serious submission, but the object covering the sensitive body parts was just ever-so-slightly misplaced.

**Front-end**

Most of the reader photo interfaces on nytimes.com had been in a &#8220;quilt&#8221; format.  This time  Zach designed a globe with the photos sorted into stacks to ease the browsing experience. That way a viewer could dig into a stack and just keep browsing by hitting &#8220;next.&#8221; He decided to divide the world into a grid that would cluster photos by geography. The upside is that it looked very neat and ordered. The downside of that is where the borders of the grid sometimes landed. For example, photos from New York City and parts of Canada were merged into one stack. For the background of the globe, he ended up using a photo of the earth taken by NASA at that moment. And people would have two points of reference of geography when looking at a photo: the relative position of the earth in the background and the dateline.

Zach ultimately used the [Away3D][14] Adobe Flash engine to render the 3D interface. He originally started with Papervision3D but found it too slow and couldn&#8217;t handle the number of polygons needed to render the globe. He switched to Away3D which was much smarter about handling polygons, is a newer engine, and ended up being roughly three times faster than [Papervision3D][15] in the end.

**Back-end**

A &#8220;Moment in Time&#8221; was the first use of the &#8220;Stuffy&#8221; user submission system, which was an extension and play on &#8220;Puffy&#8221; (&#8220;Photo Uploader Form For You&#8221;) originally designed for [the Obama inauguration][16] photo album. Puffy was meant as a bit of a one-off, but it had morphed over time to deal with more and more demands. (As Jacqui [writes on the Open blog][17], &#8220;We were drowning in multi-screen &#8216;if-elsif-elsif-else&#8217; blocks, just to determine the look, feel and functionality of each form.&#8221;)

So time for a new submission form. This time, they decided to opt for a &#8220;NoSQL&#8221; database, a.k.a. documented-oriented database, which gave them a lot more flexibility. (For non-techies: we&#8217;ve been trying to find a good explanation for a documented-oriented database versus a relational database. The Wikipedia one [is improving but not great][18]. But think of the difference between the flexibility a Microsoft Word document gives you to type and add what you want vs. Excel tables which are often pre-defined columns as numbers, currency, date, text.) &#8220;We were talking about documents, we weren&#8217;t talking about relational data all that much,&#8221; Jacqui said.

Jacqui decided to use [MongoDB][19] (though she considered [CouchDB][20] and [Tokyo Cabinet’s Table][21]) in part because the company behind MongoDB, 10gen, was located in New York City. When asked about scaling, she said MongoDB was great. The problems with the project never came from the backend.

Stuffy is built in Ruby on Rails.

**Load**

Zach himself had a slow Verizon DSL connection in Brooklyn and so he was particularly sensitive to slow connections. Jacqui and Zach tried all sorts of shortcuts to compress the file, but in the end it was still about 500 kilobytes zipped. One shortcut: instead of using the full field names in the JSON data file, they agreed upon single character abbreviations for each: so &#8220;s&#8221; instead of &#8220;submission.&#8221; To distract people during the long load time, Zach decided to have the globe spinning in the background, so it looked like something was happening. (This feels somewhat akin to [buildings placing mirrors by the elevators][22] to distract people from long wait times).

Lots of questions from all directions from the audience, but no questions on Flash, which raised the question afterwards, &#8220;Is Flash over?&#8221; That the iPad lacks Flash functionality is deadly in the photo field.

**Rights**

In order to attract professional photographers to the project, Jim decided to strip down the rights The New York Times would demand for the images — essentially limited to online rights for the &#8220;Moment in Time&#8221; project, the Lens blogs and some related promotional activities. Readers kept the copyright. The restriction was: “By submitting to The New York Times, you are promising that the content is original, doesn’t plagiarize from anyone or infringe a copyright or trademark, doesn’t violate anybody’s rights and isn’t libelous or otherwise unlawful or misleading. You are agreeing that we can use your submission on Lens, the photojournalism blog of The New York Times, and in the online and print version of the New York Times promoting or referring to the Lens post.”

Later on, he noted this became an issue when someone wanted to archive the photos for historical purposes and the French newspaper [Le Monde][23] (whose url always makes me think of &#8220;lemonade&#8221;) wanted to print 100 of the photos. Whereas Jim did email 100 photo owners for the Le Monde request, it was near impossible to email all 14,000 who submitted for the historical archive.

**Outreach**

They promoted the project through direct email, on the Lens blog (with [follow-up FAQ][24]) and lists. Jim said he spent nearly every night for around six weeks emailing people to alert them to the project. While he was confident that they would get photos from New York, and the United States, he was less confident about other countries.&#8221;This was mostly my obsession,&#8221; he said. He also set up a [Facebook event page][25]. This later on unexpectedly became a place where users (some waiting to submit their photos online) started posting hundreds of photos where others commented on it.

**How Much Time Did This Take?**

Idea to execution was about 2 1/2 months. That was in part because Jim wanted to get the project done before the end of the school year. In terms of development time, Jacqui and Zach said it was a few weeks of work on their part. However, what _was_ time consuming was dealing with the photos after they came in. Even with six people assigned to approve the photos, Jim ended up pulling an all-nighter (his first since his 20s) to deal with thousands of submissions tumbling in. Also, the administrative interface for approving photo submissions was designed to be accessed by a single photo editor, not six people, so it was excruciatingly slow.

**A Photo That Was Outta This World**

You never know how people are going to surprise you. The team was thrown a loop when a [picture of Mars was submitted][26] from the NASA&#8217;s [Mars Rover][27]. Zach, who had spent all his time rendering the earth, was briefly panicked that he would have to create another orb (where was Mars at that moment, and where on Mars was the photo taken anyway). &#8221; &#8220;I have to put another planet?&#8221; he said. The Mars photo generated a good 30-minute debate.

In the end, because the three-piece photo mosaic was assembled at Cornell University, [they mapped the photo to Ithaca, New York][28] — which they admit was a bit of a cop out.

{{< figure link="/content-images/news/2010/07/Screen-shot-2010-07-28-at-9.00.36-AM.png" src="/content-images/news/2010/07/Screen-shot-2010-07-28-at-9.00.36-AM.png" >}}

### Demotix

Demotix launched in January 2009 as a crowdsourced international news photowire with eight employees. The name Demotix [comes from the Greek  word][29] _[demos][29]_ [or][29] _[Δήμος][29]_, which refers to &#8220;the people.&#8221;

Some stats/highlights from co-founder Jonathan Tepper&#8217;s presentation, who arrived to speak just off the plane from London:

  * Jonathan argued that user-generated content is a bit of a myth. The vast majority content in the user generated sites — Wikipedia, Flickr, YouTube — comes from a very small percentage of very dedicated users who are uploading or making changes. Some people might make an contribution here and there, but that doesn&#8217;t mean they will necessarily do it again. It&#8217;s the same for Demotix. They have 14,000 registered contributors, 3,000 active ones, but 200 to 300 contribute every day.
  * Demotix is built to scale on a variable cost model with low fixed costs.
  * They get currently about 25,000 photos a month. Now they have quarter million photos archived, with thousands sold, but high hundreds to print. Print news photo distribution is a bit of an oligopoly and since publications have subscriptions to wire services already, Demotix photos have to be very unique for publications to buy them. Many of the major photo agencies have hundreds of salespeople.
  * Some highlights from their photos [include the widely distributed one of Skip Gates getting arrested][30] by Cambridge police by neighbor Bill Carter (Bill actually Googled to find how to sell his picture and landed on Demotix) and the shot from the [Tehran protests in June 2009][31] after many foreign press had been kicked out or detained (It ran on the front page of The New York Times under the photographer&#8217;s handle &#8220;[Tehranreporter][32]&#8220;).
  * Demotix splits revenue 50/50 with the photographers. Rates vary dramatically: images used in an online photo gallery might only cost $5 or $10, whereas newspapers in England for example sometimes pay by the square inch, no matter where it runs in the papers. The Skip Gates arrest photo [earned more than $4,000 in sales][33].
  * There isn&#8217;t a lot of entertainment coverage despite the fact that there probably is a demand for it, particularly at large festivals which can&#8217;t be widely covered. Jonathan thinks that may just be because they didn&#8217;t have a lot of entertainment coverage to begin with, and users copy what they see. Given the control that some agencies have accumulated the entertainment/celebrity space, some Hacks/Hackers members thought this had high potential as a market.
  * The Web site is built using Drupal. Neither of the co-founders are programmers.
  * Demotix is on everyone&#8217;s radar now and they are in discussions with all the big players. Are they allies? Competitors? [Frenemies][34]? It&#8217;s hard to say. Demotix turned down an chance to be acquired earlier on after seeing what happened to [Scoopt][35], a crowdsourced photo service which [was bought by Getty images][36] in 2007 and [then shut down][37] in 2009.

 [1]: http://meetupnyc.hackshackers.com
 [2]: http://openplans.org
 [3]: http://www.designspongeonline.com/2010/02/sneak-peek-ltl-architects-ashley-christine.html
 [4]: http://demotix.com
 [5]: http://10gen.com
 [6]: http://www.mongodb.org/
 [7]: http://twitter.com/jamesestrin
 [8]: http://lens.blogs.nytimes.com
 [9]: http://lens.blogs.nytimes.com/2010/04/08/about-3/
 [10]: http://twitter.com/jacqui
 [11]: http://zachwise.com/
 [12]: http://www.facebook.com/photo.php?pid=4116359&o=all&op=1&view=all&subj=112035958816765&aid=-1&id=544277614
 [13]: http://www.nytimes.com/interactive/2009/07/27/garden/20090727-reader-dog-photos.html
 [14]: http://away3d.com/
 [15]: http://papervision3d.org/
 [16]: http://www.nytimes.com/interactive/2009/01/18/us/politics/inauguration-photos.html
 [17]: http://open.blogs.nytimes.com/2010/05/25/building-a-better-submission-form/
 [18]: http://en.wikipedia.org/wiki/Document-oriented_database
 [19]: http://mongodb.com
 [20]: http://couchdb.apache.org/
 [21]: http://tokyocabinet.sourceforge.net/spex-en.html#features
 [22]: http://37signals.com/svn/posts/1244-defining-the-problem-of-elevator-waiting-times
 [23]: http://www.lemonde.fr/
 [24]: http://lens.blogs.nytimes.com/2010/04/30/readers-11/
 [25]: http://www.facebook.com/event.php?eid=112035958816765
 [26]: http://www.nasa.gov/mission_pages/mer/images/pia13104.ht
 [27]: http://marsrover.nasa.gov/home/
 [28]: http://lens.blogs.nytimes.com/2010/05/12/readers-19/
 [29]: http://blogs.telegraph.co.uk/news/demotix/5992726/Demotic__the_language_of_the_people/
 [30]: http://www.washingtonpost.com/wp-dyn/content/article/2009/07/21/AR2009072101771.html
 [31]: http://www.demotix.com/news/running-battles-iran-battle-reaches-climax
 [32]: http://www.demotix.com/users/tehranreporter/profile
 [33]: http://www.boston.com/news/local/massachusetts/articles/2009/07/23/birth_of_a_flashpoint_gatess_neighbor_captured_the_moment/
 [34]: http://en.wikipedia.org/wiki/Frenemy
 [35]: http://www.scoopt.com/
 [36]: http://newsbreaks.infotoday.com/Digest/Getty-Images-Scoopts-Up-Aggregator-of-UserGenerated-Content-35703.asp
 [37]: http://www.guardian.co.uk/media/pda/2009/feb/04/citizenmedia-photography