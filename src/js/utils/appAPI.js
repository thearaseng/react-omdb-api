var AppActions = require('../actions/AppActions');

module.exports = {
  searchMovies:function(movie){
    // console.log('searching ' + movie.title);
    // $.ajax({
    //   url: 'http://www.omdbapi.com/?s=' + movie.title,
    //   dataType: 'json',
    //   sucess:function(data){
    //     AppActions.receiveMovieResults(data);
    //     console.log('receiving result of ' + movie.title);
    //   },
    //   error:function(xhr, status, err){
    //     console.log(err);
    //   }
    // })
    var fake = {"Search":[{"Title":"Swimming to Cambodia","Year":"1987","imdbID":"tt0094089","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzMjU4MTEzMl5BMl5BanBnXkFtZTcwOTU1MzMyMQ@@._V1_SX300.jpg"},{"Title":"Year Zero: The Silent Death of Cambodia","Year":"1979","imdbID":"tt0275085","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNzk5MTg3NTktNDkzNS00YWRlLWE4MGYtYTUwYjkzNzkyZDNlXkEyXkFqcGdeQXVyMDY4MzkyNw@@._V1_SX300.jpg"},{"Title":"Cambodia: The Virginity Trade","Year":"2009","imdbID":"tt1487876","Type":"movie","Poster":"N/A"},{"Title":"Angkor: Cambodia Express","Year":"1982","imdbID":"tt0088723","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTU2ODIzMTI4OV5BMl5BanBnXkFtZTcwMzYyODA4MQ@@._V1_SX300.jpg"},{"Title":"Intrusion: Cambodia","Year":"1983","imdbID":"tt0082566","Type":"movie","Poster":"N/A"},{"Title":"We Can't Change the World. But, We Wanna Build a School in Cambodia.","Year":"2011","imdbID":"tt1742028","Type":"movie","Poster":"N/A"},{"Title":"Pavarotti & Friends for Cambodia and Tibet","Year":"2000","imdbID":"tt0301711","Type":"movie","Poster":"N/A"},{"Title":"Samsara: Death and Rebirth in Cambodia","Year":"1990","imdbID":"tt0123254","Type":"movie","Poster":"N/A"},{"Title":"Raise the Bamboo Curtain: Vietnam, Cambodia, and Burma","Year":"1996","imdbID":"tt0811034","Type":"movie","Poster":"N/A"},{"Title":"Cambodia: Living in the Killing Fields","Year":"1996","imdbID":"tt0155583","Type":"movie","Poster":"N/A"}],"totalResults":"49","Response":"True"}
    AppActions.receiveMovieResults(fake);
  }
}
