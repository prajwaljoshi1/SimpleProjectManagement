var app = app || {};



app.ProjectView = Backbone.View.extend({

  el: "#main",

  initialize: function() {


    //this.model.on('add', this.reRender1, this);
    this.model.get('task_lists').on('change', this.reRender, this);
    this.model.get('task_lists').on('change', this.reRender, this);
    //this.model.get('task_lists').on('reset', this.reRender2, this);
    this.model.get('task_lists').on('add', this.reRender, this);
  },





  reRender: function() {

    console.log("ADD on project", app.norerender);
    this.render();
  },

  // reRender2: function() {
  //   console.log("CHANGE on task_lists");
  //   this.render();
  // },
  //
  // reRender3: function() {
  //   console.log("ADD on Task_list");
  //   this.render();
  // },

  events: {
    'submit form.add-task-list': 'addTaskList'
  },

  addTaskList: function() {
    event.preventDefault();
    console.log("create list");
    listOwnerId = app.current_user;
    projectId = this.model.get('id');
    var project = this.model;
    var listTitle = this.$el.find("#add-list").val();
    console.log(project);
    var taskLists = project.get('task_lists');
    var taskList = new app.TaskList();

    if (listTitle !== "") {
      taskList.set({
        title: listTitle,
        project_id: projectId,
        tasks: [],
        position: 999,
      });
      //console.log(taskList.toJSON());
      taskList.save().done(function(){
        taskLists.add(taskList);

      });

    }
  },




  render: function() {
    //debugger;
    self = this;

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
          //tasks: tasklist.get('tasks')
      });
      self.$('.my-tasklists').append(taskListView.render());
    });



    var lists = this.$('.lists');
    //console.log(lists);
    //ebugger;
    lists.sortable({
      items: 'div.well',
      connectWith: '.list',
      delay: 200,
      tolerance: 'pointer',
      // placeholder: 'tasklist-placeholder',

      start:function(event, ui){
        //debugger;
        // ui.placeholder.height(ui.item.height());
      },

      update: function(event, ui) {
        var listsSortData = $(this).sortable('serialize');
        console.log("UPDATE");
        projectId_str = $(event.target).parent().attr('id').replace(/[^\d.]/g, '');
        projectId = parseInt(projectId_str);

        if (listsSortData) {
          listsSortData += '&project_id=' + projectId;

          $.post('tasklists/sort', listsSortData, function(sortedTaskLists) {
            var lists = project.get('task_lists');
            lists.reset(sortedTaskLists.lists);

          });
        }
      }
    });

    var $users = this.$('ul.users li');
    $users.draggable({
      helper: 'clone',

      start: function (event, ui) {
         console.log(ui);
        //var userId_str = $(event.target).attr('id').replace(/[^\d.]/g, '');
        //var userId = parseInt(userId_str);
        //console.log('picked up user ' , user_id);
      }
    });

  }
});
