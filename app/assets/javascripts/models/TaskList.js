var app = app || {}

app.TaskList = Backbone.RelationalModel.extend({
  urlroot: '/tasklists',
  idAttributes: "id"
});
