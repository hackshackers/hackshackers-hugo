---
title: Trip to the Land of the Automatic Extraction of Data from Documents
authors:
- Mariano Blejman
date: "2011-08-23"
_migration:
  id: 3561
  timestamp: 1486602223
tags:
- Hackathons
- Latin America
groups:
- Buenos Aires
---

[Post en español acá!][1]

{{< figure link="http://hackshackers.com/blog/2011/08/21/viaje-al-mundo-de-la-extraccion-automatica-de-datos/img\_1971\_c/" src="/content-images/blog/2011/08/IMG\_1971\_c-300x224.jpg" >}}

**We finally did it!** About 40 people (including journalists, software programmers, and militants from Argentine human rights organizations) disembarked last August 13th at the [Hacks/Hackers Buenos Aires][2] hackathon, which took place within the mega-exhibition [Tecnópolis][3]. The idea was to work all day on [Mapa76.info][4], a software project for the automatic extraction and visualization of data from text documents.  The software is focused on analyzing the trials of Argentina´s last military dictatorship, which ruled between 1976 and 1983.  Journalists and programmers came not only from Buenos Aires but from Rosario and Córdoba, as well, and were helped by the creators of [Junar.com][5], a data streaming api for dashboards, who came all the way from Chile to participate in the event and demonstrate their technology.

**The problem to solve:** At this moment in Argentina there is a great quantity of judicial cases linked to the repressions of the last military dictatorship: more than 200 convicted persons, dozens of trials in process, hundreds of witnesses testifying every day, and possibly more than a thousand accused persons implicated in acts of State terrorism between 1976 and 1983. The question is: Can we develop a software that finds relationships that people cannot see?  It is necessary for journalists, for the courts, and for investigators to define such relationships between persons, organizations, and places, and to visualize these relationships in timelines and maps.

{{< figure link="http://hackshackers.com/blog/2011/08/21/viaje-al-mundo-de-la-extraccion-automatica-de-datos/hackaton3/" src="/content-images/blog/2011/08/hackaton3-300x200.jpg" >}}

**What the journalists worked on: ** The engine of [Mapa76.info][4] – still in its alpha stage – extracts names, places, and dates.  At first, the journalists “combed” documents for sentences and allegations establishing relationships between dates and special events such as sequestrations, tortures, transfers, etc., in order to visualize those events in a timeline.  **Later they thought up possible use cases:**

  * Who was with whom in a clandestine location?
  * Following one person´s story: What happened to him or her?
  * In order to write an article about a person, one can proceed by “combing” for them in all of the documents where they are mentioned;
  * Compare two life stories;
  * Compare versions of a story;
  * Comb documents in an effort to tell a document-based story;
  * Incorporate other sources, such as foreign newspapers;
  * Compare two testimonies given by the same person at different times.

{{< figure link="http://hackshackers.com/blog/2011/08/21/viaje-al-mundo-de-la-extraccion-automatica-de-datos/event\_48373981/" src="/content-images/blog/2011/08/event\_48373981-300x199.jpg" >}}

Led by [Martín Sarsale][6], the programmers worked on improving the interface for loading documents and extracting data, as well the interface for data display (timelines, maps, visualization of documents) (Ruby / jQuery).  They also worked on improving data “loading” and on converting PDFs into easy-to-use text documents.

The hackathon relied on support from the National Attorney General´s Unit for the Coordination and Tracking of Human Rights Cases (Unidad de Coordinación y Seguimiento de Causas de Derechos Humanos de la Procuración General de la Nación). Later the hackathon got in touch with the coordinating team of the Federal Network of Memorial Sites (Red Federal de Sitios de Memoria) and members of the Argentine Ministry of Education who were interested in the project.  Media coverage of the hackathon can be seen at [Página/12][7], the [Tecnopolis][8] website and [YouTube][9].

Among other participants were Joel Matías Silva, Damian Silvani, Lucas Tolchinsky, Nahuel Baglieto, Sergio Sorin, Tania Wassaf, Manuel Milla, Ezequiel Clerici, Guillermo González, Mariano Mancuso, Mariano Zapatero, Luis Guardiola, Matias Iturburu, Javier Ciancio, Gisela Cardozo, Gabriel, Javier Pájaro, Joaquín Nuñez, Rodrigo Aza, Marcos Vanetta, Felipe Lerena, Filippo Fiorini and the organizer crew of [Hacks/Hackers Buenos Aires][2], conformed by [Mariano Blejman][10] (Página/12), [Martín Sarsale][6] (Sumavisos), [Guillermo Movia][11] (Mozilla Argentina), César Miquel ([Easytech][12]) y [Mariana Berruezo][13]. Diego Accorinti made the grafic design of [Mapa76.info][4]. Post translated to english by Michael Romano.

Web <http://meetupba.hackshackers.com>

blog <http://www.hackshackers.com>

mail ba (at) hackshackers (dot) com

twitter [@HacksHackersBA][14]

 [1]: http://wp.me/pO4rB-UZ
 [2]: http://meetupba.hackshackers.com
 [3]: http://www.tecnopolis.ar
 [4]: http://mapa76.info
 [5]: http://www.junar.com
 [6]: http://www.twitter.com/runixo
 [7]: http://www.pagina12.com.ar/diario/sociedad/3-174379-2011-08-13.html
 [8]: http://tecnopolis.ar/noticiasdetecnopolis/?p=2943
 [9]: http://www.youtube.com/watch?v=0ByvJ7J2_TY
 [10]: http://www.twitter.com/blejman
 [11]: http://www.twitter.com/deimidis
 [12]: http://www.easytech.com.ar
 [13]: http://www.twitter.com/Myberru
 [14]: http://www.twitter.com/HacksHackersBA