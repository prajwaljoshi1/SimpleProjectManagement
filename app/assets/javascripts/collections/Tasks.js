var app = app || {};

app.Tasks = Backbone.Collection.extend({
  initialize:function(){

  },
  url: '/tasks',
  model: app.Task

//   initialize: function () {
//   this.on("add", function (task) {
//     console.log(task.toJSON());
//     var taskView = new app.TaskView({
//       model: task
//     });
//     taskView.render();
//   });
// }

});

// Tasks.comparator = function(chapter) {
//   return chapter.get("position");
// };
