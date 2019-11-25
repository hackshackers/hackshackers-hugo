---
title: ShowTimeLine Complete! Hackathon on visualizing timelines with @HacksHackersBA
authors:
- Mariano Blejman
date: "2012-04-26"
_migration:
  id: 8116
  timestamp: 1486602223
tags:
- Hackathons
- Latin America
groups:
- Buenos Aires
---

([Spanish post here][1])

{{< figure src="http://photos1.meetupstatic.com/photos/event/6/c/9/a/600_110127802.jpeg" >}}

The sunny morning of Saturday, April 14th was ideal for jogging. But rather than exercising well-trained bodies, smart minds were warming up for a good hackathon. [Forty-five people][2], invited by [Hacks/Hackers Buenos Aires][3], met in Buenos Aires to work on visualizing complex relationships across timelines and to learn about available tools to do so.

In a very pleasant atmosphere journalists, media publishers, designers, communication managers, and programmers shared plenty of empanadas and sodas, possibly in the only space of its kind in Latin America, [AreaTres Soho][4].

We worked on [Mapa76.info][5], a data mining platform to better analyze testimonies from Argentina’s military dictatorship trails. [Hacks/Hackers Buenos Aires][3] is building a platform to collaboratively analyze hundreds of testimonies and visualize facts presented by witnesses on interactive maps and timelines.

We also worked on: [Malvinastreinta.com.ar][6], an interactive platform that recreates the days of the war over the Falklands Islands; [Sex trafficking][7], a news analysis site initially developed for the Marita Veron’s case; and [Alianzas electorales][8], which shows election results from the perspective of political party formation and dissolving alliances.

Despite a more ambitious goal in mind, we started developing a prototype for a new timeline visualization tool, [ShowTimeLine][9], which displays the narrative of [The Lord of the Rings][10]. ([This is a collaborative post written by members of Hacks/HackersBA][11])

{{< figure src="http://hhba.info/wp-content/uploads/2012/04/Pantallazo-del-2012-04-17-195746.png" >}}

**How did we make ShowTimeLine?**

[Sandra Crucianelli][12], a Knight Foundation Fellow, gave a presentation on the usability of the timelines in Argentina, warning about the simplicity of their uses and the limited availability of complex illustration tools.

{{< figure src="https://lh3.googleusercontent.com/LWBBUDI-OYXVyfvDvkwFZ6NgVjaqJDy6w81YFbXOQRj81jhyAFACAn9hH4hjrkL8NEcXBhZTlm9LbFdT3CJj3UpAWOoqsPgrx3HDGbY6qwudkRkA9Wk" >}}

The proposal was to generate modular algorithms and libraries for one or more software tools to view data in complex timelines and other possible visualizations. The original idea was proposed by Andres Snitcofsky, who reverse engineered The Lord of the Rings project by [Randall Munroe][13]. The code developed during the hackathon can be found on [GitHub][14].

**Relationships not visible in a &#8220;manual&#8221; model?**

{{< figure src="http://photos1.meetupstatic.com/photos/event/2/1/0/e/event_109928462.jpeg" >}}

We shot “life stories” on a structured table and then looked at the relationships. César Miquel, Martín Sarsale, Rafa, Nicholas Cisco, Osvaldo Toja, Walter, Felipe Lerena, and Martin Szyszlican made up the group working on this task.

The task was divided into modules assigned to each team. We then integrated the software with Google Docs and generated the visualization using Raphael.js, Javascript and/or Coffeescript + HTML5. Basically, it was a definition of how places should be sorted.

Once the data was entered, the system finds the best way to organize information so that the lines intersect as little as possible. The [alpha prototype can be seen here][9]. At present, even though we need to improve the algorithms, it is fun just to watch it work. Keep in mind that it was built in just ten hours of collaborative work, and we are still working on it.

{{< figure link="http://timelines.hhba.info" src="http://hhba.info/wp-content/uploads/2012/04/Pantallazo-del-2012-04-17-140200.png" >}}

**Runners Marita Verón &#8211;  Trata Sexual**

{{< figure src="https://lh5.googleusercontent.com/ApNt7TmZ3ue1EZLyCP-2iuExs3M13zeKeV0k7obJlvz3PoC7TeX9LcSBO_wvZKLX8zGwDO34l0hkStc13rNI3Tvn7lyyel0YA8XTo8t6TYaDbzzCCCM" >}}

Based on a proposal by Sergio Sorín, another group worked on Marita Veron’s well-known sex trafficking case currently on trial. This group was formed by [Angélica Peralta Ramos][15], [Gaby Bouret][16], [Florencia Coelho][17] y [Ricardo Brom][18] (La Nación Data), [Ariel Aizemberg][19] (Datamining UBA), [Flor Bianco][20] (Google Argentina).

