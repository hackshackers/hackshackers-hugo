---
title: Cómo se hizo el hackatón sobre D3.js en Buenos Aires
authors:
- Mariano Blejman
date: "2013-04-24"
_migration:
  id: 16895
  timestamp: 1486602221
---

{{< figure src="https://secure.meetupstatic.com/photos/event/5/d/7/2/event_226703922.jpeg" >}}

Temas de lo más variados aparecieron en escena: la represión sobre el sector financiero durante la última dictadura militar, visualizaciones sobre destinos turísticos, análisis visual de las votaciones nominales, líneas de tiempo comparativas sobre funcionarios y un instructivo sobre resultados deportivos, fueron algunas de las implementaciones que se desarrollaron en el Hackatón D3.js, organizado por [**Hacks/Hackers Buenos Aires**][1], con la presencia de [Manuel Aristarán, Knight Fellow en La Nación][2] y [Knight Mozilla Open News][3], [International Center For Journalists][4], [NXTP Labs][5], [Eter][6], [Vurbia,][7] [Fundación Desarrollar,][8] [AreaTres][9] entre otros. En los próximos días se anunciará una microgrant de mil dólares para terminar uno de los proyectos.

{{< figure src="http://photos1.meetupstatic.com/photos/event/a/d/9/a/event_226664442.jpeg" >}}

Cerca de 70 personas pasaron durante diez horas el sábado por el hackatón de [D3.js][10] en [Hacks/Hackers Buenos Aires][1] y el encuentro sirvió también para estrenar una nueva versión del [HackDash][11], una plataforma para trackear ideas en los hackatones. La plataforma de ideas puede [verse funcionando aquí][12].

{{< figure src="http://photos3.meetupstatic.com/photos/event/8/5/3/6/global_227374102.jpeg" >}}

Las [mejores visualizaciones de datos de The New York Times][13] han sido realizadas en D3.js (data driven documents), una librería de JavaScript creada por Mike Bostock que está cambiando la forma en que se narran historias interactivas, y que tiene cada vez más interés en el mundo de los medios. Este hackatón tenía varios objetivos, uno de ellos es acercar el uso de D3.js a comunicadores y desarrolladores, resolver problemas de visualización de datos preexistentes, detectar e incentivar el uso de la librería y terminar la jornada con media decena de aplicaciones para que rápidamente lleguen a los medios. En los próximos días, se anunciará una **microgrant de 5000 pesos** para mejorar, terminar y documentar una de las aplicaciones.

**Proyectos realizados**

**[1. La trama financiera de la dictadura][14]**

{{< figure link="http://pinlatam.org/d3/d31.png" src="http://pinlatam.org/d3/d31.png" >}}

La Comisión Nacional de Valores elaboró un informe que revela como el Terrorismo de Estado también impactó en la configuración de la City financiera. La CNV nos facilita un dataset con los secuestros y relaciones entre los grupos de tareas, empresarios, operadores de bolsa y financistas durante la dictadura militar. **¿Cómo lo hicimos?** El equipo de investigación de la CNV construyó un dataset que identifica a todos los empresarios y agentes de bolsa que fueron secuestrados por los grupos de tareas para quitarles empresas y bienes. Con el equipo de HHBA entendimos que la mejor forma de visualizar esta información era graficar el esfuerzo represivo de la dictadura para apropiarse de empresas y, para ello, nos valimos del [Diagrama Sankey][15] que permite mostrar el flujo que va de un punto a otro. Así, nuestro punto de partida era la estructura represiva (fuerza interviniente) que utilizó un recurso determinado (represores) para secuestrar gerentes de empresas y agentes de bolsa (empresarios) que eran titulares de compañías que operaban en la city porteña (empresas).

Tras las primeras pruebas, vimos que el diagrama solo funciona si se le asigna un valor al flujo, representado por el tamaño de la conexión con el nodo siguiente. Tuvimos que reconstruir la tabla de datos de la CNV porque este tipo de diagrama (del que no encontramos un generador que nos facilite la tarea) está pensado para representar flujos a partir de un valor. O sea, tuvimos que repetir las conexiones &#8220;n&#8221; veces para que el digrama identifique las cantidad de relaciones, es decir, construimos el flujo como dato. Por ejemplo, algunos secuestradores actuaban en grupo, o también, en los listados había empresarios que eran dueños de más de una empresa.

Normalizada la información, descubrimos que la tabla no puede tener campos vacíos porque generan referencias circulares (se apuntan a sí mismos) que inutilizan el diagrama. Una vez &#8220;curada&#8221; la tabla, todo fue diferente y pudimos visualizar esta primera demo que permite ver la envergadura de la represión dirigida específicamente a los grupos financieros. Entre las mejoras que nos proponemos realizar al diagrama, están la posibilidad de aislar una conexión (haciendo un zoom o resaltarla para diferenciarla del resto) y mejorar el tooltip que informa el detalle de la conexión.

