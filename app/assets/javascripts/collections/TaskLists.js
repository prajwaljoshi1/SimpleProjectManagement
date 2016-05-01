var app = app || {};

app.TaskLists = Backbone.Collection.extend({
  url: '/tasklists',
  model: app.TaskList
});
