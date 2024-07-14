// Including a moons array in our Planet constructor

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );

planet.addMoon("Io");
planet.addMoon("Europa");

planet.showPlanet();

// Define the Planet constructor with additional methods
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
        console.log("Moons: " + (this.moons.length ? this.moons.join(', ') : 'None') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

    this.removeMoon = function () {
        this.moons.pop();
    };
};

// Create the first planet and add moons
var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.addMoon("Io");
planet1.addMoon("Europa");

planet1.showPlanet(); // Jupiter: planet 5 - Gas Giant. Moons: Io, Europa.


var planet2 = new Planet("Saturn", 6, "Gas Giant");

planet2.addMoon("Titan");
planet2.addMoon("Enceladus");
planet2.addMoon("Mimas");

planet2.showPlanet(); 
planet2.removeMoon();
planet2.showPlanet(); 

/* Further Adventures
 *
 * 1) Create a second planet.
 *    Make one up if you like.
 *
 * 2) Add three moons to the second planet.
 *
 * 3) Call the showPlanet method
 *    on the second planet.
 *
 * 4) Add a removeMoon method
 *    that removes the last moon
 *    from the moons array.
 *
 */