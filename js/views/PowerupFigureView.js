/* Onafgemaakte PowerupFigureView. Powerup zou kunnen functioneren als dit geïmplementeerd is*/

site.views.PowerupFigureView = Backbone.View.extend({

    /*events: {
        'slowApplier': 'slowApplier'
    },*/

    initialize: function() {
        site.events.on("slowApplier", this.slowApplier, this);
    },

    slowApplier: function () {
        //e.preventDefault();
        console.log("SNATCH AND RUN!");
        this.model.toggle();
    }

});