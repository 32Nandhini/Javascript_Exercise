// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday",
    "sunday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 2);

console.log(report);

var reportFriday = getVisitorReport(visitors, 5);
console.log(reportFriday);  // Output: "There were 481 visitors on Friday"

// Example structure for a month
var monthVisitors = [
  [354, 132, 210, 221, 481],  // Week 1
  [300, 150, 180, 200, 400],  // Week 2
  [320, 140, 190, 230, 450],  // Week 3
  [380, 160, 200, 250, 500]   // Week 4
];

// Function to get visitor report for a specific day in a specific week
function getMonthVisitorReport(monthArray, weekIndex, dayIndex) {
  var weekVisitors = monthArray[weekIndex - 1];  // Adjusting for 1-based index
  var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
  ];
  var visitorReport = "There were ";
  visitorReport += weekVisitors[dayIndex - 1];  // Adjusting for 1-based index
  visitorReport += " visitors on " + days[dayIndex - 1];  // Adjusting for 1-based index
  return visitorReport;
}

// Example usage:
var reportWeek2Wednesday = getMonthVisitorReport(monthVisitors, 2, 3);  // Week 2, Wednesday
console.log(reportWeek2Wednesday);  // Output: "There were 180 visitors on Wednesday"


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */