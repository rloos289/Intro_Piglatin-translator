//<!-- Back End -->

//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var test = $('#userString').val();
    console.log(test);
  });
});
