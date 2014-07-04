// Fields
var elementFigure = $(".enemy");

// Constructor
var Figure = function (lane) {
    this.lane = lane;
};

Object.defineProperties(Figure.prototype, {
    giveInfo : {
        value: function () {
            return this.lane;
        },
        enumerable: true,
        writable: true
    },
    giveLanePosition: {
        value: function () {
            // Check nu op welke lane dit figuur zich bevind
            if (this.lane == 1)
            {
                elementFigure.addClass("lane1");
            }
            else if (this.lane == 2)
            {
                elementFigure.addClass("lane2");
            }
            else if (this.lane == 3)
            {
                elementFigure.addClass("lane3");
            }
            else {
                console.log("[FIGURE.JS WAARSCHUWING] Geen lane toegewezen!")
            }
        }
    }
});