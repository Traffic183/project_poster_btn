var randomMovieArray = ['Star Wars', 'Game of Thrones', 'Jaws'];
function apiCall(){
  var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
  var randomMovie = randomMovieArray[randomNumber];

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie) + '&h=600&apikey=454a6e93').then(function(response){
  var image = response.Poster;

  if(image !== "N/A"){
    $('img').attr('src', image);
    }

  });
}

$('button').click(function(){
  apiCall();
});
