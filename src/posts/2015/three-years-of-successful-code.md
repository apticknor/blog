---
title: "Three Years of Successful Code"
collection: articles
template: post.hbt
permalink: "http://anthonyticknor.com/posts/2015/three-years-of-successful-code/"
og_type: "article"
date: 2015-03-23 22:27
image: "/assets/images/_articles/2015/lvms.jpg"
thumbnail: "/assets/images/_articles/2015/lvms_thumb.jpg"
excerpt: "Three years ago I helped the Little Voyageurs' Montessori school at The Nerdery Overnight Website Challenge."
---

Three years ago I helped the [Little Voyageurs' Montessori School](http://lvmschool.com) at The 2012 [Nerdery Overnight Website Challenge](http://overnightwebsitechallenge.com/). This week I was contacted by them to resolve some bugs they had been seeing in the site. While I've been able to help for the most part, I thought it would be fun to take a look at code that has been running successfully for the last three years and review some of it's highlights and areas that could be improved.

First lets take a look at the stylesheet portion of the `<head>`. 

```html
    <link href='http://fonts.googleapis.com/css?family=Josefin+Slab:400,700|Lato:400,700,300' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="http://www.lvmschool.com/assets/styles/reset.css" />
    <link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/basic.css" />
    <link rel="stylesheet" media="screen and (min-width: 200px)" href="http://www.lvmschool.com/assets/styles/small.css" />
    <link rel="stylesheet" media="screen and (min-width: 768px)" href="http://www.lvmschool.com/assets/styles/grid.css" />
    <link rel="stylesheet" media="screen and (min-width: 768px)" href="http://www.lvmschool.com/assets/styles/med.css" />
    <link rel="stylesheet" media="screen and (min-width: 1024px)" href="http://www.lvmschool.com/assets/styles/large.css" />
    <!--[if lt IE 9]><link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/ie9.css" /><![endif]-->
    <!--[if IE 8]>
        <link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/small.css" />
        <link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/grid.css" />
        <link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/med.css" />
        <link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/large.css" />
        <link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/ie8.css" />
    <![endif]-->
    <!--[if lte IE 7]>
        <link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/small.css" />
        <link rel="stylesheet" media="screen" href="http://www.lvmschool.com/assets/styles/ie7.css" />
    <![endif]-->
    <link rel="stylesheet" media="print" href="http://www.lvmschool.com/assets/styles/print.css" />
</head>
```

*Pros:*

* Mobile first responsive web design
* A clear progressive enhancement strategy

*Cons:*

* The number of http requests
* Breakpoints are clearly defined by common screen sizes

Now take a deeper dive into the CSS files: [basic.css](http://www.lvmschool.com/assets/styles/basic.css), [small.css](http://www.lvmschool.com/assets/styles/small.css), [grid.css](http://www.lvmschool.com/assets/styles/grid.css), [med.css](http://www.lvmschool.com/assets/styles/med.css), and [large.css](http://www.lvmschool.com/assets/styles/large.css)

*Pros:*

* Class names that still have meaning
* A robust `.wysiwyg` (user content) quarantine class
* Gradients and border-radius include vendor prefixes and fallback for maximum cross browser compatibility
* The media object! 
* Low specificity and the lack of IDs and `!important`

*Cons:*

* No BEM syntax in the names (like I'd use today)
* The mixing of `.wysiwyg` classes with other content classes
* The complete lack of helpul comments
* A few selectors longer than I'm normally comfortable with

While it may not use a CSS preprocessor, or the latest JavaScript framework (or even a task runner for that matter), it feels good to look back at something from three years ago that was built in 24 hours and see how it's making an impact for a non-profit and the surrounding community. And it still is. 

And that's what it all boils down to friends. Your code will wither. But are you making a lasting impact? Big or small, it doesn't matter. Find somewhere to leave a mark, and leave it.

If you'd like to make an impact for non-profits that need your help, [sign up for the 2015 Overnight Website Challenge](http://overnightwebsitechallenge.com/) and I'll see you there. We can even write some code together and laugh about it a few years down the road.

### Notes

<div class="attribution">
[Photographs courtesy of Little Voyageurs' Montessori School](http://lvmschool.com). 
</div>