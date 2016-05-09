var app = app || {};

app.TaskLists = Backbone.Collection.extend({
  url: '/tasklists',
  model: app.TaskList

  initialize: function () {
  this.on("add", function (taskList) {
    var taskListView = new app.TaskListView({
      model: taskList
    });
    taskListView.render();
  });
  }


});
