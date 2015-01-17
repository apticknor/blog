/* ---------------------------------------------------------------------
Global JavaScript & jQuery
------------------------------------------------------------------------ */
var TICKNOR = TICKNOR || {};

(function($, window, APP, undefined) {

    // DOM Ready
    $(function() {

        // Common jQuery elements
        APP.$html   = $('html');
        APP.$body   = $('body');
        APP.$window = $(window);

        APP.HasJS.init();
    });

    /* ---------------------------------------------------------------------
    HasJS

    Adds JS class to HTML element if JS is present
    Removes no-js class from html element if JS present
    ------------------------------------------------------------------------ */
    APP.HasJS = {
        init: function() {
            APP.$html
                .addClass('js')
        }
    };

}(jQuery, window, TICKNOR));
