---
title: "Publishing a Package to Bower"
collection: articles
template: post.hbt
permalink: "http://anthonyticknor.com/posts/2015/publishing-a-package-to-bower/"
og_type: "article"
date: 2015-05-17 12:21
image: "/assets/images/_articles/2015/bower.png"
thumbnail: "/assets/images/_articles/2015/bower_thumb.png"
excerpt: "Last week, I published my first package to bower. I expected it to be difficult, but it was easier than expected."
---

I've been using [Bower](http://bower.io) for a while now. And while it's been great, I haven't taken the time to setup anything I've written and shared with the world to be distributed through Bower. But last week, I decided to take my most popular micro library - [quarantine.css](https://github.com/apticknor/quarantine.css) - and configure it up so others could pull it from GitHub via Bower. I expected it to be difficult but it was easier than I expected.

My first step had nothing to do with Bower at all. I added a proper license to the repo and anyone wanting to use it now had the opportunity to understand the licensing terms that came along. I chose the [MIT license](http://en.wikipedia.org/wiki/MIT_License).

Next I setup a `bower.json` file so that when registering the package, Bower would understand all the details of Quarantine. Let's break it down.

```javascript
{
    "name": "quarantine-css",
    "version": "0.2.3",
    "keywords": [
        "css",
        "scss",
        "sass",
        "user content",
        "content",
        "usercontent",
        "quarantine",
        "wysiwyg",
        "contextual"
    ],
    "main": [
        "quarantine.scss",
        "quarantine.css"
    ],
    "author": "Anthony Ticknor",
    "homepage": "https://github.com/apticknor/quarantine.css",
    "description": "A customizable micro library that provides predictability in your styles when user-authored HTML is added to a page.",
    "license": "MIT",
    "ignore": [
        ".gitignore",
        "demo/"
    ]
}
```

1. Name: The name of the package
1. Version: The semantic version number (and release number from GitHub)
1. Keywords: The words that will help users find the package when searching
1. Main: The files primary file(s) for the package
1. Author: The author name
1. Homepage: The page with all the details about the package
1. Description: A short description of what the package does.
1. License: The license name
1. Ignore: Files from the package github repo that bower can ignore when downloading the package

After filling in the details of the `bower.json` file, I tagged a release of Quarantine on GitHub to match the version I specified. 

And lastly, I opened up terminal and entered:

```
bower register <my-package-name> <git-endpoint>
```

I followed the prompts and within moments Quarantine was available to install via Bower.

All in all it was pretty straight forward. If you've got code you own that can share with others, I highly recommend you share it on GitHub and make it available by Bower.

### Notes

<div class="attribution">
More documentation can be found at [http://bower.io/docs/creating-packages/](http://bower.io/docs/creating-packages/)
</div>