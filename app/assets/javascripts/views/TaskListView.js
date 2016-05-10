var app = app || {}

app.TaskListView = Backbone.View.extend({

  className:'task-list well',

  initialize:function(){
    this.model.on('add', this.render, this);
     this.model.get('tasks').on('add',this.reRender,this);
     this.model.get('tasks').on('change',this.reRender,this);
     //this.model('add', this.reRender, this);
  },

  reRender:function(){
    console.log("HERE ");
       this.render();
  },

  events:{
      'submit form.add-task':'addTask'
  },

  addTask:function(event){
      event.preventDefault();
      taskOwnerId = app.current_user;
      tasklist_id = this.model.get('id');
      var tasklist = this.model;
      var taskTitle = this.$el.find("#add-task").val();

      var tasks = tasklist.get('tasks');
      var task = new app.Task();
      if(taskTitle !== ""){
        task.set({
          title:taskTitle,
          description:"NO DISCRIPTION YET",
          due_date: "NOT NOW",
          color:"NOT NOW",
          position:999,
          task_list_id:tasklist_id ,
          task_owner_id:taskOwnerId,
          alias: app.user_alias
        });
      task.save().done(function () {
         tasks.add(task);
       });
    }
  },


  render:function(){

    var self = this;

    var taskList = this.model;
    //var tasks = new app.Tasks( taskList.get('tasks') );
    var taskcollection = taskList.get('tasks');


    var taskListId = taskList.get('id');
    var id = "list-"+taskListId;
    this.$el.attr('id', id);
    var individialListTemplate = _.template($('#individual-list').html());
    var html = individialListTemplate({taskList: this.model});

    this.$el.html(html);
    this.$el.appendTo('.list');

    taskcollection.comparator = function(taskcollection){
        return taskcollection.get('position');
      }
      console.log(taskcollection.toJSON());
      var taskView = new app.TaskView({
        collection:taskcollection
      });
      self.$('.task').html(taskView.render().children('div'));
      //self.$('.task').html(taskView.render());)




    var $tasks = this.$('.task');
    $tasks.sortable({
      items: 'div.well',
      connectWith: '.task',
      delay: 200,
      tolerance: 'pointer',


      update: function (event, ui) {
         var taskSortData = $(this).sortable('serialize');
         listId_str = $(event.target).parent().attr('id').replace ( /[^\d.]/g, '' );
         listId = parseInt(listId_str);
         taskSortData += '&list_id=' + listId;
          //console.log(taskSortData);
          //ajax for now,   try to use backbone while refactoring......................................(!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
          if(taskSortData){
          $.post('tasks/sort', taskSortData, function (sortedTasks) {
            var tasks = taskList.get('tasks');
            tasks.reset(sortedTasks.tasks);
          });
        }
      },

    });

    //this.$el.unwrap();
    return this.$el;
  }
});
