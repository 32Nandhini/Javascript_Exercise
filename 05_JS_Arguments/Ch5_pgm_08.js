var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName);
};

// Define player1 and player2 objects
player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

// Display player names using the initial showPlayerName function
showPlayerName(player1.name);
showPlayerName(player2.name);

// Step 1: Change playerName to playerName.toUpperCase() in the showPlayerName function
showPlayerName = function (playerName) {
    console.log(playerName.toUpperCase());
};

// Display player names in uppercase
showPlayerName(player1.name);
showPlayerName(player2.name);

// Step 2: Change the function to show the player's name in lower case
showPlayerName = function (playerName) {
    console.log(playerName.toLowerCase());
};

// Display player names in lowercase
showPlayerName(player1.name);
showPlayerName(player2.name);
