$(document).ready(function() {
    var limit = 0;
    var topics = ['New York', 'Paris', 'London', 'Cats', 'Dogs', 'Birds', 'Sharks', 'george clooney', 'will smith', 'Selena Gomez', 'James Bond'];
        // rendering buttons already in the topics array
        function buttonsRendering() {
            $('#buttons-go-here').empty();
            for (var i = 0; i < topics.length; i++) {
                  var myBtn = $('<button>');
                  myBtn.addClass('btn btn-success button button-style text-center')
                  myBtn.attr("data-topic", topics[i]);
                  myBtn.text(topics[i]);
                  $('#buttons-go-here').append(myBtn);
            }
        };
        // onclick event when a topic clicked to return 10 gifs from Giphy
        $('#buttons-go-here').on('click', '.button', function() {
            $('.gifs-well').text('Here is your order! click it to shake it!')
            var myTopic = $(this).attr('data-topic');
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + myTopic + "&api_key=dc6zaTOxFJmzC&limit=12";
            console.log(queryURL);
            $.ajax({
                url: queryURL,
                method: 'GET',
            }).done(function(response) {
                console.log(response);
                $('#gifs-go-here').empty();
                for (var i = 0; i < response.data.length; i++) {
                    var topicDiv = $('<div>').addClass('col-sm-3 innerRows')
                    var p = $('<p>').text(response.data[i].rating);
                    // importing the still url of the image
                    var topicImg = $('<img>').attr('src', response.data[i].images.original_still.url)
                    // set the gif status to still for toggling
                    topicImg.attr('data-still', response.data[i].images.original_still.url);
                    topicImg.attr('data-animated', response.data[i].images.original.url);
                    topicImg.attr('data-status', 'still');
                    topicImg.addClass('imgToggle');
                    topicImg.attr('width', '100%');
                    topicDiv.append(p);
                    topicDiv.append(topicImg);
                    $('#gifs-go-here').append(topicDiv);
                }
            });
        });
        // function to play and pause the gif onclick
        $('#gifs-go-here').on('click', '.imgToggle', function() {
            // obtain the gis status (moving or still)
            var state = $(this).attr('data-status');
            // toggole the status between (moving to still)
            if (state === 'still') {
                $(this).attr('src', $(this).attr('data-animated'))
                $(this).attr('data-status', 'animate');
            } else {
                $(this).attr('src', $(this).attr('data-still'))
                $(this).attr('data-status', 'still');
            }
        });
        // onclick event listener and function to add anew topic from the input when the "add topic" button clicked
        $('#topicSearch').on('click', function() {
            $('#newTopic').empty();
            var newTopic = $('#newTopic').val().trim();
            topics.push(newTopic);
            buttonsRendering();
            return false;
        });
    // rendering button onload
    buttonsRendering();
});