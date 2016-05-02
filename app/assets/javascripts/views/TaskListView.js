var app = app || {}

app.TaskListView = Backbone.View.extend({

  events:{
      'click .add-task-button':'addTask'
  },


  addTask:function(){
      console.log("NEW CARD ADDED");
  },


  render:function(){
    var self = this;

    var taskList = this.model;
    //var tasks = new app.Tasks( taskList.get('tasks') );
    var tasks = taskList.get('tasks')

    var individialListTemplate = _.template($('#individual-list').html());
    var html = individialListTemplate({taskList: this.model});
    this.$el.html(html);
    this.$el.appendTo('.list');


    if(tasks.length > 0){
      tasks.each(function (task) {
        var taskView = new app.TaskView({
          model: task
          });
        self.$('.task').append(taskView.render());
      });
  }
    return this.$el;
  }
});
