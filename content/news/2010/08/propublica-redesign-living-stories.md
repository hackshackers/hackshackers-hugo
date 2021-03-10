---
title: ProPublica Redesign Involves the Readers in Complex Stories
authors:
- Scott Klein
date: "2010-08-23"
_migration:
  id: 664
  timestamp: 1486602237
categories:
- Meetups
- News
groups:
- New York
---

[![ProPublica logo][1]][2] At [ProPublica][3], we make a habit of sharing. We give our biggest stories for free to news organizations, and we hand out [recipes for some of our most complex investigations][4]. We encourage other news organizations to [steal our stories][5], and give out, free to use, [clean, reliable, analyzed data][6] that is often available [nowhere else][7]. Our mission is to have real-world impact, and we think the best path to that is not through owning an issue, but through igniting coverage of an issue everywhere. 

We also spend a lot of time trying to learn from other news organizations (and non-news organizations) about how to tell journalistic stories in most effective ways we can, and how best to take advantage of our medium.

Last year, Google did an experiment with The Washington Post and The New York Times. They tried to find a way to optimize the presentation of what are called “rolling stories” &mdash; coverage that unfolds in real time, and that comprises many sequential stories &mdash; for example, a presidential election, a trial, or a hotly debated piece of legislation. Rolling stories are often complex and hard for readers to follow over due to long timespans and many (and sometimes changing) key facts.

What came out of these experiments was a set of user interface ideas, as well as some open source code, called “[Living Stories][8].” At ProPublica, we paid close attention to Living Stories, and though ProPublica tends to shy away from the “tick tock” coverage found in many rolling stories, we realized that a lot of the key findings of the Living Stories project are perfectly applicable to the kinds of stories ProPublica does a lot &mdash; long-term investigations, made up of different size stories unfolding over months, covering many facets of a complex narrative. In fact, we realized were already doing some of the things that Living Stories tried out, and over time we’ve adopted other ideas we thought would strengthen our coverage.

One of the things advocated in the Living Stories findings &mdash; which we’ve been doing for a while at ProPublica &mdash; is maintaining a “continually updating summary” of long-running investigations, so a reader who is new to an investigation that’s been running through many stories over months can read a simple synopsis to be caught up enough to understand the importance of the latest installment. Our version of the continually updated summary &mdash; usually called the “[Story So Far][9]” &mdash; is typically written by the lead reporter of that series and edited by their editor, just like any other story. 

Living Stories experimented with a persistent timeline of stories that hung on the top of the Living Stories page, functioning as navigation but also situating the reader in time, making it easy to see what stories came before and next in the sequence of coverage.

[![][10]][11]

We added a persistent timeline to the top of all of the pages in a special package we made for our coverage of [post-Katrina police shootings in New Orleans][12]. That package originally comprised four separate stories about police-involved shooting of civilians, and grew in the year since it launched to six different unresolved &mdash; and in some cases uninvestigated &mdash; shootings. 

Our timeline includes the major events that people outside New Orleans remember watching while glued to their televisions in August 2005: the storm made landfall, the levees were breached, President Bush flew overhead, etc. To that timeline we added arrows for each of our story summaries, called “[Case Files][13],” so a reader could add the events on which we and our partners reported to their own memory of Katrina, and to keep track of everything.

Like many news sites, ProPublica collects all of the stories in a given investigation onto a single page. (Some call these “series pages.” We have a host of names for ours.) The series pages weren&#8217;t easy for new readers, who need a way to understand where to being and what stories are the most important, or for readers already familiar with the story, who want to see what’s new very quickly.

[![ProPublica series page filters][14]][15]For the redesign, we took our cue from the way Living Stories let users customize the Living Story page. Our [new series pages][15] lets readers filter among the dozens of stories in a series &mdash; they can select just the stories they haven’t read, or just the major installments, or just stories by a certain author. In the future, we could easily add filters for aspects of the story: perhaps a reader could focus on the regulatory aspects or a story, or the environmental impact, or legislative progress, etc. We also took inspiration for these series pages from [similar ones][16] on the excellent Spokane Spokesman-Review website.

As for results, it is still early days, but qualitatively we’ve been very pleased with the way our new series pages present our biggest stories, and our reporters tell us it’s gotten easier to use the pages as a way to introduce their work to sources. Our series pages are among our most popular, and perhaps unsurprisingly among our most highly ranked in search engines.

We’re grateful to Google, the Times and the Post for experimenting with this form and for being so open about sharing their results, and we look forward to using and sharing more great ideas.

Incidentally we’re planning to open source the code we wrote to power some of the interactive elements in our redesign, including a JavaScript framework we’re calling Glass, which speeds development and lets developers bind behaviors to the DOM in a nonblocking, unobtrusive way. Keep an eye out on our [Github page][17]s for the announcement.

If you’ve tried any of the Living Stories ideas on your site, let’s compare notes in the comments.

 [1]: /content-images/news/2010/08/ProPublica-logo.jpg "ProPublica-logo"
 [2]: /content-images/news/2010/08/ProPublica-logo.jpg
 [3]: http://propublica.org
 [4]: http://www.propublica.org/article/reporting-recipe-how-you-can-investigate-your-states-oversight-of-its-nurse
 [5]: http://www.propublica.org/about/steal-our-stories
 [6]: http://projects.propublica.org/recovery
 [7]: http://bailout.propublica.org/loan_mods/list
 [8]: http://livingstories.googlelabs.com/
 [9]: http://www.propublica.org/article/gas-drilling-the-story-so-far
 [10]: /content-images/news/2010/08/ProPublica-timeline-clip1.jpg "ProPublica-timeline-clip"
 [11]: http://propublica.org/nola
 [12]: http://www.propublica.org/nola/
 [13]: http://www.propublica.org/nola/case/topic/case-one
 [14]: /content-images/news/2010/08/ProPublica-series-page-filter.jpg "ProPublica-series-page-filter"
 [15]: http://www.propublica.org/series/buried-secrets-gas-drillings-environmental-threat
 [16]: http://www.spokesman.com/topics/morning-star-boys-ranch/
 [17]: http://github.com/propublica