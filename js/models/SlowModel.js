site.models.SlowModel = Backbone.Model.extend({

    // Attributes, specifiek voor het SlowModel
    // Deze gaat werken voor alle Figures (dit zijn dus enemies en powerups)
    defaults: function() {
        return {
            slowToggle: false
        };
    },

    // Toggle functie: true of false
    toggle: function() {
        this.save({slowToggle: !this.get("slowToggle")});
    }


});