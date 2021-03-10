---
title: News+Gaming Hackathon in NYC. Using a Gamification API
authors:
- Jennifer 8. Lee
date: "2011-04-23"
_migration:
  id: 2694
  timestamp: 1486602234
tags:
- Gaming
categories:
- News
---

{{< figure link="/content-images/news/2011/04/BDI7606.jpg" src="/content-images/news/2011/04/BDI7606-1024x709.jpg" >}}

At the [Hacks/Hackers NYC News+Gaming Hackathon][1], [BigDoor][2] introduced the basic concepts of gaming economy and their [gamification Application Programming Interface (API)][3].

[Brian Immel][4] and [Roy Schmidt][5], of BigDoor, distilled the essential elements of a game economy. For those who are new to gaming concepts,  it helps to think of frequent flier programs as one of the original large scale game economies.

Brian and Roy defined some of the key elements of a gaming economy, which are address in some elements of their API. Some of those key elements are

  * **Currency —** Currency is a counter of anything that you would want to measure. There a generally two types of currency: user behavior metrics you want to reward  (the number of articles shared on Twitter) and the user-facing representation of that progress (coins, points). Currency can range from the concrete (miles flown) to the abstract (influence), as long as it is something that can be measured. Examples in real life could include the miles flown, frequent flier miles earned, number of times someone shares an article, how many people click on that article, how many times a user returns to a Web site, the number of articles the user reads. Ultimately all the rewards in a game are based on increasing the number of things that matter to you. In the world of gaming, the concept of Experience Points, or XP, is very common as a meta-currency to track overall indicator of progress. If you care you about measuring something, you should make it into a currency.
  * **User Action** — An event that you want to track. This could be sharing, taking a flight, Tweeting,  checking-in, liking, submitting. Currencies often measure user actions or the rewards for user actions.
  * **Transactions —** Transactions are the accounting mechanisms that debit or credit currencies and are often triggered by user actions.  For example, taking a cross-country flight could trigger a _transaction_ of 2,500 frequent flier miles added to your account. Or, redeeming a flight to Europe would trigger a _transaction_ of subtracting 50,000 miles from your frequent flier account. One transaction could affect many different currencies. A transaction has two parts: the currency that is affected and the amount to credit or debit.
  * **Goods —** A good is a object that can be owned, bought, earned or gifted by a user. In the frequent flier world, the redeemed flights, gift certificates, hotel life are real life goods that can be earned. In Farmville, the virtual sheep or seeds are goods that can be bought. Goods can be something that users redeem their virtual currencies for, or they can be given as bonuses for free. One example of a good in the age of The New York Times metered wall: increased quotas of articles that can be earned for various actions.
  * **Level** — A level is defined achievement status based on passing a currency threshold. In the frequent flier world, that could be silver, gold or platinum status.
  * **Awards —** Awards are achievements status _not_ tied to currency. They are typically based on one-time events, and often defined on the game designer discretions.

The BigDoor API

There has been a lot of energy around news and journalism. Some follow up links:

  * Ian Bogost, a Georgia Tech professor who does research on gaming, runs a [Newsgames blog][6] and has received a grant from the Knight News Challenge to do Cartoonist, a project to create an authoring tool .
  * [Newsgaming][7], a company in Uruguay, sees games as a way to get people to engage with news in a new way.
  * [Hearsay.it][8] is a mobile-based news consumption application that awards sharing of articles and curating.

If you want more information, you can read [Rules of P][9][lay: Game Design Fundmentals][9], by Katie Salen and Eric Zimmerman.

 [1]: http://meetupnyc.hackshackers.com/events/16827758/?eventId=16827758&action=detail
 [2]: http://bigdoor.com
 [3]: http://www.bigdoor.com/solutions/functionality-and-technology/
 [4]: http://brianimmel.com
 [5]: http://samuroi.com
 [6]: http://newsgames.gatech.edu/blog/
 [7]: http://www.newsgaming.com/
 [8]: http://hearsay.it
 [9]: http://www.amazon.com/Rules-Play-Game-Design-Fundamentals/dp/0262240459