// * Display the current day at the top of the calender when a user opens the planner.

var currentDay = $(currentDay) // element where current day is displayed 
//setting the start and end time of the calendar 
var startTime = dayjs('2000-01-01 07:00');
var endTime = dayjs('2000-01-01 18:00');

// Function to get the current day string using ordinal suffix
function getCurrentDay() {
  var currentDate = dayjs(); // representing date object to current date/time
  var dayEl = currentDate.format('dddd, MMMM Do'); // 'do' should automatically add the ordinal suffix 
  var dayOfMonth = currentDate.date(); // this will get the day of month from dayjs() 
  return dayEl;
}  getCurrentDay()

function currentDay() {
  currentDayElement.text(getCurrentDay());
} currentDay()


// * Present timeblocks for standard business hours when the user scrolls down.
 
function timeBlock() {
  
}

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page