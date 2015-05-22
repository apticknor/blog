---
title: "How to Disable Emojis from Rendering in Mobile Safari"
collection: articles
template: post.hbt
permalink: "http://anthonyticknor.com/posts/2015/how-to-disable-emojis-from-rendering-in-mobile-safari/"
og_type: "article"
date: 2015-05-21 21:18
image: "/assets/images/_articles/2015/emoji.jpg"
thumbnail: "/assets/images/_articles/2015/emoji_thumb.jpg"
excerpt: "A quick note about how to stop specific characters from rendering as emoji in Mobile Safari."
---

Recently, I was working on a website that used a heart as content. Specifically a "black heavy heart". This one -> &#10084; And when I started testing, I noticed that mobile Safari was changing the character into emoji. This change was not a change I personally cared for. So I started looking for a way to disable the emoji rendering.

The first place I checked was StackOverflow and found [at least one other person looking for the answer](http://stackoverflow.com/questions/29567298/ios-8-3-mobile-safari-disable-emoji-rendering) as well. After striking out there I naturally went to Google to look for a solution. To my dismay no matter what terms I combined or how I twisted them, I kept getting tutorials on how to change the actual keyboard on iOS. So here I was. All alone with no answers.

I started looking at headers, charsets, and thought maybe there was a secret meta tag to stop the rendering. After finding no other leads I began asking my co-workers around [The Nerdery](http://nerdery.com/) for ideas. And one of the iOS engineers pointed me to [an article by Matias Singers](http://mts.io/2015/04/21/unicode-symbol-render-text-emoji/) that was prompted by [a twitter exchange with John Gruber](https://twitter.com/gruber/status/590355262281744384). And after reading the article I had my a-ha moment. Mobile Safari (and other applications) were rendering the emoji because they were using the standardized variants sequence in Unicode 7.0. 

So let's get to it. You can prevent emoji from rendering anywhere HTML is parsed by specifying the proper variant glyph - which is `U+FE0E`. This works for all potential emojis as it's the variant glyph definition for VARIATION SELECTOR-15 (text style). The opposite is also true if you'd like to force an emoji to render if you use `U+FE0F` which is VARIATION SELECTOR-16 (emoji style).

In HTML, you can achieve whichever results you're seeking by specifying the variant glyph properly - or leaving it out and letting the browser pick for you (which in most cases results in emoji).

```html
<div>Non-Specified - &#10084;</div>
<div>Non-Specified - &#x2764;</div>
<div>Non-Specified - ❤</div>

<div>Emoji - &#10084;&#xfe0f;</div>
<div>Emoji - &#x2764;&#xfe0f;</div>
<div>Emoji - ❤&#xfe0f;</div>

<div>Text - &#10084;&#xfe0e;</div>
<div>Text - &#x2764;&#xfe0e;</div>
<div>Text - ❤&#xfe0e;</div>
```

I also put together [a reduced test case](http://anthonyticknor.com/demos/emoji/) for anyone looking to test it out in other places. If anyone has a solution that's cleaner than forcing this on a character by character basis I'd love to know about it, because this seems like it could be very labor intensive for larger sites.

### Notes

<div class="attribution">
['A (Snowy) Day In New York' photograph by The All-Nite Images](https://www.flickr.com/photos/otto-yamamoto/11374853816) and licensed under [Creative Commons Attribution-ShareAlike 2.0 Generic](https://creativecommons.org/licenses/by-sa/2.0/). 
</div>