//Create the application
App = Ember.Application.create();

//Wire up the views
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

//Wire up the controllers
App.ApplicationController = Ember.Controller.extend();

//Wire up the router
App.Router = Ember.Router.extend();
App.Router.map(function () {
    this.route("about");
});

//Finally, initialize
App.initialize();