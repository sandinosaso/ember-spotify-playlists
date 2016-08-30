import Ember from 'ember';

const {get} = Ember;

export default Ember.Component.extend({
	player: Ember.inject.service(),

	click() {
	    this.get('player').play(this.get('track.title'), this.get('track.sourceUrl'));
	}
});
