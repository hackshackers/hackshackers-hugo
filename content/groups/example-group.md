---
title: Example Group
# see /content/data/groups/example-group.yml for metadata source
---

*This page is an example of the "scratch pad" that any H/H group can have.*

*We commend putting an image up front that represents your group. Here is an example image for Buenos Aires.*
![Buenos Aires as seen cuarentena during the COVID-19 Pandemic ](https://fotos.perfil.com/2020/05/11/trim/1280/720/cuarentena-954460.jpg)  

# Upcoming Events
| **Date**  | **Time** | **Location** |  
|------|---------| ---------|
| August 8, 2022  | 19 hs         | La Nación -  Av. del Libertador 101, Vicente López       |
| August 21, 2022 | 19 hs |  Clarin - Segurola 2059     |   
|  September 1, 2022       | 19 hs    |  Cronica - Juan de Garay 140 |  

Add a few paragraphs explaining about your group here, and any other Content
you feel is relevant.

It's also worth nothing that users can embed many types of multimedia,
including images, tweets, youtube videos, and instagram tweets.

# Embedding Multimedia

Images can be added using the following markdown code:
`[Buenos Aires as seen during quarantine in the  the COVID-19 Pandemic ](https://fotos.perfil.com/2020/05/11/trim/1280/720/cuarentena-954460.jpg)`

Hugo provides things called shortcodes to make embedding easy.

To embed an Instagram post, first find the URL of the post you'd like to embed.
It will look something like https://www.instagram.com/p/BnEY-fOnnPO/

Then, take the hex code in the last part of the URL (In this case, BnEY-fOnnPO),
and add a code like this -- except, add the curley brackets without spaces -
`{{` and `}}`:

`{ {< instagram BnEY-fOnnPO >} }`


Youtube Videos can also be embedded by using a similar format -- just like above,
add the curley brackets without spaces in between:

`{ {< youtube NCeKSpqvTxE >} }`

Same with Tweets - similarly, add the curley brackets without spaces in between both:

`{ {< twitter 1285431839537213441 >} }`

Finally, users can close with a table that includes past highlights:

# Past Highlights
| **Date**  | **Time** | **Location** |  
|------|---------| ---------|
| August 8, 2022  | 19 hs         | La Nación -  Av. del Libertador 101, Vicente López       |
| August 21, 2022 | 19 hs |  Clarin - Segurola 2059     |   
|  September 1, 2022       | 19 hs    |  Cronica - Juan de Garay 140 |  
