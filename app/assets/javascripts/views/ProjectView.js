var app = app || {};



app.ProjectView = Backbone.View.extend({

  el: "#main",

  initialize: function() {
    this.model.get('task_lists').on('change', this.reRender1, this);
    this.model.get('task_lists').on('update', this.reRender2, this);
    //this.model.get('task_lists').on('remove', this.reRender, this);
    this.model.get('task_lists').on('add', this.reRender3, this);
  },



  reRender2: function() {
    console.log("update");
    this.render();
  },

  reRender1: function() {

    console.log("change");
    this.render();
  },

  reRender3: function() {

    console.log("add");
    this.render();
  },


  events: {
    'submit form.add-task-list': 'addTaskList',
    'click  .del-list': 'deleteList'
  },

  addTaskList: function() {
    event.preventDefault();
    listOwnerId = app.current_user;
    projectId = this.model.get('id');
    var project = this.model;
    var listTitle = this.$el.find("#add-list").val();
    var taskLists = project.get('task_lists');
    var taskList = new app.TaskList();

    if (listTitle !== "") {
      taskList.set({
        title: listTitle,
        project_id: projectId,
        tasks: [],
        position: 999,
      });
      taskList.save().done(function(){
        taskLists.add(taskList);

      });

    }
  },

  deleteList:function(event){
    event.stopPropagation();
    taskListId_str = $(event.target).attr('id').replace ( /[^\d.]/g, '' );
    taskListId = parseInt(taskListId_str);
    tasklist = this.model;
    var taskLists = this.model.get('task_lists')
    var taskList = taskLists.get(taskListId);

    taskList.destroy({
      success:function(data){
        taskLists.remove(taskList)
      }
    });

  },




  render: function() {
    var self = this;

     this.$el.empty();


    var project = this.model;
    var tasklists = project.get('task_lists');
    var users = project.get('users');


    tasklists.comparator = function(tasklist) {
      return tasklist.get('position');
    }
    tasklists.sort();


    var projectPageTemplate = _.template($('#project-page').html());
    var html = projectPageTemplate({
      project: this.model
    });
    this.$el.html(html);

    var userView = new app.UserView({collection: users});
    this.$('.user-list').append(userView.render());

    tasklists.each(function(tasklist) {
      var taskListView = new app.TaskListView({
        model: tasklist
      });
      self.$('.my-tasklists').append(taskListView.render());
    });



    var lists = this.$('.lists');

    lists.sortable({
      items: 'div.well',
      connectWith: '.list',
      delay: 200,
      tolerance: 'pointer',

      start:function(event, ui){
      },

      update: function(event, ui) {
        var listsSortData = $(this).sortable('serialize');
        projectId_str = $(event.target).parent().attr('id').replace(/[^\d.]/g, '');
        projectId = parseInt(projectId_str);

        if (listsSortData) {
          listsSortData += '&project_id=' + projectId;

          $.post('tasklists/sort', listsSortData, function(sortedTaskLists) {
            //var lists = project.get('task_lists');
            //lists.reset(sortedTaskLists.lists);

          });
        }
      }
    });

    var $users = this.$('ul.users li');
    $users.draggable({
      helper: 'clone',

      start: function (event, ui) {
      }
    });
    //return this;
    //return this.$el;
  }
});
