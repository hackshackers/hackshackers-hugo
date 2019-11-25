---
title: Data And Metadata In News Gathering and Management by Hacks/Hacks NYC
authors:
- Chrys Wu
date: "2010-09-30"
_migration:
  id: 845
  timestamp: 1486602236
categories:
- Meetups
- News
groups:
- New York
---

_(A big thanks to [Daniel Bachhuber][1] for initiating notes on [TypeWithMe.com][2], with help from [Greg Linch][3] and [Chrys Wu][4]. This is version 5 of [the notes][5], lightly edited, with more context added.)_

Since time immemorial, two major knowledge management questions have bedeviled news organizations. First, when faced with a giant pile of primary source material, how does a reporter intelligently and efficiently discover the newsworthy bits? Second, how should the organization index and expose the latest news and archival material to both consumers and reporters?

To answer these questions, [Lotico the New York Semantic Web][6] and Hacks/Hackers teamed up on Sept. 30 to have speakers from ThomsonReuters, The Associated Press,  The New York Times, The Wall Street Journal and Aol News present on their work in Computer Assisted Reporting.  Turnout was tremendous with most people showing up despite the fact that the event was free.

The lineup:

&#8212; **Ken Ellis**, Proposition Leader at **Thomson Reuters;**

&#8212; **Stuart Myles**, Deputy Director of Schema Standards at **The Associated Press;**

&#8212; **Tom Torok** of  **The New York Times;**

&#8212; **Maurice &#8220;Mo&#8221; Tamman** of **The Wall Street Journal;**

&#8212; **Justin Cleary**,  Senior Product manager at **Aol  News**

**

** 

<!--more-->Moderator:  Evan Sandhaus of Lotico the New York Semantic Web, who reminded audience about 

[Semantic Web Summit][7] in Boston, November 16th and 17th.  (Confluence of technology and business topics.) Semantic Web meetup group has almost 1,500 members now, dedicated to taming large piles of data.

&#8212; http://twitter.com/greglinch/status/26021697444

**Ken Ellis, Thomson Reuters**

&#8211; Boss, Tom Tague, bailed on his talk because of a bug, had five hours prep time. Was depending on first speaker to prepare speech

&#8211; Tom was scheduled to show us how we can use Reuters [OpenCalais][8] platform. He is developing a new group in Reuters Media

&#8211; Mandate of the new group is to create new packages to be launched over the next year or two.

&#8220;Besides the content business, Reuters is planning to offer solutions to help publishers make better products, additional revenue, etc.&#8221;

{{< tweet 26022153776 >}}

**Stuart Myles, The Associated Press**

&#8211; Metadata is at the center of information management. The key is how to keep the content straight. **Goal is to constantly improve the metadata.**

&#8211; The news industry has a new standards board, and AP (Stuart) is on it.

&#8211; Information management is both a team and a process within the Associated Press.  The mission:  to &#8220;establish and maintain metadata standards for all AP and member content&#8221;

&#8211; Single platform for all content,  more precise searching

&#8211; AP uses a Windows &#8220;Teragram&#8221; tool that looks like a taxonomy tree and helps determine which terms to apply to a given piece of content

&#8211; Sister system tracks whether the rules are being applied appropriately

&#8211; Classification of metadata:

&#8211; Subjects (4,200 terms in 16 categories)

&#8211; Entities (people, companies, organizations:  70,000 people,  34,000 companies,  500 organizations

&#8211; Places (2,000 regions, countries, states, provinces)

&#8211; Metadata allows AP to &#8220;slice and dice&#8221; content into several different products. It does so better than simple search.

&#8211; http://twitter.com/HacksHackersNYC/status/26023163810

&#8211; News organizations commonly want just news about a particular location; metadata also allows them to classify content by media type.

&#8211; AP uses metadata in content search.

&#8211; Myles has worked on hNews, which allows you to put semantic data in HTML

&#8211; Q: Does Teragram support RDF input?

&#8211; Nope.

&#8211; Q: Is all of your data hand-crafted, or machine-generated?

&#8211; Company information is purchased, info on notable people is handcrafted, other is mixed.

&#8211; http://twitter.com/greglinch/status/26023876927

&#8211; Teragram allows AP to manually define the rules, and apply those rules automatically to content.

**Tom Torok, New York Times**

&#8211; Q: How many people work in the &#8220;news collection&#8221; business?

&#8212; Small number of hands are raised

&#8211; Q: How many practice &#8220;calculator-assisted reporting&#8221;? &#8220;notepad-assisted reporting&#8221;?  We don&#8217;t because these come with the job. So there really shouldn&#8217;t be any reason to have a special category for &#8220;computer-assisted reporting.&#8221;

&#8211; <http://twitter.com/greglinch/status/26025066057>

&#8211; Computer-assisted reporting was a grassroots movement, it didn&#8217;t come from management.

&#8211; When Tom got an Osborne computer, it also included an offer to buy a 10 MB external hard drive for&#8230; $10,000.

&#8211; Movement took off in 1989 when [Bill Dedman][9] won a Pulitzer Prize for exposing redlining, the systematic avoidance/denial of mortgage lending based on race: &#8220;[The Color of Money][10]&#8221;

&#8211; In 1994, an outfit called Investigative Reporters and Editors, in conjunction with the Missouri School of Journalism, started  [NICAR][11] (National Institute for Computer-Assisted Reporting).  Listserv offered quick fixes to journo-data questions; answers in 15 minutes or less.

&#8211; Tom Torok&#8217;s only formal computer training was Fortran. Everything else was on his own from manuals, message boards, etc. <http://twitter.com/greglinch/status/26025428210>

&#8211; <http://twitter.com/greglinch/status/26025534030>

&#8211; CAR reporters don&#8217;t consider themselves as such. They often have to scrape and complete data packages because the data is never presented in whole, only in parts for presentation or conveying a specific message. Also, they often have to negotiate with governments or private parties for complete data sets.

&#8211; The Times has a &#8220;stable&#8221; of data accessible only to the newsroom.

&#8212; <http://twitter.com/MacDivaONA/status/26026221799>

&#8211; **&#8220;A lot of people think CAR reporters only deal with structured data. But in reality they often have to deal with unstructured data.&#8221;**

&#8211; Example of news project: How many judges recuse themselves in Ohio before making a judgement? (<http://www.nytimes.com/2006/10/01/us/01judges.html>).  After crunching the data, The Times found that Ohio justices &#8220;routinely sat on cases after receiving campaign contributions from the parties involved or from groups that filed supporting briefs. On average, they voted in favor of contributors 70 percent of the time. Justice O’Donnell voted for his contributors 91 percent of the time, the highest rate of any justice on the court.&#8221;  It took six weeks of work in cleaning up the data by hand, mostly straightening out the contributors&#8217; names

&#8211; Torok shows us Jo Craven McGinty&#8217;s report on [hate crime in New York][12] &#8211; Very powerful analysis of a tricky topic — one that would have been difficult to report by calling people up.

&#8211; [technews.nytimes.com][13] &#8212; looks like an internal tool

&#8211; Torok demoing a tool called [fastESP][14], which allows you to search against a keyword and it will give you the entities it computationally identifies: size, companies, locations, people and keywords (with facets on the side for easy filtering of top results)

&#8211; Torok can infer Hilary Clinton&#8217;s foreign experience based on whether other heads of state show up as entities on any given country search. Indicates whether her name appears in the same documents as them.

&#8211; Among the several tools they NYT used was the [OmniPage Capture SDK for OCR][15]

&#8211; fastESP also extracts phone numbers. Program can identify the phone lines of heads of state by doing a multi-value search, first for phone numbers then keyword for the person&#8217;s name

&#8211; NYT has a private arrangement with IBM to get a service called PrivateEyes, which includes a text tree

&#8212; <http://twitter.com/Hoenikker/status/26027150665>

&#8211; Q: How tricky is the interpretation of the judge contribution data? Do you have a PhD in statistics?

&#8212; Torok: Journalism is presenting the data and allowing the reader to decide for themselves.

**Maurice &#8220;Mo&#8221; Tamman, The Wall Street Journal

** 

&#8211; Self-described 2nd generation CAR guy, introduced in the 1990&#8217;s

&#8211; Frustration with the fact that most journalists build stories off tips, or anecdotes. Sometimes this is pure rubbish, unless you have skills with data analysis.

&#8211; Example of election data. There&#8217;s a data trail with electronic voting machines, which is an advantage over the older paper voting schemes

