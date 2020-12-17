$(document).ready(function () {
  // DOM variables
  var currentDay = $("#currentDay");

  // Display currentDay in jumbotron using moment.js
  var now = moment().format("dddd, MMMM Do");
  currentDay.text(now);

  // Hour array
  var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // For loop that dynamically create time blocks
  for (var i = 0; i < hoursArray.length; i++) {
    // Create a row
    var row = $("<div>");
    row.addClass("row time-block");

    // Add the hour div to the row
    var hourDiv = $("<div>");
    var hourDisplay = moment().set("hour", hoursArray[i]).format("hA");
    hourDiv.addClass("col-sm-1 hour");
    hourDiv.text(hourDisplay); // Will have time of day from moment.js in here
    row.append(hourDiv);

    // Add the text area to the row
    var textArea = $("<textarea>");
    textArea.addClass("col-sm-10 description");
    textArea.attr("style","color: black");
    textArea.data("hours", hoursArray[i]);

    if (localStorage.getItem(hoursArray[i]) !== null) {
      // Get item from local storage and display it on the page
      textArea.text(localStorage.getItem(hoursArray[i]));
    }

    // Changes the color of the text area depending on the time of day.
    if (moment().hour() === hoursArray[i]) {
      textArea.addClass("present");
    } else if (moment().hour() > hoursArray[i]) {
      textArea.addClass("past");
    } else {
      textArea.addClass("future");
    }

    row.append(textArea);

    // Add the save button to the row
    var saveButton = $("<button>");
    saveButton.addClass("col-sm-1 saveBtn fas fa-save");
    row.append(saveButton);

    // Add row to container
    $(".container").append(row);
  }

  // Function that stores the text in the text area to local storage
  function savePlanner(event) {
    // Store textarea inputs to local storage
    console.log($(this));
    var text = $(this.previousElementSibling).val();
    console.log(text);
    var hours = $(this.previousElementSibling).data("hours");
    localStorage.setItem(hours, text);
  }

  // Save information to local storage on click of save button
  $(".container").on("click", "button", savePlanner);

  $(".saveBtn").hover(
    function () {
      $(this).attr("style", "color:black");
    },
    function () {
      $(this).attr("style", "color:white");
    }
  );
});
