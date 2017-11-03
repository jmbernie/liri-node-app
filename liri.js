// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

var Inquirer = require("inquirer");
//var Spotify = require("spotify");
var SpotifyWebApi = require('spotify-web-api-node');
var Twitter = require("twitter");
var arguments = process.argv;



// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


// node liri.js spotify-this-song '<song name here>'

//var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});

var spotifyApi = new SpotifyWebApi();
 
// Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get an artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });


// node liri.js movie-this '<movie name here>'
var movieName = arguments[3];
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body){
	if (!error && response.statusCode===200){ // 200 is the positive website status code, like 404 not found
		//console.log(JSON.parse(body)); // this is the whole object
  		console.log("===============");
  		fullReleaseDate = JSON.parse(body).Released; // whole field

  		console.log("full release date is " + fullReleaseDate);
  		releaseYear = fullReleaseDate.split(" ");
  		console.log("release year is " + releaseYear[2]);
  		// console.log("release year is " + JSON.parse(body).Released[2]);
  		// console.log("release year is " + JSON.parse(body).Released[3]);

	}

});




// node liri.js do-what-it-says
