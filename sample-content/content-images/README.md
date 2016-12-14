## Content images

Use this directory for any images that you insert in the content of a page or blog post.

### Input

For example, you could add a Markdown file at `content/blog/2016/donuts.md` and an image at `content/content-images/blog/2016/chocolate.jpg`. Then you'd insert the image in your Markdown content like this:

```
![A chocolate donut](/content-images/blog/2016/chocolate.jpg)
```

### Output

This would generate a blog post at `http://hackshackers.com/blog/2016/donuts/` with this HTML:

```
<img alt="A chocolate donut" src="/content-images/blog/2016/chocolate.jpg" />
```
