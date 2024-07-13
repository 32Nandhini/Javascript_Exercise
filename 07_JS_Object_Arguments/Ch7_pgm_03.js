// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;
var buildCar;
var car;
var getCarInfo;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

buildCar = function (name, color, brand) {
    return {
        name: name,
        color: color,
        brand: brand
    };
};

getCarInfo = function (car) {
    return car.name.toUpperCase() + ": car " + car.color + ", " + car.brand;
};

car = buildCar("CAR", "Red", "Rolls Royce");

console.log(getCarInfo(car));


/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */