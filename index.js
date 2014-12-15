// --------------------------------------
// Setup
// --------------------------------------
var Metalsmith      = require('metalsmith'),
    markdown        = require('metalsmith-markdown'),
    templates       = require('metalsmith-templates'),
    collections     = require('metalsmith-collections'),
    permalinks      = require('metalsmith-permalinks'),
    sass            = require('metalsmith-sass'),
    uglify          = require('metalsmith-uglify'),
    Handlebars      = require('handlebars'),
    moment          = require('moment');

// --------------------------------------
// Handlebars
// --------------------------------------

// date formatting helper that formats dates consistently using moment.js
// usage: {{ formatDate date }}
Handlebars.registerHelper('formatDate', function(date) {
    return moment(date).format('MM-DD-YYYY');
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

// --------------------------------------
// Metalsmith
// --------------------------------------
Metalsmith(__dirname)
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
            footer: "partials/footer",
            header: "partials/header"
        }
    }))
    .use(permalinks())
    .use(sass({
        outputStyle: 'compressed'
    }))
    .use(uglify())
    .destination('./_build')
    .build(function(err, files) {
        if (err) { throw err; }
    });