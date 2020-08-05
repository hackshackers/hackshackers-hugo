---
title: Edit group data
description: Here's how to add or update the information about your group that appears on this site.
weight: 2
---

So you're organzing a local Hacks/Hackers group. Thank you! Here's how to add or update the information about your group that appears on this site.

**Note: These instructions refer to adding/editing group info. To edit a blog post or aother non-group page, check out [this doc][1].**

## The basics

In the `/data/groups` directory, each group has a [YAML][2] file with metadata that we use to generate a map pin and a listing on the [Groups][3] page. Here's a [full annotated example][4].

To add or edit your group's basic data, create or update a `my-city.yml` file using GitHub's text editor (or edit locally on your machine) and make a pull request using the process described [here][1].

## Adding a group page

By default, your group will link to whatever you specify as the `externalUrl` in the YAML file. But you can also make a group page on hackshackers.com for news, photos, videos, etc.

Simply create a file similar to [`content/groups/example-group.md`][5] and make sure that your group's YAML file includes the `groupPage` element. Then create a [pull request][1] for your page to go live.

The group page works like a scratch pad and you can update it at any time with a pull request.

[1]: /hack-this-site/edit-a-page/
[2]: http://www.yaml.org/start.html
[3]: /groups
[4]: https://github.com/hackshackers/hackshackers-hugo-content/blob/master/data/groups/example-group.yml
[5]: https://github.com/hackshackers/hackshackers-hugo-content/blob/master/groups/example-group.md
