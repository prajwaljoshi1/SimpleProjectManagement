var app = app || {};

app.TaskComments = Backbone.Collection.extend({
  url: '/taskcomments',
  model: app.TaskComment
});
