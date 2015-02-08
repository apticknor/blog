---
title: "Things No One Tells You About Print Stylesheets"
collection: articles
template: post.hbt
permalink: "http://anthonyticknor.com/posts/2015/things-no-one-tells-you-about-print-stylesheets/"
og_type: "article"
date: 2015-01-28 20:41
image: "/assets/images/_articles/2015/print-styles.jpg"
thumbnail: "/assets/images/_articles/2015/print-styles_thumb.jpg"
excerpt: "As a front-end developer I'm often times required to create print styles. And over the years, I've learn some things that no one told me in advance I'd like to share with you."
---

As a front-end developer I've often been asked to create print stylesheets. And over the years I'm proud of the support I've given to print, as it's another method for users to access content. In my experience, print styles are easy to define in the code, but the results are often hard to explain to clients who don't have their expectations set properly. Here are some things I wish someone had told before I dove headfirst into print styles.

## Web fonts don't print in every browser

The web fonts you license and embed in a website do not print from all operating systems and browsers. In fact, some purposefully block the printing of these fonts under the assumption that you've only licensed fonts for web use and not print use. Additionally, many web fonts are optimized for screens and their print quality is suboptimal.

So how do you get around this? Pick a standard serif or sans-serif stack of non-embedded fonts that can be counted on to print reliably. Or at the very least, make sure you have a fallback for your embedded web font.

## Background images don't print by default

Most browsers and operating systems will not print background images and colors by default. They require the user to opt-in through settings to print background images and colors. This option can be overridden in Safari and Chrome by including `-webkit-print-color-adjust: exact;` in your code. However you cannot reliably assume that all users will receive the background images and colors in their printed copies. 

A better approach is to ensure there is no critical content contained in background-images and that text is high contrast enough that background-colors aren't required to make it legible. 

## Printers don't have white ink

Another important tidbit to remember is that printers don't have white ink. Let me say that one more time to help drive the point home. Printers don't have white ink.

Many modern sites have large hero images with white text laid over the top. Clients expect these images to print this way. But from the printers point of view, this isn't possible. A printer would need to print the image and then the white text over the top (requiring white ink and a second pass). Note this is only a problem with live text. Any image format such as as jpg that includes text as part of it will be translated by the printer properly.

A better approach is to not position the text over the image in the first place and instead include it as a caption below the image. Trust me when I say if you don't set this expectation up front, your client will be expecting a beautiful image with text over the top and things are going to get awkward.

## The types and capabilities of printers are diverse

From color fidelity & accuracy, to pixel density, to paper size & quality, and even ink levels, there's no good way to know what type of environment your content and styles are going to be printed in. There's not even a way to detect these unknowns. You simply have to live with them.

Because of this, your best bet is always worry about the content first, then keep print styles simple and high contrast. 

## Actually print the pages when testing

Lastly, always actually print the pages to various printers using different paper sizes from a multitude of browsers and operating systems. While print preview gives you an approximation of what you're going to get, it's often different from what will actually print. In many ways, it's like testing on an actual mobile device vs using a simulator.

Getting print stylesheets right doesn't have to be hard if you take the time to set expectations up front, and focus on delivering the content in an easy to read format.

### Notes

<div class="attribution">
['Printer' photograph by Daniel Foster](https://www.flickr.com/photos/danielfoster/5857102223/) and licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 2.0 Generic](https://creativecommons.org/licenses/by-nc-sa/2.0/). 
</div>