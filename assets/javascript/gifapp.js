// Initial array of topics
var topics = ["wow", "scared", "thrilled", "whoa"];

///////////////// *********** FUNCTIONS *********** /////////////////
//Function to render topics as buttons
function createButtons() {
  // Delete any buttons prior to adding new ones
  $("#buttons-div").empty();
  for (var i = 0; i < topics.length; i++) {
    ///...generate buttons for each topic.
    var a = $("<button>");
    ///...Add button class
    a.addClass("btn btn-primary");
    ///...Add data-attribute with a value of the topic at index i
    a.attr("data-name", topics[i]);
    ///...Add button text with a value of the topic at index i
    a.text(topics[i]);
    ///...Add button to HTML
    $("#buttons-div").append(a);
  }
}

// Function to fetch GifInfo 
function fetchGifData(term) {
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + term + "&apikey=Xhy8UFh5rmOh88Vn5yv4svsj7Nso4RMg&limit=10";
  console.log("queryUrl equals: ", queryURL);
// Working ^
  // AJAX call for button clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log('Ajax called');
    displayGifs(response);
// WORKING ^
    // Constructing HTML containing gif information
    var gifPreview = $("<img>").attr("src", queryURL);
    var gifRating = $("<p>").text(response.data.rating);
    $("#gifs-view").append(gifRating, gifPreview);    
  });
}

function displayGifs(data) {
  clearGifs();
  $("#gifs-view").append(data);
  console.log("This function will use jQuery to generate HTML using the following: ", data);
  // Still didn't figure this out.
}

function clearGifs() {
  $("#gifs-view").empty();
}

// Function to clear input field 

// Function to start and stop gif animation

///////////////// ********* EVENT LISTENERS ************** /////////////////
// Click event listener for "btn" class
$(document).on("click", ".btn", function(event) {
  var myTopic = $(event.target).data("data-name");
  fetchGifData(myTopic);
});

// Click event handler for add topic button
$("#add-topic").on("click", function (event) {
  // Prevent form from submitting itself.
  event.preventDefault();
  // Grab text from the input box
  var topic = $("#topic-input").val().trim();
  // Add input from textbox to array
  topics.push(topic);
  // calling renderButtons which handles the processing of our movie array
  createButtons();
});

// Calling the renderButtons function to display the intial buttons
createButtons();
//Working ^