&#8211; Tamman shows raw voting data from the Sumter County general elections in 2006, which showed a significant under-vote in one race.  His team re-created every ballot cast in the election, cleaned up data: county, ballot, precinct, voter (id number?), race (political office), candidate, party. The goal was to find where the 18,000 uncounted votes went. See whether there were trends in race, sex, age, type of voting machine.  The data was skewed to precincts that mostly older voters.  Tamman: &#8220;We did all of the responsible things and got jack shit for it&#8221;.

&#8211; So they went back to do the reporting after looking at the data. They scored each ballot (- Republicans got +1 and democrats received -1. So +6 for a straight ticket dem, minus-6 for straight ticket rep); the expectation was the straight-ticket voters would have the highest turnout.

&#8211; Result from data collection in this photo:  <http://www.flickr.com/photos/danielbachhuber/5039924079/>

&#8211; Identified a problem with how the ballots were stacked: <http://www.flickr.com/photos/danielbachhuber/5039928533/>

&#8211; Mo worked on the story while at the Sarasota Herald-Tribune:

[&#8220;Vote analysis points to bad ballot design&#8221;][16]

[&#8220;About the Herald-Tribune analysis&#8221;][17]

[&#8220;Audit to review computer code&#8221;][18]

[&#8220;Bad design unlikely to get revote&#8221;][19]

&#8211; [Mo&#8217;s presentation][20], originally delivered at the Knight Digital Media Center (PowerPoint)

&#8211; Identified incompetency in design, which was exactly the opposite of what everyone told us was going on; it wasn&#8217;t cheating, it was just pure incompetence

&#8211; Mo has been working in data journalism for about 20 years. All of his stories are built on an &#8220;empirical spine.&#8221;

&#8220;We live in a world where no one trusts journalists. **If you build an empirical spine around a story, it inoculates you to some degree that you&#8217;re not fair or accurate.&#8221;**

&#8211; He wants to do projects that people will read and take seriously

&#8220;Empirical journalism gives you that.&#8221;

&#8211; Another project looked at server logs recently installed in a local school district. What Mo was looking for:  teachers looking for porn. &#8220;And I found them.&#8221;

&#8211; Another project looked at the projected results from [bank stress tests][21]. Worst case hasn&#8217;t happened, but the baseline case has, over the last couple of years. CAR provided the understanding needed of the data to come to this conclusion.

&#8211; Feedback:

&#8212; <http://twitter.com/jonathanstray/status/26028847761>

&#8212; <http://twitter.com/jonathanstray/status/26029144152>

**Justin Cleary, Aol-** &#8220;Data and Editorial workflow on Aol News&#8221;

&#8211; Justin works on the product team at Aol News

&#8211; Compared to the other presenters, Aol has a small staff. Focused on working as efficiently and effectively as possible. Still, Aol News is the fourth largest general news site on the web, averaging 30 million unique visitors.

&#8212; <http://twitter.com/Hoenikker/status/26029453532>

&#8211; Content of Aol News is original reporting, news blogging and wire services

&#8211; Increased focus on a new type of breaking news blogging: Surge Desk story assignments originate from trending and search data and focus on delivering news coverage to users as they demand it.

&#8211; News Production Lifecycle:

 **1. Choose a Topic** &#8211; what&#8217;s happening today? (traditional news-gathering techniques), what&#8217;s trending? (Google trends, Twitter trends, other web apps; web pub and Twitter analysis driven by their Relegence tool), what are consumers looking for? what&#8217;s left over?

&#8212; **Google Trends is used by everyone and not that useful.**

&#8212; Relegence, an internal product, helps see what will be interesting, not just what has been interesting (what have people looked at, what are they looking at, what will they be looking at?)

&#8212; &#8220;The magic of journalism happens&#8221; and the story is written.

&#8212; Gives the number of stories, all the links, when they were published, and source within 6 minutes of being published

 **2. Create and Classify:** what are the top-level categories? what tags apply? what Qs does this content answer?

&#8212; Top-level categories are editorially selected

&#8212; Tags are suggested from a semantic analysis of the content, ranked by relevance. Suggested tags are opt-out

&#8212; Questions it answers: suggest questions from a subset of Aol search data; apply relevant Qs as tags

 **3. Track performance**

&#8212; Watch basic traffic metrics in real-time (page views, uniques, and internal/external referral links)

&#8212; Pay attention to what keywords your search visitors are entering on, not just what your content is ranking on

&#8211; Does It Work?

&#8212; Volume of content produced up approx 20%

&#8212; Created thousands of optimized long-tail pages

&#8212; Natural search referrals up significantly, impressed both Cleary and his manager

&#8211; Q: Why not ask the audience directly what they want to know?

&#8212; A: If we could vet 350 million responses a month (???), we&#8217;d do that. Right now we don&#8217;t have the technology to handle interactivity on that scale.

&#8212; <http://twitter.com/HacksHackersNYC/status/26030528534>

&#8211; Q: Do you ever cover the statistically &#8220;unpopular&#8221; stories?

&#8212; We look for the stories already being covered in three ways, and what&#8217;s left over (not being covered) is the opportunity for original reporting.

&#8212; <http://twitter.com/jonathanstray/status/26030672447>

**Questions for the end:**

&#8211; AP: How much has the Associated Press invested in semantic technologies (man hours, etc.), and what&#8217;s the return on investment?

&#8211; AP: Why microformat over RDFa for hNews?

&#8211; AP: How has hNews been adopted? What number of companies are using it, and how is it being used?

&#8211; AP: What are the applications of the news registry and how is it being used?

**&#8211;** Aol: Could we see a demo of the Surge Desk?

&#8211; Aol: Do you have any machine learning in the Surge Desk? If so, what is it doing?

&#8212; Basic systems that return entities is a dynamic system. Crawling 30,000 sources and identifies new entities within 6 minutes. Want to expand machine learning to pay attention to how editors are opting in and out of tags.

&#8212; Relegence, a company Aol acquired several years ago, provides the machine-learning technology and Aol has worked to incorporate it in-house

**Q: About open government data &#8211; how useful is it?**

Torok gives the sample of British parliament members&#8217; expenses reporting

[The (London) Telegraph MP expenses][22]

[Guardian MP expenses][23] //broken link//

&#8211; Torok: The Telegraph owned that story. The value of the data lies in the interpretation and the context in it. Guardian offered up data for people to poke around it.

**Q: What about RDFa?**

&#8211; Myles: We are looking at RDFa in the IPTC standards body, and how it might be incorporated. Call coming up next week.

@todo Better research the relationship between hNews (microformats) and RDFa

**Q: What tools do you wish you had every day that you didn&#8217;t?**

&#8211; Tom Torok, New York Times:  [Clear Forest][24], the paid version of OpenCalais, is phenomenal. It understands questions like &#8220;who builds bombs&#8221; and &#8220;who gave money to who,&#8221; and presents data. The semantic connections are phenomenal, so is the price.

&#8211; Mo Tamman, Wall Street Journal: 10 terabytes

&#8211; Justin Cleary, Aol: A better tool to combine learning systems with strong editorial judgment

&#8211; Stuart Myles, AP: Algorithms to find good, meaningful original content. We&#8217;ve been working on this for five years and we still don&#8217;t have this.

&#8211; Ken Ellis, Reuters: algorithms don&#8217;t help that much with news, yet

<http://twitter.com/kraykray/status/26031117344>

 [1]: http://www.danielbachhuber.com/
 [2]: http://typewith.me/
 [3]: http://www.greglinch.com/
 [4]: http://twitter.com/MacDivaONA
 [5]: http://typewith.me/CuXWjkv9yl
 [6]: http://www.meetup.com/semweb-25
 [7]: http://www.mediabistro.com/semanticwebsummit/
 [8]: http:// "http://www.opencalais.com/"
 [9]: http://powerreporting.com/
 [10]: http://powerreporting.com/color/
 [11]: http://data.nicar.org/
 [12]: http://cwu.me/hatecrimeinNYC
 [13]: http://technews.nytimes.com
 [14]: http://www.microsoft.com/enterprisesearch/en/us/fast-customer.aspx
 [15]: http://j.mp/aokWoj
 [16]: http://j.mp/93z3Hj
 [17]: http://j.mp/dd8Y8O
 [18]: http://j.mp/dnC6yW
 [19]: http://j.mp/9Ego3p
 [20]: http://j.mp/b0W2JV
 [21]: http://j.mp/d6ZWr8
 [22]: http://j.mp/caIGy8
 [23]: http://www.guardian.co.uk/politics/mps
 [24]: http://www.clearforest.com