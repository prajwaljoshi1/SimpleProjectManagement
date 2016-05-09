var app = app || {};

app.ProjectView = Backbone.View.extend({

  initialize: function() {
    this.model.on('add', this.render, this);
    this.model.get('task_lists').on('change', this.reRender, this);
    this.model.get('task_lists').on('add', this.reRender, this);

  },

  reRender: function() {
    debugger;
    this.render();
  },


  events: {
    'submit form.add-task-list': 'addTaskList'
  },

  addTaskList: function(event) {
    // event.preventDefault();
    // var project = this.model;
    //
    // var $form = $(event.target);
    // debugger;
    // var attrs = $form.serializeJSON();
    // $form[0].reset();
    //
    // attrs.task_list.project_id = this.model.get('id');
    // var taskList = new app.TaskList();
    // var taskLists = project.get('task_lists');
    //
    // if(attrs.task_list.title){
    //   taskList.save(attrs.taskList,{
    //     success:function(data){
    //       taskLists.add(taskList);
    //     }
    //   });
    // }


    event.preventDefault();
    listOwnerId = app.current_user;
    projectId = this.model.get('id');
    var project = this.model;
    var listTitle = this.$el.find("#add-list").val();
    console.log(project);
    var taskLists = project.get('task_lists');
    debugger;
    var taskList = new app.TaskList();

    if (listTitle !== "") {
      taskList.set({
        title: listTitle,
        project_id: projectId,
        tasks: []
      });
      //console.log(taskList.toJSON());
      taskList.save();
      taskLists.add(taskList);
    }
  },


  el: "#main",

  render: function() {
    self = this;

    this.$el.empty();


    var project = this.model;
    var tasklists = project.get('task_lists');


    tasklists.comparator = function(tasklist) {
      return tasklist.get('position');
    }
    tasklists.sort();


    var projectPageTemplate = _.template($('#project-page').html());
    var html = projectPageTemplate({
      project: this.model
    });
    this.$el.html(html);
    tasklists.each(function(tasklist) {
      var taskListView = new app.TaskListView({
        model: tasklist
          //tasks: tasklist.get('tasks')
      });
      self.$('.lists').append(taskListView.render());
    });

    var lists = this.$('.list');
    lists.sortable({
      items: 'div.well',
      connectWith: '.list',
      delay: 200,
      tolerance: 'pointer',

      start: function(event, ui) {
        console.log("START");
      },

      receive:function(event,ui){
        console.log("RECEIVED");
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

  }
});
