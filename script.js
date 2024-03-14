// * Display the current day at the top of the calender when a user opens the planner.

var currentDay = $(currentDay) // element where current day is displayed 
//setting the start and end time of the calendar 
var startTime = dayjs('2000-01-01 07:00');
var endTime = dayjs('2000-01-01 18:00');

// Function to get the current day string using ordinal suffix
function getCurrentDayString() {
  var currentDate = dayjs(); // representing date object to current date/time
  var dayEl = currentDate.format('dddd, MMMM D'); // formats date in following manner: Thursday, September 5 
  var dayOfMonth = currentDate.date(); // this will gets day of month from dayjs() object


  return dayEl;
}

function CurrentDay() {
  currentDayElement.text(getCurrentDayString());
}



 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

// The following animation demonstrates the application functionality: