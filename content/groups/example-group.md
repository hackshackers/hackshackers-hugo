---
title: Example Group
# see /content/data/groups/example-group.yml for metadata source
---

*This page is an example of the "scratch pad" that any H/H group can have.*

*We commend putting an image up front that represents your group. Here is an example image for Buenos Aires.*
![The City of Buenos Aires](https://live.staticflickr.com/901/27165035028_c4c78e6c14_b.jpg)  

# Upcoming Events
| **Date**  | **Time** | **Location** |  
|------|---------| ---------|
| August 8, 2022  | 19 hs         | La Nación -  Av. del Libertador 101, Vicente López       |
| August 21, 2022 | 19 hs |  Clarin - Segurola 2059     |   
|  September 1, 2022       | 19 hs    |  Cronica - Juan de Garay 140 |  

Add a few paragraphs explaining about your group here, and any other Content
you feel is relevant.


Finally, users can close with a table that includes past highlights:

# Past Highlights
| **Date**  | **Highlight** |  
|------|---------|  
| August 8, 2022  | <a href ="">  NICAR 2020, see photos in Instagram  </a>  |
| August 21, 2022 |   <a href =""> Tim Smith awarded Pulitzer Prize  </a>   |   
|  September 1, 2022   |  <a href =""> Media Party 2019 set new attendance record </a>   |  

# --- End of page ----
# References
Below, you can find additional information included for reference on how to embed
multimedia into your page

Users can embed many types of multimedia, including images, tweets, youtube videos, and instagram tweets.

Images can be added from any external source using the following markdown code:
`![The center of Buenos Aires](https://upload.wikimedia.org/wikipedia/commons/a/aa/Buenos_Aires_Capital_Agentina_Jpg_%28162064617%29.jpeg)  `

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
