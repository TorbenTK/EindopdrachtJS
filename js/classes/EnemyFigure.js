// Constructor
var EnemyFigure = function(lane, name) {
    Figure.call(this, lane);

    this.name = name;
};

EnemyFigure.prototype = Object.create(Figure.prototype, {
    enemyName: {
        value: function () {
            return this.name;
        }
    },
    giveLanePosition: {
        value: function () {
            return Figure.prototype.giveLanePosition.call(this);
        }
    }
});