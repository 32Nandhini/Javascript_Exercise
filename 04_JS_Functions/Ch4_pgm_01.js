// Displaying an object's properties on the console

var movie1;
var Movie2;
movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

Movie2 = {
  title: "Transylvania",
  actors: "Todd",
  directors: "Peter, Ronaldo Del Carmen"
};
console.log("Movie information for " + Movie2.title);
console.log("------------------------------");
console.log("Actors: " + Movie2.actors);
console.log("Directors: " + Movie2.directors);
console.log("------------------------------");

/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */