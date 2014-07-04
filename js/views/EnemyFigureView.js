site.views.EnemyFigureView = Backbone.View.extend({

    initialize: function() {
        this.model.on("change:slowToggle", this.slowEffect, this);
    },


    slowEffect: function(model, slowApplier) {
        if (slowApplier) {
            this.$el.addClass("slowed");
        } else {
            this.$el.removeClass("slowed");
        }
    }

});