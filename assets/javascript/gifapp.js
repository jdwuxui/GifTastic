// Create an array of strings for the initial set of buttons
var topics = ["dad", "mom", "sister", "brother"];
console.log(topics);

//Create a function to render the buttons
function createButtons() {
    // Delete any buttons prior to adding new buttons to avoid repeats
        $("#buttons-div").empty();

    //Loop over the array to make buttons
    for (var i = 0; i < topics.length; i++) {

    //...then generate buttons for each topic in the array.
          var a = $("<button>");
          // Add a button class
          a.addClass("btn btn-primary");
          // Add a data-attribute with a value of the topic at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#buttons-div").append(a);
        }
      }

      // Click event handler for add topic button
      $("#add-topic").on("click", function(event) {
        // event.preventDefault() to prevent form from submitting itself.
        event.preventDefault();

        // Grab text from the input box
        var topic = $("#topic-input").val().trim();
        // Add text input from textbox to array
        topics.push(topic);

        // calling renderButtons which handles the processing of our movie array
        createButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      createButtons();