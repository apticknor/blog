// --------------------------------------
// Setup
// --------------------------------------
var Metalsmith      = require('metalsmith'),
    ignore          = require('metalsmith-ignore'),
    assets          = require('metalsmith-assets'),
    markdown        = require('metalsmith-markdown'),
    templates       = require('metalsmith-templates'),
    collections     = require('metalsmith-collections'),
    feed            = require('metalsmith-feed'),
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
    .metadata({
        site: {
            title: 'Anthony Ticknor',
            url: 'http://anthonyticknor.com/',
            author: 'Anthony Ticknor'
        }
    })
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
    .use(feed({
        collection: 'articles',
        limit: '20',
        destination: 'feed.xml'
    }))
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