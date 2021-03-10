---
title: How Hacks/Hackers Rosario Made Its Map of Intentional Homicides of Rosario
  City
authors:
- Ezequiel Clerici
date: "2014-04-28"
_migration:
  id: 17135
  timestamp: 1486602221
tags:
- data visualization
- Maps
- media
- opendata
groups:
- Rosario
---

[The Rosario Intentional Homicides Map 2013][1] is the first digital data journalism platform developed especially for publication in Rosario, Argentina, media. The platform and the map are the result of several months of intense work, exchange of ideas, information and building mutual trust between a team of journalists, designers and programmers from [Hacks/Hackers Rosario][2] (HHROS) and members from La Capital newspaper.

As with all firsts, there is a story behind those who were involved and Hacks/Hackers Rosario wanted to share it with all the Hacks/Hackers community.

The Rosario group launched in April 2013. Currently, it has 133 active members and has already held ​​seven meetups. Community activities have ranged from discussions about what data journalism means; workshops with D3.js data visualization, digital security seminars, social events, crash courses and proposed project presentations for future hackathons.

The idea of ​​making a map of intentional homicides arose from the concerns of the HHROS co-organizers during one of the usual rounds of project presentation. The purpose of the whole enterprise was to create a platform that would help to demonstrate, through data visualization, the increase in the number of social violence across the city: 214 intentional homicides in 2013 (the city average is 21 murders per 100,000 inhabitants; the national average is 5.5 per 100,000).

The data for the platform came from the Ministry of Justice in Santa Fe, through the police beat reporters of the newspaper [La Capital][3]. This information was used to create the dataset of points and geolocation on the map corresponding to each of the casualties. The data related to context was obtained from reading all the daily chronicles published in 2013.

The team that developed the platform was just two unpaid people: a programmer and a journalist. Among both devised its design and objectives in the short and medium term.

Platform development and design adjustments were by Pablo Cuadrado; Ezequiel Clerici normalized the dataset and fact checked information shown on the map. The newspaper La Capital, represented by Hernán Lascano (police beat editor), brought the original database and oversaw contextualization of events.

**Our Process**

Because each report and location had to be manually confirmed, we decided to limit the mapping of intentional homicides to the city of Rosario. This meant places like Villa Gobernador Gálvez, Baigorria Pérez, Ibarlucea and Funes, which are part of the Rosario Department (greater metro area), were left out. Our decision reduced the number of homicides appearing on the map from 264 for the entire department to 214 just for the city.

The purpose of this decision was to reduce the amount of standardization work on the dataset provided by La Capital, since we had a small team of people and limited time available to work on the project.

{{< figure src="https://lh6.googleusercontent.com/\_lzCIwxN\_wFIgKmZquqRZdSrS8TkXAEXXSxltWK-OVK-71g8sFkWdvbiBNLUL4Qr06R63XjuurIhJNQH1QxUmeqxHR_sRlu-BVLwNpb-OF4WCnD9OiRUEheJuACFnSxpWA" >}}

With respect to the dataset the first thing we did was remove all homicides that did not correspond to the city of Rosario. Then we searched through La Capital&#8217;s digital archive of every chronicled homicide to obtain each article link to include on the map.

{{< figure src="https://lh4.googleusercontent.com/bhnUXcN8xFcJm7m-6-af-kJCPajKmngwSdIxJ0Cphq2LndHs-VTy3NlhkDp\_Ds9ib3aUvbdjW\_iQXj\_VhaOkol2VKLXxI\_DTDkAGTxzrqAsR54QWJYaZHdxFOHBgpe4wfQ" >}}

The links to the chronicles were essential information for georeferencing every fact in the map. The stories were also useful for corroborating ages, full names, police stations, courts and addresses.

To avoid headaches, it was necessary to obtain accurate directions. The problem was that a significant number were referring to the intersection of two streets (&#8220;Ezeiza and Filiberto&#8221;, &#8220;Rueda and Pascual Roses&#8221;, etc.), recreational spaces (&#8220;Pools of Saladillo&#8221;) or parks (&#8220;Independence Park&#8221;). This made precise location impossible, so in many cases it was necessary to go to the news reports and do a quick reading looking for further details. This craftsmanship allowed accurate geolocation in most cases, and approximations otherwise.

{{< figure src="https://lh4.googleusercontent.com/6vWIHgkuiO4oAGOGsTPGtBiMtu2JjrX6ktJYFrMQ4FmSH7iTY3sXoOugoJgIF\_bidxAN5FNjLtwOCAGBe\_feeCvvQP6aW4HNRXWfe52-xldyLa2jiVkj_R8P334MfjluVQ" >}}

Despite these precautions, we had to add new columns of information to the original dataset to achieve each fact georeference smoothly. The original Excel file had 8 columns: number of homicides, date of death, the victim&#8217;s name, age, approximate address, type of weapon and motive, police station, and in some cases the competent court. To those columns were joined three new: exact address; city, state, country; and district. With this change, the problem of georeferencing was corrected and we were able to map the 214 events smoothly.

{{< figure src="https://lh3.googleusercontent.com/JmXdQlOcOAkUqbW42wNpjewNpr3jsRP4yOYW3KUjMUxmsYe7QTs9XAfuURtCeVVfO74tW88ZnofX\_N9dgQDTA7NhIWUAY4jyPcftz7d8imGTxbN8-kzQ0\_kp0BcRJHCoKw" >}}

At first, we used the free version of CartoDB to georeference the killings. It allowed work on five tables and drew polygons quickly and easily. Then &mdash; due to free version&#8217;s monthly view limits, plus the response time between multiple filters &mdash we exported our platform with its contents (police stations, districts, timeline, milestones, etc.) to D3.js and left CartoDB for Open Street Map ([Leaflet][4]) and increase the speed of response demanded by users.

**Repercussions**

The publication of the map made ​​a big impact since it allowed to put into focus a range of issues that go beyond just the high number of homicides. And this, in part, was made possible by the perspective to analyze the facts that data visualization provides journalism.

The platform and the project were submitted to the Global Editors Network Data Journalism Awards 2014 and will soon by submitted to the Fundación Nuevo Periodismo Iberoamericano (FNPI) [Gabriel Garcia Marquez journalism awards][5]. Also, as a result of this work, the team formed around Hacks/Hackers Rosario was invited to speak to the Media Party 2014 (CABA, Argentina).

This work has given way to the creation of VisPress, a startup that seeks to focus on the development of platforms and tools that work starting from visualization and data analysis.

The aim of the VisPress founders is to provide data visualization services to​ local and international media, as well as to public and private sector companies that are handling large volumes of data and are interested in giving productive use and thereby improving their decision processes and achieving higher efficiency.

 [1]: http://www.lacapital.com.ar/mapa-homicidios-rosario.html
 [2]: http://www.meetup.com/Hacks-Hackers-Rosario/
 [3]: http://www.lacapital.com.ar
 [4]: http://leafletjs.com/
 [5]: http://www.fnpi.org/premioggm/