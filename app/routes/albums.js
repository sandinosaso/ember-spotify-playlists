import Ember from 'ember';

export default Ember.Route.extend({
	spotify: Ember.inject.service(),

	model(){
		return this.store.findAll('album');
	}
});
