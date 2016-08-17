
//<!-- Back End -->
function textTest(string) {
  var numTest = /\d/;
  return numTest.test(string);
  }

function if_punctuation(string) {
  var punctuation;
  var findPunk = /[.,;:!?]/g;
  if (findPunk.test(string)) {
    punctuation = string[string.length - 1];
    return punctuation;
  }
}

// if true move on. if false error message

function qtest(string) {
  var qutest = /((?!([aeiou])).|^)qu/gi;
  return qutest.test(string);
  }
// if true move to qword, if false goes to consonantTest

function qword(string) {
  var match = /qu/.exec(string);
  var string = string.split('');
  var punctuation = '';
  if(if_punctuation(string)) {
    punctuation = if_punctuation(string);
    string.pop();
  }
  var indexes = [];
  indexes.push(match.index);
  var array = string.slice(0,(match.index + 2));
  var newarray = string.slice(match.index + 2,string.length);
  newarray = newarray.concat(array);
  var final = newarray.join('') + 'ay' + punctuation;
  return final;
}
//word ends up here, gets ending

function consonantTest(string) {
  var consonantsArray = [];
  var stringArray = string.split('');
  var punctuation = '';
  if(if_punctuation(string)) {
    punctuation = if_punctuation(string);
    stringArray.pop();
  }
  var vowelTest = /[aeiou]/gi;
  for (var i = 0; i < stringArray.length; i++) {
    if (vowelTest.test(stringArray[i])) {
      break;
    } else {
      consonantsArray.push(stringArray[i]);
      stringArray.shift();
      i-=1;
    }
  }
  stringArray = stringArray.concat(consonantsArray);
  var consonantTranslate = stringArray.join('') + 'ay' + punctuation;
  return consonantTranslate;
}
//word ends up here, gets ending
function wordFilter (string) {
  if (qtest(string)) {
    return qword(string);
  } else {
    return consonantTest(string);
  }
}

//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var resultArray = [];
    var sentence = $('#userString').val();
    var userAlert = textTest(sentence);
    if (userAlert) {
      alert('please enter a sentence without numbers');
    } else if (sentence === ''){
      alert('please enter a sentence')
    } else {
      var userArray = sentence.split(" ");
      userArray.forEach(function(word) {
        resultArray.push(wordFilter(word));
      });
    }
    var result = resultArray.join(" ");
    $('.result').text(result);
  });
});
