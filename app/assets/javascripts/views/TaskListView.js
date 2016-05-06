var app = app || {}

app.TaskListView = Backbone.View.extend({

  className:'task-list',


  initialize:function(){

     this.model.get('tasks').on('add',this.reRender,this);
  },

  reRender:function(){
      this.render();
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


    tasks.comparator = function(tasks){
        return tasks.get('position');
      }
       tasks.sort();
      tasks.each(function (task) {

        //debugger;
        var taskView = new app.TaskView({
          model: task
          });
        self.$('.task').append(taskView.render());
      });


    var $tasks = this.$('.task');
    $tasks.sortable({
      connectWith: '.task',
      delay: 200,
      tolerance: 'pointer',
      //placeholder: 'task-placeholder',

      start: function (event, ui) {

      },

      update: function (event, ui) {

        var sortData = $(this).sortable('serialize');
      }
    });


    return this.$el;
  }
});
