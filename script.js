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

// For loop that dynamically create time blocks
for(var i =0; i < 12; i++){
    // Create a row
    var row = $("<div>");
    row.addClass("row time-block");
    
    // Add the hour div to the row
    var hourDiv = $("<div>");
    hourDiv.addClass("col-sm-1 hour");
    // hourDiv.text() // Will have time of day from moment.js in here
    row.append(hourDiv);
    
    // Add the text area to the row
    var textArea = $("<textarea>");
    textArea.addClass("col-sm-10 description past"); // Will update depending on the hour of the day
    row.append(textArea);
    
    // Add the save button to the row
    var saveButton = $("<button>");
    saveButton.addClass("col-sm-1 saveBtn");
    saveButton.text("Save");
    row.append(saveButton);
    
    // Add row to container
    $(".container").append(row);
}



// 1. Create an element
// 2. Add content
// 3. Append to an existing element (container)


// Event listeners :
// - Click of the save button
// - Click into a time block? May just be an input

// Functions / Methods:
// - When the save button is clicked, the text in the time block is saved to local storage

})