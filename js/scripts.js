$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();
    var sentence_arr = $('textarea').val().split(" ");
    var long_words = [];
    var short_words = [];
    var final_list = sentence_arr.map(function(item) {

      if (item.length > 3) {
        long_words.unshift(item);
      }else{
        short_words.push(item);
      }

    });
    var final_array = long_words.concat(short_words);
    var output = final_array.join(" ")
    $(".output h1").text(output);
  });
});
