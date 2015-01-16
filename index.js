// --------------------------------------
// Setup
// --------------------------------------
var Metalsmith      = require('metalsmith'),
    metaobject      = require('metalsmith-metaobject'),
    ignore          = require('metalsmith-ignore'),
    assets          = require('metalsmith-assets'),
    markdown        = require('metalsmith-markdown'),
    templates       = require('metalsmith-templates'),
    collections     = require('metalsmith-collections'),
    permalinks      = require('metalsmith-permalinks'),
    sass            = require('metalsmith-sass'),
    uglify          = require('metalsmith-uglify'),
    Handlebars      = require('handlebars'),
    Swag            = require('swag'),
    moment          = require('moment');

// --------------------------------------
// Handlebars
// --------------------------------------

Swag.registerHelpers(Handlebars);

// date formatting helper that formats dates consistently using moment.js
// usage: {{ formatDate date }}
Handlebars.registerHelper('formatDate', function(date) {
    return moment(date).format('MMM Do YYYY');
});

// date formatting helper that formats dates to rfc822 consistently using moment.js
// usage: {{ rfc822date date }}
Handlebars.registerHelper('rfc822date', function(date) {
    return moment(date).format('ddd, DD MMM YYYY HH:mm:ss ZZ');
});

// year checking helper for use with listings that should be limited to a specific year
// usage: {{#checkYear archiveYear date}} ... {{/checkYear}}
Handlebars.registerHelper('checkYear', function(expectedYear, postDate, options) {
    formattedPostYear = moment(postDate).format('YYYY');
    if (formattedPostYear != expectedYear) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
});

// https://github.com/diy/handlebars-helpers/blob/master/lib/each-limit.js
// a limited 'each' loop.
// usage: {{#each-limit items 3}} ... {{/each-limit}}
Handlebars.registerHelper('limit', function(context, limit) {
    var options = arguments[arguments.length - 1];
    var ret = '';

    if (context && context.length > 0) {
        var max = Math.min(context.length, limit);
        for (var i = 0; i < max; i++) {
            ret += options.fn(context[i]);
        }
    } else {
        ret = options.inverse(this);
    }
    console
    return ret;
});


// --------------------------------------
// Metalsmith
// --------------------------------------
Metalsmith(__dirname)
    .use(metaobject({
        site: {
            url: 'http://anthonyticknor.com',
            title: 'Anthony Ticknor',
            author: 'Anthony Ticknor',
            description: 'Hi. I\'m Anthony Ticknor, a CSS aficionado, and a Technology Manager at The Nerdery. I\'m a big fan of making the web work for people regardless of who they are, where they are, or whatever device they have in front of them.'
        },
        socialLinks: {
            twitter: 'https://twitter.com/apticknor',
            github: 'https://github.com/apticknor',
            dribbble: 'https://dribbble.com/apticknor',
            instagram: 'https://instagram.com/apticknor/',
            feed: 'http://anthonyticknor.com/feed.xml'
        }
    }))
    .use(ignore([
        '_drafts/*'
    ]))
    .use(collections({
        articles: {
            sortBy: 'date',
            reverse: true
        }
    }))
    .use(markdown())
    .use(templates({
        engine: 'handlebars',
        directory: './templates',
        partials: {
            footer: 'partials/footer',
            header: 'partials/header'
        }
    }))
    .use(permalinks())
    .use(sass({
        outputStyle: 'compressed'
    }))
    .use(uglify())
    .use(assets({
        source: './src/assets',
        destination: './assets'
    }))
    .destination('./_build')
    .build(function(err, files) {
        if (err) { throw err; }
    });