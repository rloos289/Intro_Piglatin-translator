//<!-- Back End -->
function textTest(string) {
  var numTest = /\d/;
  return numTest.test(string);
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
  var indexes = [];
  indexes.push(match.index);
  var array = string.slice(0,(match.index + 2));
  var newarray = string.slice(match.index + 2,string.length);
  newarray = newarray.concat(array);
  var final = newarray.join('') + 'ay';
  return final;
}
//word ends up here, gets ending

function consonantTest(string) {
  var vowelTest = /[aeiou]/gi;
  var consonantsArray = [];
  var stringArray = string.split('');
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
  var consonantTranslate = stringArray.join('') + 'ay';
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
      console.log('please enter a sentence without numbers')
    } else {
      console.log('made it to else');
      var userArray = sentence.split(" ");
      userArray.forEach(function(word) {
        resultArray.push(wordFilter(word));
      });
    }
    var result = resultArray.join(" ");
    console.log(result);
    $('.result').text(result);
  });
});
