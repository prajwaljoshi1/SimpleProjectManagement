var app = app || {};

app.TaskLists = Backbone.Collection.extend({
  url: '/tasklists',
  model: app.TaskList

  // initialize: function() {
  //         this.on('change', function() {
  //           app.taskLists = app.taskLists || new app.TaskLists();
  //           app.tasklists.fetch().done(function(){
  //             var taskListView = new app.TaskListView({model: app.taskLists});
  //              //console.log("Reservation " + app.reservations);
  //             taskListView.render();
  //           });
  //           });
  //         }

  
});
