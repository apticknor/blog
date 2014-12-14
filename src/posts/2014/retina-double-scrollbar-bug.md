---
title: "Retina Double Scrollbar Bug"
collection: articles
date: 2014-03-24
image: "/images/desk.jpg"
template: post.hbt
---

So today at work I bumped up against a particularly nasty bug. No it’s not a problem with double float margins in legacy browsers. It’s a problem on a very modern stack that appears to be in happening only in Chrome.

Here’s what I’m seeing.

[![chrome displaying a double vertical scrollbar](/images/double-scrollbar.png)](/images/double-scrollbar.png)

Notice the double vertical scrollbar.

After a significant amount of research I noticed a few things.

- It’s only happening in Chrome (version 33)
- It’s still happening in Canary at this time
- It’s only happening on OS X (Mavericks)
- It’s only happening on retina
- It’s only happening when there is enough content to scroll
- It’s only happening when `overflow-y` is set to scroll on `<body>` and fixed positioning is set with a negative `z-index`
- It’s only happening when my system preferences have "show scroll bars" set to "always"

That’s quite a mouthful. So anyways, if you’ve got a Macbook with Retina with the proper user settings and you’re using Chrome, [check out this demo](http://anthonyticknor.com/_demos/double-scrollbar/)

The short term solution for this bug is to simply avoid the negative `z-index` or `overflow-y` all together.

I’ve reported the issue and would appreciate any other comments (or a star) at https://code.google.com/p/chromium/issues/detail?id=355709

----

## Update

AS of Chrome 37 this bug is no longer reproducible.