//<!-- Back End -->
function textTest(string) {
  var numTest = /\d/;
  return numTest.test(string);
  }

function firstLetters(string) {
  var vowelTest = /^[aeiou]/gi;
  if (vowelTest.test(string)) {
    string += 'ay';
    return string;
  } else {
    return string;
  }
  // return vowelTest.test(string);
  }


//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var sentence = $('#userString').val();
    var finalSentence = textTest(sentence);
    if (finalSentence) {
      console.log('please enter a sentence without numbers')
    } else {
      console.log('yay')
    }
  });
});
