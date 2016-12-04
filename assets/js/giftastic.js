$(document).ready(function() {
    var topics = ['Texas', 'Paris', 'London', 'Ukraine', 'Cats', 'Dogs', 'Birds', 'Sharks', 'George Clone', 'will smith', 'Selena Gomez'];
    var letsFindYouAgif = {
        buttonsRendering: function() {
            $('#buttons-go-here').empty();
            for (var i = 0; i < topics.length; i++) {
                  var myBtn = $('<button>');
                  myBtn.addClass('btn btn-success button button-style text-center')
                  myBtn.attr("data-topic", topics[i]);
                  myBtn.text(topics[i]);
                  $('#buttons-go-here').append(myBtn);
            }
        }
    }
    letsFindYouAgif.buttonsRendering();
});