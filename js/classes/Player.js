// Verkrijg het id / element van Player (dat is #player)
var element = document.getElementById("player");


    // Constructor
    var Player = function (lane) {

        this.lane = lane;
    };

    Object.defineProperties(Player.prototype, {
        // Debug message
        debugMessage : {
            value: function () {
                return "Player is online and active. Atm op Lane " + this.lane;
            },
            enumerable: true
        },

        // Bevindt het blokje zich mogmenteel op de top/bottom lijn?
        toggleBoundariesTop : {
            top : function () {
                this.top = !this.top;
            },
            enumerable: true
        },
        toggleBoundariesBottom: {
            bottom: function () {
                this.bottom = !this.bottom;
            },
            enumerable: true
        },

        // Verander lane
        changeLane : {
            value: function (code) {

                //console.log("[changeLane START] knop " + code + ", current Lane: " + this.lane);
                if (code == 38 || code == 40){

                    if(this.top == true && code == 38){
                        //console.log("TOP = TRUE");
                    }
                    else if (this.bottom == true && code == 40){
                        //console.log("BOTTOM = TRUE. Oen.")
                    }
                    else
                    {
                        if (code == 38){
                            this.lane -= 1;
                            this.bottom = false;

                            if (this.lane == 1)
                            {
                                this.top = true;
                            }
                        }
                        else if (code == 40){
                            this.lane += 1;
                            this.top = false;

                            if (this.lane == 3)
                            {
                                this.bottom = true;
                            }
                        }
                        else
                        {
                            console.log("FOUT IN PLAYER.JS: heeft geen enkele statement gepakt!");
                        }
                        //console.log("[changeLane FINISH] This is: " + this.lane + ", bottom: " + this.bottom + ", top: " + this.top);
                    }
                }

            }
        },
        toggleLanePosition: {
            value: function () {

                // Verwijder alle opmaak bij voorbaat
                element.classList.remove("lane1");
                element.classList.remove("lane2");
                element.classList.remove("lane3");

                // Check nu op welke lane onze speler zich bevindt
                if (this.lane == 1)
                {
                    element.classList.add("lane1");
                }
                else if (this.lane == 2)
                {
                    element.classList.add("lane2");
                }
                else if (this.lane == 3)
                {
                    element.classList.add("lane3");
                }
                else {

                }
            }
        }

    });