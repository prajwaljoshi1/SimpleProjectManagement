var app = app || {};

app.ProjectView = Backbone.View.extend({
  initialize:function(){
    //this.listenTo(this.model, 'sync', this.refresh);
     this.model.get('task_lists').on('add',this.reRender,this);

  },

  reRender:function(){
       this.render();
  },


  events:{
      'submit form.add-task-list':'addTaskList'
  },

  addTaskList:function(){
    event.preventDefault();
    listOwnerId = app.current_user;
    projectId  = this.model.get('id');
    var project = this.model;
    var listTitle = this.$el.find("#add-list").val();
    console.log(project);
    var taskLists = project.get('task_lists');
    debugger;
    var taskList = new app.TaskList();

    if (listTitle !== ""){
      taskList.set({
        title: listTitle,
        project_id: projectId,
        tasks:[]
      });
      console.log(taskList.toJSON());
    taskList.save();
    taskLists.add(taskList);
    }
  },


  el: "#main",

  render:function(){
    self= this;

    this.$el.empty();


    var  project = this.model;
    var tasklists =  project.get('task_lists');



    tasklists.comparator = function(tasklist){
        return tasklist.get('position');
      }
       tasklists.sort();


    var projectPageTemplate = _.template($('#project-page').html());
    var html = projectPageTemplate({project: this.model});
    this.$el.html(html);
    tasklists.each(function (tasklist) {
      var taskListView = new app.TaskListView({
        model: tasklist
        //tasks: tasklist.get('tasks')
      });
      self.$('.lists').append(taskListView.render());
    });

    var lists = this.$('.list');
  }
});
