var app = app || {};

app.Tasks = Backbone.Collection.extend({
  url: '/tasks',
  model: app.Task
});
