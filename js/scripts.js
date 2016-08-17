//<!-- Back End -->
function textTest(string) {
  var numTest = /\d/;
  return numTest.test(string);
  }


//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var sentence = $('#userString').val();
    var finalSentence = textTest(sentence);
    console.log(finalSentence);
  });
});
