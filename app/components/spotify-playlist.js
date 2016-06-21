import Ember from 'ember';

const {get} = Ember;

export default Ember.Component.extend({
	spotify: Ember.inject.service(),


	click() {
		console.log(get(this,'spotify'));
	}

});
