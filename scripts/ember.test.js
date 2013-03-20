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

App.IndexRoute = Ember.Route.extend({
    model: function () {
        return [{ id: 1, name: 'Take the cat to the vet.', completed: false }, { id: 2, name: 'Bring home umbrella.', completed: false }];
    }
});

//Finally, initialize
App.initialize();