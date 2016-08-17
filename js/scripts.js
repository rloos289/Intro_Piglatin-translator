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
  }

function moveConsonants(string) {
  var vowelTest = /[aeiou]/gi;
  var consonantsArray = [];
  var stringArray = string.split('');
  for (var i = 0; i < stringArray.length; i++) {
    if (vowelTest.test(stringArray[i])) { break;
    } else {
      consonantsArray.push(stringArray[i]);
      stringArray.shift();
      i-=1;
    }
  }
  console.log(consonantsArray);
  console.log(stringArray);
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
