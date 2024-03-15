// * Display the current day at the top of the calender when a user opens the planner.

var currentDay = $('#currentDay') // element where current day is displayed 
//setting the start and end time of the calendar 
var startTime = dayjs('2000-01-01 07:00');
var endTime = dayjs('2000-01-01 18:00');
var schedule = {};

// Function to get the current day string using ordinal suffix
function getCurrentDay() {
  var currentDate = dayjs(); // representing date object to current date/time
  var dayEl = currentDate.format('dddd, MMMM D'); // 'do' should automatically add the ordinal suffix 
  var dayOfMonth = currentDate.date(); // this will get the day of month from dayjs() 
  var ordinalSuffix = getOrdinalSuffix(dayOfMonth); // adding the ordinal suffix by date

  dayEl += ordinalSuffix; //+= adds value of dayel to OrdinalSuffix and assigns the result back to the variable.

  return dayEl;
}

//conditional statements checking the last digit of the number to determine the right ordinal suffix 
function getOrdinalSuffix(number) {
  if (number % 10 === 1 && number % 100 !== 11) {
    return 'st';
  }
  if (number % 10 === 2 && number % 100 !== 12) {
    return 'nd';
  }
  if (number % 10 === 3 && number % 100 !== 13) {
    return 'rd';
  }
  return 'th';
}

function currentDay() {
  currentDay.text(getCurrentDay());
}

// * Present timeblocks for standard business hours when the user scrolls down.

function timeBlock(time) {
  // create hourly timeblocks in rows 
  var row = $('<div class="row">');
  var hour = $('<div class="col-3 col-sm-2 col-md-1 hour text-end pt-3">');
  var textSpace = $('<textarea class="col">');


  // creating hour element and appending to row
  var timeString = getHourAndDay(time);
  hour.text(timeString);
  row.append(hour);

  function getHourAndDay(time) {
    // time is a dayjs() object
    return time.format('hA');
  }
}

// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.

function getHourTimeTense(time) {
  var checkHour = time.hour();
  var currentHour = dayjs().hour();

  //these conditional statements will check what tense it is against the current hour 
  if (checkHour < currentHour) {
    return 'past'; // the less than operator is checking if the time is less than the current hour = past tense 
  }
  else if (checkHour === currentHour) {
    //the equality operator is checking if the time is same as current hour 
    return 'present';
  }
  else {
    if (checkHour > currentHour) { //the greater than operator is checking if the time is higher than current hour = present
      return 'future';
    }
  }
}

var timeTense = getHourTimeTense(time);
textSpace.addClass(timeTense);

// * Allow a user to enter an event when they click a timeblock

// add text area contents with value from schedule if it exists 
if (schedule[time.hour()] !== undefined) { //not equal comparison checks if a value is retrieved 
  textSpace.val(schedule[time.hour()]);
}

row.append(textSpace);


// * Save the event in local storage when the save button is clicked in that timeblock.

var saveIcon = $('<i class=" icon-save">'); // this should (?) create a new element and assign class
var saveButton = $('<div class="col-3 col-sm-2 col-md-1 saveBtn">');

 saveButton.on('click', function () {
  timeBlock(time.hour(), textSpace);
});  // adding an event listener for the save button element to save on click action to local storage

saveButton.append(saveIcon);
row.append(saveButton);

// append time block row to the container
$('.container').append(row);

// * Persist events between refreshes of a page 
