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


    // render: function(){
    //     var html = this.template(this.model.toJSON()));
    //     var newElement = $(html)
    //     this.$el.replaceWith(newElement);
    //     this.setElement(newElement);
    //     return this;
    // }



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
      taskcollection.sort();
      taskcollection.each(function (task) {
        //debugger;
        var taskView = new app.TaskView({
          model: task
          });
        self.$('.task').append(taskView.render().children('div'));
      });



    var $tasks = this.$('.task');
    $tasks.sortable({
      items: 'div.well',
      connectWith: '.task',
      delay: 200,
      tolerance: 'pointer',

      start: function (event, ui) {
        // listId_str = $(event.target).parent().attr('id').replace ( /[^\d.]/g, '' );
        // listId = parseInt(listId_str);
        // console.log("DRAG FROM: ",listId);
        // console.log(ui.item.index());
        // ui.placeholder.width(ui.item.width());
        // ui.placeholder.height(ui.item.height());
      },

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

      receive: function(event, ui){

      //   listId_str = $(event.target).parent().attr('id').replace ( /[^\d.]/g, '' );
      //   listId = parseInt(listId_str);
      //   console.log("DROP TO: ",listId);
      //   console.log(ui.item.index());
      //   var itemChildId = ui.item.children().first().attr('id');
      // //  console.log(itemChildId);
      //
      //  //tasks where

      }
    });

    //this.$el.unwrap();
    return this.$el;
  }
});
