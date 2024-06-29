// Displaying a player's information using properties

// Function to show a player's name
var showPlayerName = function (playerName) {
    console.log(playerName);
};

// Function to show a player's health
var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

// Function to show a player's place
var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

// Function to show a line of specified length
var showLine = function (length) {
    var line = "****************************"; // A long string of asterisks
    console.log(line.substring(0, length));
};

// Function to show a blank line
var showBlankLine = function () {
    console.log("");
};

// Function to show a player's info
var showPlayerInfo = function (player) {
    showLine(player.name.length + 4); // For the top border of the box
    showLine(player.name.length + 4); // For the bottom border of the box
    showPlayerPlace(player.name, player.place);
    showPlayerHealth(player.name, player.health);
    showBlankLine();
};

// Define player1 and player2 objects
var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

// Display player information
showPlayerInfo(player1);
showPlayerInfo(player2);



/* Further Adventures
 *
 * 1) Define a showLine function with a parameter
 *    for the length of line.
 *    e.g. showLine(5) should output
 *    -----
 *    showLine(20) should output
 *    --------------------
 *
 *    Hints:
 *    a) In the function body declare a line variable
 *       and assign it a long string of dashes.
 *    b) Use the substring function to grab
 *       a line of the correct length.
 *       line.substring(0, 10) would have length 10.
 *
 * 2) Use your showLine function to display the
 *    player's name in a box.
 *    ----------
 *    - Kandra -
 *    __________
 *
 * 3) Update your showLine function to use
 *    asterisks rather than dashes.
 *    **********
 *    * Kandra *
 *    **********
 *
 */