Because Marita Veron’s case is ongoing, we decided to develop a prototype timeline to keep record of the trial. One group transferred a limited range of data from the [Journal of Judgment (Storify)][21] into a table in Google Spreadsheet. Another group focused on articulating this data with the timeline developed by Knight Media Lab and testing this program. We translated the code to display dates and navigation controls in Spanish. [The result is here][22].

**@malvinas30 runners team** 

{{< figure src="https://lh3.googleusercontent.com/ZIAxlKS9rJ3iYcb-47Ut5BLtaPB-ML_OqPcGn1nJChHDwVGtwwkNahqegfFWPRTZXePIsEfNeENYHiEQSY7g5FdrGibDBEjQnxI6NVXUg9Ka3eXUbvA" >}}

The initial goal of [@malvinas30][6] was to work with [Knight Media Labs][23] timeline to incorporate the content they are developing. Three journalists worked on a project that recreates the Malvinas War in realtime, but situated thirty years later. We worked on two proofs of concept using the [adapted tool][23]. One concept was manually created, using input from selected [content][24] from Twitter, Facebook, YouTube, and a blog. The result of this work is available [here][25].

The other concept pulled from Twitter through Drupal to Timeline, automatically importing tweets from [@Malvinas30][26] account. The code can be found on [Github][27] and a [first version is here][28]. The journalists involved in this project are @alvaroliuzzi @Cesars (Todo Noticias) @guadalopez  (La Nación) @yaniesther @eapesteguia @juanibelbis @valeriaavn @dterragno @soldadom30 (check this last one! a “real” soldier tweeting from 30 years ago).

There are some limitations to the Timeline, like the inability to directly embed content from Facebook, Ustream and other services, but this will be developed soon. We agreed that it would be best to adapt the content depending on the relevance of information. [Here the rools adapted to filter content.][29] 

**Mapa76.info, from automatic extraction of data to timeline and maps**

{{< figure src="https://lh6.googleusercontent.com/U2doYr57mhM2rW7r9voemuzpRR9ww3v0wED0NjyfY01HcQ\_b2uxDZM1ePITvNJkVkalcG2AntEksM1WKcvP060wtRSnEvPFNb0OF\_dDyXkrpnFbWf2k" >}}

This automatic data extraction software is based on the trials of the last military dictatorship and was born during a hackathon held [last year at Tecnópolis][30]. The objective of this project is to achieve an automatic or semi-automatic display of biographies in the period between 1976 and 1983, based on written evidence, arguments, and statements.

([Here you can find a deep explanation of this project][31] also [the proposal in English we submited to Knight News Challenge][32] and a shared [Gdoc][31].)

We worked on concepts of big data, data mining and semantic web. From the extraction of data, we aim to view life stories in the timeline and find relationships.

{{< figure src="https://lh4.googleusercontent.com/lEoI3PzZpL13I5WOJGmFGK3JPL7UqWr6NmeniHqDTeDfqCKkf7NM1kSVlxXH5e3QKXzvm3OI5xCOjuwVY4pfSCVAQLDm3ziMbjflVpxj9RjmvN_9wsE" >}}

During the hackathon [Marcos Vanetta][33], [Damian Silvani][34], Luciana Padua, Andrés Snitcofsky, [Tania Wassaf][35], [Ezequiel Clerici,][36] [David Lima Cohen][37], [Mariana Berruezo][38], and [Mariano Blejman][39] worked together. This project has been under development for several months, and during the hackathon we worked hard to develop usability concepts, to improve the [Freeling][40] library (which recognizes names, institutions, and dates), and added a detection module places.

{{< figure src="https://lh6.googleusercontent.com/KOxtkPfRjGd5P75vgHYJ3dHh4Sw8wk\_zieU3R9Y3h0pfTJEJHAmQS0rV0fuUfVdLwpVupGLG9kLQI5Twoxz7MZ5acwS\_XwppH5xxM5VpULQ3oKpUtSo" >}}

Luciana Padua (datamining) found examples using various visualization tools as [TreeMap][41]. Taking structured data, we can use the Treemap tool to group cases of different people in various hierarchies, such as detention center, date of arrest, and others. In this way we can discover the relationship of one person to another depending on their joint appearance in a group. Hierarchies can be configured by the user, and researchers could investigate based on their interests. Relations and timeline: EDGEMAPS Web: <http://mariandoerk.de/edgemaps/> Paper: <http://mariandoerk.de/edgemaps/ivj2012.pdf>

**Electoral alliances**

{{< figure src="https://lh3.googleusercontent.com/0tnTbdRgGTLP0kUtvMODl7MeUn1-z01FJ7SGce5oje8pWyloOiM8hFBelwerkLMkM3KP-jhgS1M_S1JklnHsNd7q2HDb85UNJ9nlwMS5BCz5vTIOaMA" >}}

The main objective of [Andy Tow][8] is to observe the formation and dissolution of district political party alliances through time.

In Argentina, members of the National Congress are elected directly by citizens, constituting each Province and the City of Buenos Aires electoral districts with its own representation. The groups that presented candidates in each district are parties and alliances. Alliances are groups of two or more parties. We intend to show the path of parties from 1983 to 2011, revealing their electoral performance.

We worked on structuring information that will be entered into the prototyped tool. From the results of the [Atlas de Elecciones en Argentina de Andy Tow][42] and information from parties and electoral alliance districts of the National Electoral, Tow created two datasets in the category of the National Deputies from Chaco, with the format specified by the core developers. Data were entered in [a form available here][43].

_We appreciate the support of [Dan Sinker][44] from [Knight-Mozilla Open News][9], the english edition of Michelle Thorne, and the sponsorship from [Mozilla Foundation][45], [Globant][46], [LaNacion.com][47], [AreaTres][4], [Vurbia][48], [Página/12][49] and [SourceFabric][50] that made possible the hackathon. The organizing crew of Hacks/Hackers Buenos Aires is conformed by [Mariano Blejman][39] (Página/12), [Martín Sarsale][51] (Sumavisos), [Guillermo Movia][52] (Mozilla Argentina), [César Miquel][53] (Easytech),  [Mariana Berruezo][38], [Sergio Sorín][54], [Ezequiel Clerici][36], Andrés Snitcofsky and many more. Contact at [@HacksHackersBA][55] mail ba@hackshackers.com Web [http://meetupba.hackshackers.com][3] blog [http://www.hackshackers.com][56] local blog [http://hhba.info][57]_

 [1]: http://hackshackers.com/blog/2012/04/19/showtimeline-done-hackathon-of-timelines-visualizations-hackshackersba/
 [2]: http://www.meetup.com/HacksHackersBA/photos/all_photos/?photoAlbumId=7414742
 [3]: http://meetupba.hackshackers.com/
 [4]: http://www.areatresworkplace.com/es/
 [5]: http://mapa76.info/
 [6]: http://www.malvinastreinta.com.ar/
 [7]: http://hhba.info/marita-veron
 [8]: http://www.twitter.com/andy_tow
 [9]: http://timelines.hhba.info/
 [10]: http://imgs.xkcd.com/comics/movie_narrative_charts_large.png
 [11]: http://www.meetup.com/HacksHackersBA/events/55496562/
 [12]: http://www.slideshare.net/SandraCrucianelli/lneas-de-tiempo-hackaton-abril-2012-12533155
 [13]: http://xkcd.com/
 [14]: https://github.com/hhba/timelines
 [15]: http://www.twitter.com/momiperalta
 [16]: http://www.twitter.com/gabybouret
 [17]: http://www.twitter.com/fcoelho
 [18]: http://www.twitter.com/rgbrom
 [19]: http://www.twitter.com/aaizemberg
 [20]: http://www.twitter.com/florbianco
 [21]: http://www.storify.com/pollatos
 [22]: http://hhba.info/marita-veron/
 [23]: http://timeline.verite.co/
 [24]: http://bit.ly/HLQc2D
 [25]: http://doscerolife.com/malvinas30
 [26]: http://malvinastreinta.com.ar/
 [27]: https://github.com/hhba/timelinemalvinas30
 [28]: http://lab.indexante.com/static/timeline/
 [29]: https://docs.google.com/spreadsheet/ccc?key=0AgfnQN6RnkaXdEEteE9MUG9UcjRxRk9ncExKRndCUmc#gid=0
 [30]: http://www.meetup.com/HacksHackersBA/events/27084681/
 [31]: http://hhba.info/?p=166
 [32]: http://newschallenge.tumblr.com/post/19397309009/mapa76-info-data-mining-to-visualize-relationships
 [33]: http://www.twitter.com/malev
 [34]: http://www.twitter.com/munshkr
 [35]: http://www.twitter.com/taniaw
 [36]: http://www.twitter.com/eclerici
 [37]: http://www.twitter.com/limacohen
 [38]: http://www.twitter.com/myberru
 [39]: http://www.twitter.com/blejman
 [40]: http://nlp.lsi.upc.edu/freeling/demo/demo.php
 [41]: http://www.cs.umd.edu/hcil/treemap/
 [42]: http://andy.towsa.com/
 [43]: https://docs.google.com/spreadsheet/ccc?key=0Avm0OfNKUGOMdDBHYWNDRTlEcGp1dmtRV2pTd09yTnc#gid=0
 [44]: http://www.twitter.com/dansinker
 [45]: http://www.mozilla.org/foundation/
 [46]: http://www.globant.com/
 [47]: http://www.lanacion.com/
 [48]: http://www.vurbia.com/
 [49]: http://www.pagina12.com.ar/
 [50]: http://www.sourcefabric.com/
 [51]: http://www.twitter.com/runixo
 [52]: http://www.twitter.com/deimidis
 [53]: http://www.twitter.com/cesarmiquel
 [54]: http://www.twitter.com/pollatos
 [55]: http://www.twitter.com/HacksHackersBA
 [56]: http://www.hackshackers.com/
 [57]: http://hhba.info/