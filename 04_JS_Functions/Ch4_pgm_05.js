// Two more function definitions and assignments

var findTotal;
var displayMenu;
var result,number1,number2;
  
number1=9;
number2=1;

findTotal = function () {
	result = number1 + number2;
};

findTotal();
console.log("total " + result)

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

displayMenu();

/* Further Adventures
 *
 *
 * 1) Declare number1, number2 and result variables.
 *
 * 2) Assign values to the variables.
 *
 * 3) Run the findTotal function by writing its name
 *    followed by parentheses: findTotal();
 *
 * 4) Display the result on the console.
 *
 * 5) Run the displayMenu function.
 *
 */