// Constructor
var PowerupFigure = function(lane /*, damage*/) {
    Figure.call(this, lane);

    //this.damage = damage;
};

PowerupFigure.prototype = Object.create(Figure.prototype, {
    giveLanePosition: {
        value: function () {
            return Figure.prototype.giveLanePosition.call(this);
        }
    }
});