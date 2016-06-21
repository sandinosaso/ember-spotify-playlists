import Ember from 'ember';

import SpotifyWebApi from 'npm:spotify-web-api-node';

var spotifyApi;

export default Ember.Service.extend({

	setupSpotify: function() {
        // credentials are optional
		spotifyApi = new SpotifyWebApi({
		  clientId : 'b23d409c73364c14ab47d28ed54ef0d1',
		  clientSecret : '6332df68b30242b58638031ed2925a81',
		  redirectUri : 'http://ember-spotify-playlists-sandinosaso.c9users.io/authorize'
		});

		spotifyApi.setAccessToken('BQAY3LBJNv9wb3Y2oNQn6p6r5_3T3eUDV2jUQi6CQ0Fl9JomCeYFQRL51wuyAl-NmPh-_XlYd3-DoTnScOcyYgy-JlSahti44f1H88w-8sxyXnepX0Ndg4WX0OcVG34bTIDQtrTzYWo7');

		let me = spotifyApi.getMe((data) => {
			console.log('me : ', data);
		});

		spotifyApi.getMe()
		  .then(function(data) {
		    console.log('Me ', data.body);
		  }, function(err) {
		    console.error(err);
		  });

		spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
		  .then(function(data) {
		    console.log('Artist albums', data.body);
		  }, function(err) {
		    console.error(err);
		  });

		console.log('spotifyApi:',spotifyApi);
    }.on('init')
		
});
