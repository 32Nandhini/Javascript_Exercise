// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach",
  ["Great Wall",
  "Mountains"]
];
items.push("Eiffel Tower");

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);
console.log(items);

showInfo = function(itemToShow) {
  if (typeof itemToShow === 'string') {
      console.log(itemToShow + " - " + itemToShow.length + " letters");
  } else if (Array.isArray(itemToShow)) {
      console.log(itemToShow.join(", ") + " - " + itemToShow.join("").length + " letters in total");
  }
};


/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */