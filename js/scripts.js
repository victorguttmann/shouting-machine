$(document).ready(function() {
  $("#formShout").submit(function(event) {
    var userOutput = $("input#userInput").val();
    $(".userInput").text(userOutput.toUpperCase());
    $("#story").show();
    event.preventDefault();
  });
});
