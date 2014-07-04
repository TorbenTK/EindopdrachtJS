// Base structure to create a global scope variable
// Self invoking function
// Roept zichzelf aan en is daarna ook gewoon 'WEG'
(function () {
    window.site = {};

    site.$document = $(document); // Hergebruik, door alle documenten
    site.views = {};
    site.collections = {};
    site.models = {};
    site.routers = {};
    site.events = _.clone(Backbone.Events);
})();