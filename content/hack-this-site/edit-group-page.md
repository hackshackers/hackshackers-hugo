---
title: Edit group data
description: Here's how to add or update the information about your group that appears on this site.
weight: 2
---

So you're organizing a local Hacks/Hackers group. Thank you! Here's how to add or update the information about your group that appears on this site.

All we need to do to launch a group is to create two files.

**Note: These instructions refer to adding/editing group info. To edit a blog post or another non-group page, check out [this doc][1].**

## The Metadata File

In the `/data/groups` directory, each group has a [YAML][2] file with metadata
 that we use to generate all of the group's properties all around the site.
 This includes a pin on the map, information as to when the group was founded,
 and who currently organizes it.

 To see an example, go the [Groups][3] page, and notice that while all sites
 have a pin on the map, some cities additionally have organizer and founder
 information.

 Here's a [full annotated example][4] of what the file looks like.

 If you'd like to add a group, the first step is to create a YML file with
 your city's name, just like the example mentioned above.

You can do everything needed to launch a group with GitHub's text editor.
Alternatively, you can also edit text files onyour machine. Finally,
follow the pull request using the process described [here][1].

## The Group Content Page

There are two ways to host a group site on Hacks Hackers.

Content can be hosted externally, on a site such as MeetUp.com. If this is the
case, specify an `externalUrl` parameter with a link to your site. This means
that when someone clicks on your city's Hacks/Hackers page, the user will be
directed to the external site.

For example: 
```
externalUrl: 'https://www.meetup.com/HacksHackersBA/'
```


Similarly, you can also host your site on the HacksHackers website. To follow
this route, we'll need to create a markdown file with our city's name inside
of the file path `content/groups/your-city-name.md`.

You can code your site using standard markdown information, as well as several
shortcuts offered by Hugo: https://gohugo.io/content-management/shortcodes/

If you go this route, your group's metadata file mentioned above will need to
contain a groupPage parameter that matches the name of the group page file.

It might look something like this:
```
groupPage: buenos-aires
```

As mentioned above, when you're all done with your edits, you'll
want to  create a [pull request][1] for your page to go live.

Updating your group's information is as simple as merging in the pull request.

[1]: /hack-this-site/edit-a-page/
[2]: http://www.yaml.org/start.html
[3]: /groups
[4]: https://github.com/hackshackers/hackshackers-hugo/blob/master/content/data/groups/example-group.yml
[5]: https://github.com/hackshackers/hackshackers-hugo/blob/master/content/groups/example-group.md
