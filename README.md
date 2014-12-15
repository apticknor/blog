# AnthonyTicknor.com

A theme for the [Metalsmith](http://www.metalsmith.io/) static site generator.

## Install & Build Steps

* `npm install`
* `node index.js`

## Meta Data for Handlebars

### All Templates

* title 
  * @description: title of the content
  * @usage: prepended to `<title>`
  * @usage: display title on article detail and archive pages
* template
  * @description: handlebars template
  * @usage: renders using the specified template
* permalink
  * @description: the canonical permalink for the content
  * @usage: included in `<link rel="canonical href="" />`
  * @usage: used to link to pages in various contexts

### Listing Template

* archiveYear
  * @description: the year to display
  * @usage: used to limit the scope of articles displayed to the specified year

### Article Templates

* collection
  * @description: the collection the article belongs to
  * @usage: defaults to `articles` to be included in the blog
* date
  * @description: the article publish date in a YYYY-MM-DD
  * @usage: displayed on various pages where article content is shown
* image
  * @description: the article featured image
  * @usage: displayed on the article detail page
  * @requirement: minimum 800px wide
* thumbnail
  * @description: the article thumbnail image
  * @usage: displayed as a thumbnail of the article on pages where the article is mentioned
  * @requirement: 600px x 480px
* excerpt
  * @description: the article excerpt
  * @usage: displayed as a summary of the article on pages where the article is mentioned
  * @requirement: about 140 characters if possible
