---
title: Edit a group page
description: Here's how to add or update your group on this site.
weight: 2
---

Thank you for contributing to the Hacks/Hackers website! If you are adding or updating information for your group, you have come to the right place. Please contact Hacks/Hackers with any questions.

# Group Directory

The map on our homepage uses YAML files that contain the group's name, location, organizers, and URL. If you are changing any of these things, find your file in the [/data/groups/ folder][3].

Here is an [annotated example][4] of what the file should look like. You can copy and paste from this example file into your group's YAML file.

To submit the changes, file a Pull Request:

1. Create and sign in to a Github account
2. Click on the pencil icon on the file, which prompts "Fork this project and edit this file"
3. Make your changes
4. Click "Propose Changes"
5. On the next page, click "Create Pull Request"

This will send it to the Hacks/Hackers team for approval.

If you're creating a new group, you will need to create a new YAML file. In the [/data/groups/ folder][3], click Add File > Create New File, and enter all the information in the example above. Click Commit New File at the bottom to send your page to the team for approval.

# Group Pages

If your group is hosted on a site like Facebook or Meetup, the YAML file should include a link to that site. To update your group's URL, see the section above.

A lot of groups are hosted on individual pages on this website. These are separate from the YAML files and are located in the [/groups/ folder](https://github.com/hackshackers/hackshackers-hugo/tree/master/content/groups). To update your group's landing page, please find the correct file in that folder.

Here is an [annotated example][5] of what the page should look like.

You can make changes to it by filing a Pull Request. See above for instructions.

To add a new group to the website, create a new Markdown file, using the [Example Group][5] as a template. Submit this page as a Pull Request, which will send it to the team for approval.

# Images

To embed an image from somewhere else on the web, copy and paste this code into your page, without quotes:

`![Alternative text describing the image here](https://example.com/url-of-your-image-here)`

To upload your own image, click Upload a New File in the [group-images folder](https://github.com/hackshackers/hackshackers-hugo/tree/master/content/content-images/group-images). Then copy the link to your file and use it in the code above.

When you're done, you'll need to create a Pull Request for your changes to go live. See above for how to file a pull request.

[1]: /hack-this-site/edit-a-page/
[2]: http://www.yaml.org/start.html
[3]: https://github.com/hackshackers/hackshackers-hugo/tree/master/content/data/groups
[4]: https://github.com/hackshackers/hackshackers-hugo/blob/master/content/data/groups/example-group.yml
[5]: https://github.com/hackshackers/hackshackers-hugo/blob/master/content/groups/example-group.md
