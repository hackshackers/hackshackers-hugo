---
title: Viaje al mundo de la extracción automática de datos desde documentos
authors:
- Mariano Blejman
date: "2011-08-21"
_migration:
  id: 3533
  timestamp: 1486602223
---

[English post here!][1]

{{< figure link="http://hackshackers.com/blog/2011/08/21/viaje-al-mundo-de-la-extraccion-automatica-de-datos/img\_1971\_c/" src="/content-images/blog/2011/08/IMG\_1971\_c-300x224.jpg" >}}

**Finalmente, ¡lo hicimos!** Unas 40 personas (entre periodistas, programadores de software y militantes de organismos de Derechos Humanos de Argentina) desembarcamos el pasado 13 de agosto en el hackatón de [Hacks/Hackers Buenos Aires][2], ocurrido dentro de la megamuestra [Tecnópolis][3]. La idea fue trabajar durante todo el día sobre [Mapa76.info][4], un proyecto de software de extracción automática de datos y visualización desde documentos de texto. El software está centrado en analizar los juicios de la última Dictadura Militar argentina, ocurrida entre 1976 y 1983. Vinieron periodistas y programadores no sólo de Buenos Aires, sino también de Rosario, Córdoba y contamos con la presencia de los creadores de [Junar.com][5], una api de streaming de tablas, quienes viajaron especialmente desde Chile para participar y mostrar su tecnología.

**El problema a resolver:** Existen en estos momentos en Argentina una gran cantidad de causas judiciales vinculadas a represores de la última Dictadura Militar. Más de 200 condenados, decenas de juicios en curso, cientos de testigos que declaran cada día y posiblemente más de mil presuntos implicados en hechos de Terrorismo de Estado entre 1976-1983. La pregunta es: ¿podemos desarrollar un software que encuentre relaciones que las personas no podemos ver? Es necesario para periodistas, para la Justicia, para quienes investigan definir relaciones entre Personas, Organizaciones y Lugares para visualizar en una línea de tiempo y en un mapa.

{{< figure link="http://hackshackers.com/blog/2011/08/21/viaje-al-mundo-de-la-extraccion-automatica-de-datos/hackaton3/" src="/content-images/blog/2011/08/hackaton3-300x200.jpg" >}}

**En qué trabajaron los periodistas:** el motor de Mapa76.info &#8211;todavía en estado alpha&#8211; extrae nombres, lugares y fechas. En un primer momento, los periodistas &#8220;peinaron&#8221; documentos de sentencias y alegatos estableciendo relaciones entre fechas y acontecimientos especiales como: secuestro, tortura, traslado, etc para ver esos acontecimientos en una línea de tiempo. Luego se trabajó en pensar posibles casos de uso:

  * ¿Quién estuvo con quién en un centro clandestino?
  * Seguir la historia de una persona. ¿Que le pasó?
  * Cuando hay que escribir una nota sobre una persona, se puede partir “peinándola” en todos los documentos donde aparece mencionada.
  * Comparar dos historias de vida.
  * Comparar la historia según versiones.
  * Peinar documentos para tratar de contar una historia a partir de documentos
  * Incorporar otras fuentes como diarios extranjeros.
  * Comparar dos testimonios de una misma persona realizados en momentos diferentes.

{{< figure link="http://hackshackers.com/blog/2011/08/21/viaje-al-mundo-de-la-extraccion-automatica-de-datos/event\_48373981/" src="/content-images/blog/2011/08/event\_48373981-300x199.jpg" >}}

Al mando de [Martín Sarsale][6], los programadores trabajaron en mejorar la interfaz de carga de documentos y extracción de datos y en mejorar la interfaz de consulta de los datos (líneas de tiempo, mapas, visualización de documentos) (Ruby / jQuery) También se trabajó en mejorar la &#8220;carga&#8221; de datos y en la conversión de pdf a documentos de texto manejables.

El hackatón contó con el apoyo de la Unidad de Coordinación y Seguimiento de Causas de Derechos Humanos de la Procuración General de la Nación. Luego del hackatón nos pusimos en contacto con el equipo de coordinación de la Red Federal de Sitios de Memoria, e integrantes del Ministerio de Educación de la Nación Argentina, interesados en el proyecto. La cobertura realizada por los medios sobre el hackatón puede verse en [Página/12][7], en [la web de Tecnopolis][8] y en [YouTube][9].

Participaron, entre otros, Joel Matías Silva, Damian Silvani, Lucas Tolchinsky, Nahuel Baglieto, Sergio Sorin, Tania Wassaf, Manuel Milla, Ezequiel Clerici, Guillermo González, Mariano Mancuso, Mariano Zapatero, Luis Guardiola, Matias Iturburu, Javier Ciancio, Gisela Cardozo, Gabriel, Javier Pájaro, Joaquín Nuñez, Rodrigo Aza, Marcos Vanetta, Felipe Lerena, Filippo Fiorini y el equipo organizador de [Hacks/Hackers Buenos Aires][2], conformado por [Mariano Blejman][10] (Página/12), [Martín Sarsale][6] (Sumavisos), [Guillermo Movia][11] (Mozilla Argentina), César Miquel ([Easytech][12]) y [Mariana Berruezo][13]. Diego Accorinti realizó el diseño gráfico de [Mapa76.info][14].

Web <http://meetupba.hackshackers.com>

blog <http://www.hackshackers.com>

mail ba (at) hackshackers (dot) com

twitter [@HacksHackersBA][15]

 [1]: http://wp.me/pO4rB-Vr
 [2]: http://meetupba.hackshackers.com
 [3]: http://www.tecnopolis.ar
 [4]: http://www.mapa76.info
 [5]: http://www.junar.com
 [6]: http://www.twitter.com/runixo
 [7]: http://www.pagina12.com.ar/diario/sociedad/3-174379-2011-08-13.html
 [8]: http://tecnopolis.ar/noticiasdetecnopolis/?p=2943
 [9]: http://www.youtube.com/watch?v=0ByvJ7J2_TY
 [10]: http://www.twitter.com/blejman
 [11]: http://www.twitter.com/deimidis
 [12]: http://www.easytech.com.ar
 [13]: http://www.twitter.com/Myberru
 [14]: http://mapa76.info
 [15]: http://www.twitter.com/HacksHackersBA