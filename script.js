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



$(document).ready(function(){

// DOM variables
var currentDay = $("#currentDay");
var saveButton = $(".saveBtn");

// Display currentDay in jumbotron using moment.js
var now = moment().format("dddd, MMMM Do YYYY");
currentDay.text(now);

// Hour variables

var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// For loop that dynamically create time blocks
for(var i =0; i < hoursArray.length; i++){

    // Create a row
    var row = $("<div>");
    row.addClass("row time-block");
    
    // Add the hour div to the row
    var hourDiv = $("<div>");
    var hourDisplay = moment().set("hour", hoursArray[i]).format("hA");
    hourDiv.addClass("col-sm-1 hour");
    hourDiv.text(hourDisplay) // Will have time of day from moment.js in here
    row.append(hourDiv);
    
    // Add the text area to the row
    var textArea = $("<textarea>");
    textArea.addClass("col-sm-10 description"); // Will update depending on the hour of the day
    if(moment().hour() === hoursArray[i]){ 
        // Change time block color to red
        textArea.addClass("present");
        console.log("you did it!")
    } else if (moment().hour() > hoursArray[i]){
        textArea.addClass("past");
        console.log("this worked")
    } else {
        textArea.addClass("future");
        console.log("this works too")
    }
    
    row.append(textArea);
    
    // Add the save button to the row
    var saveButton = $("<button>");
    saveButton.addClass("col-sm-1 saveBtn fas fa-save");
    row.append(saveButton);
    
    // Add row to container
    $(".container").append(row);
}

// Conditionals:
// - Time blocks are color coded based on the hour of the day (conditional)

// else if (moment().hour < currentHour) { 
//     // Change time block color to grey
//     textArea.addClass("past");
// } else { 
//     // Change time block color to green 
//     textArea.addClass("future");
// }




// 1. Create an element
// 2. Add content
// 3. Append to an existing element (container)


// Event listeners :
// - Click of the save button
// - Click into a time block? May just be an input

// Functions / Methods:
// - When the save button is clicked, the text in the time block is saved to local storage

})