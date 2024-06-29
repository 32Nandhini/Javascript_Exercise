// Calling the sayHello function three times

var sayHello;
var printoutput;

sayHello = function () {
	console.log(" hello \ World!");
};

sayHello();
sayHello();

printoutput = function(){
	var message = "hello world";
	for (var i=0;i < message.length;i++)
		console.log(message[i]);
}

printoutput();

/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */