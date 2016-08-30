import Ember from 'ember';

var player;

export default Ember.Service.extend({
	setupPlayer: function() {
      player = new Audio();
  }.on('init'),

	play(title, source){
		document.title = `▶︎ Now playing ${title}...`;
		player.src = source;
    player.play();
	}
});
