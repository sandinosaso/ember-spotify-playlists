import Ember from "ember";

export default Ember.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function(params) {
  	  console.log("Authorize spotify params:", params);
      return ;
  }
});