[Prototipo][16]  [Dataset][17]

 **Team: Sergio Sorín, Ramiro Calero, Agustín Schelstraete, Diego Bechi, Luciana, Silvina Frederic.**

[2. Votaciones nominales][18]

{{< figure src="http://pinlatam.org/d3/d33.png" >}}

La aplicación muestra las votaciones nominales de cada diputado en la legislatura 2008-2009

[Prototipo][19]

Team: Andy Tow, Gonzalo Bellver, Martín Szyszlican, Luciano Amor, Yamila García, Olivia Sohr, Sonia Jalfin, Mariela Duarte, Amel Rame, Thalis Kalfigkopoulos, Teresa Alberto, Agustín Tealdo y otros héroes anónimos.

3. [Línea de tiempo de funcionarios argentinos

][20] 

{{< figure src="http://pinlatam.org/d3/d32.png" >}}

La idea fue visualizar en una linea de tiempo interactiva, la mayor cantidad de funcionarios públicos posibles desde los 70&#8217;s en adelante (para empezar) Esto permitiría, en principio, ver la carrera política de cada político, que cargos tuvo, en que gobiernos y bajo que otros funcionarios. Luego podrá agregarse datos de las elecciones, de patrimonio, etc. El punto de partida para la Linea de Tiempo de Funcionarios Argentinos, era un boceto hecho previo a las primarias de 2011. La base de datos, tambien de esa epoca, contenia unos 500 registros, todos ingresados de forma manual con información recolectada de la red, conteniendo principalmente el nombre, el cargo, y las fechas de inicio y fin del mismo.

Tomando el boceto inicial como objetivo a llegar, primero se buscaron ejemplos preexistentes de D3.js similares en forma y funcionamiento. Se selecciono una librería, que parecía la adecuada, pero luego de varias horas se decidió descartarla por otra que estaba más cerca. No obstante ese proceso sirvió para empezar a conocer el funcionamiento de D3. En paralelo, otros integrantes del grupo trabajaron en agrandar la base de datos, agregarle datos, rectificar algunos, y pensar futuros ajustes a la base y a la forma de adiquicision de datos.  La hackaton de d3, y el entusiasta equipo de Cargografias, logro resucitar un proyecto que dormia en un jpg, con la esperanza de que sea util para el votante de las proximas elecciones

Team: Andres Snitcofsky, Pablo H. Paladino&#8221;, alejandro baranek, Guillermo Movia, John Diddle, Pablo Javier Etcheverry

[Prototipo][21][  Codigo][22] [Dataset][23]

[4. Resultados Deportivos

][24] Una suma de visualizaciones de resultados deportivos utilizando d3js y un tutorial explicando cómo se hizo. (Próximamente on line)

5. [Turismo

][25] Cruzar datos de turismo con destinos turísticos: de alguna manera buscar unir con google analytics y blogs para visualizar tendencias web de turismo con tendencias de viajes. (Próximamente on line)

El encuentro fue auspiciado por [Knight Mozilla Open News][3], [International Center For Journalists][4], [NXTP Labs][5], [Eter][6], [Vurbia,][7] [Fundación Desarrollar][8] y [AreaTres][9].

 [1]: http://meetupba.hackshackers.com
 [2]: http://www.mozillaopennews.org/fellowships/2013meet.html#manuel
 [3]: http://mozillaopennews.org
 [4]: http://www.icfj.org
 [5]: http://nxtplabs.com
 [6]: http://www.eter.org.ar
 [7]: http://vurbia.com
 [8]: http://www.desarrollar.org.ar
 [9]: http://areatresworkplace.com/
 [10]: http://d3js.org
 [11]: http://hackdash.org
 [12]: http://d3viz.hackdash.org
 [13]: http://bost.ocks.org/mike/
 [14]: http://d3viz.hackdash.org/p/51708a3407602f0940001b2c
 [15]: http://bost.ocks.org/mike/sankey/
 [16]: http://cnv.hhba.info/
 [17]: http://cnv.hhba.info/js/dataset.js
 [18]: http://d3viz.hackdash.org/p/5170c9c735248dcd65000599
 [19]: http://andytow.com/scripts/disciplina/
 [20]: http://d3viz.hackdash.org/p/5171c538da02dc1873001b4e
 [21]: http://test.soviet.com.ar/cargo/
 [22]: https://github.com/hhba/cargografias/
 [23]: https://www.google.com/fusiontables/DataSource?docid=1u3Q0PPtatQbnLBgV9liDNgCcHJk7Uy6kD7ULEYw#rows:id=1
 [24]: http://d3viz.hackdash.org/p/51729980da02dc1873002e86
 [25]: http://d3viz.hackdash.org/p/517089cb07602f0940001a0c