var app = app || {};

app.Projects = Backbone.Collection.extend({
  url: '/projects',
  model: app.Project
});
