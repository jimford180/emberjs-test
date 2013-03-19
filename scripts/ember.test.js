//Create the application
App = Ember.Application.create();

//Wire up the views
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

//Wire up the controllers
App.ApplicationController = Ember.Controller.extend();

//Wire up the router
App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
});

//Finally, initialize
App.initialize();