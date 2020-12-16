// *** ACCEPTANCE CRITERIA ***
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// DOM Variables:
// Document ready
$(document).ready(function(){

// Container
var container = $("#container");
// Current day
var currentDay = $("#currentDay");
// Present, past, and future time blocks
var presentDay = $(".present");
var pastDay = $(".past");
var futureDay = $(".future");
// Save button
var saveButton = $(".saveBtn");

// Display currentDay in jumbotron using moment.js
var nowObject = moment();
var now = nowObject._d;
console.log(now._d);
currentDay.text(now);


// Conditionals:
// - Time blocks are color coded based on the hour of the day (conditional)
// if(){ // Hour is present
//     // Change time block color to red
// } else if () { // Hour is past
//     // Change time block color to grey
// } else { // Hour is future
//     // Change time block color to green 
// }

// Event listeners :
// - Click of the save button
// - Click into a time block? May just be an input

// Functions / Methods:
// - When the save button is clicked, the text in the time block is saved to local storage

})