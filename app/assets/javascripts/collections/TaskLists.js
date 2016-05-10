var app = app || {};

app.TaskLists = Backbone.Collection.extend({
  url: '/tasklists',
  model: app.TaskList,

  initialize: function () {
  this.on("add", function (taskList) {
    console.log(taskList.toJSON());
    var taskListView = new app.TaskListView({
      model: taskList
    });
    taskListView.render();
  });
  }


});
