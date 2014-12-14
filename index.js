var Metalsmith      = require('metalsmith'),
    markdown        = require('metalsmith-markdown'),
    templates       = require('metalsmith-templates'),
    collections     = require('metalsmith-collections'),
    permalinks      = require('metalsmith-permalinks'),
    sass            = require('metalsmith-sass'),
    uglify          = require('metalsmith-uglify'),
    Handlebars      = require('handlebars');

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