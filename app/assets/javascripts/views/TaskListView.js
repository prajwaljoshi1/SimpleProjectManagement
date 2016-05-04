var app = app || {}

app.TaskListView = Backbone.View.extend({

  //tagname: 'ul',



  initialize:function(){

     this.model.get('tasks').on('add', this.render,this);
  },





  events:{
      'submit form.add-task':'addTask'
  },




  addTask:function(e){
      event.preventDefault();
      taskOwnerId = app.current_user
      tasklist_id = this.model.get('id');
      var tasklist = this.model;
      var taskTitle = this.$el.find("#add-task").val();

      var tasks = tasklist.get('tasks');
      var task = new app.Task();
      console.log("tt",taskTitle);
      if(taskTitle !== ""){
        task.set({
          title:taskTitle,
          description:"NO DISCRIPTION YET",
          //due_date:
          //color:
          //position:
          task_list_id:tasklist_id ,
          task_owner_id:taskOwnerId
        });
      task.save(); // Saves it to the server - POST /secrets
      tasks.add( task );
    }
  },


  render:function(){
    var self = this;

    var taskList = this.model;
    //var tasks = new app.Tasks( taskList.get('tasks') );
    var tasks = taskList.get('tasks');

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
