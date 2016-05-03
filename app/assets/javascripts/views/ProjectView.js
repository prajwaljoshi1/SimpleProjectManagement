var app = app || {};

app.ProjectView = Backbone.View.extend({
  initialize:function(){
    this.listenTo(this.model, 'sync', this.refresh);

  },

  refresh:function(){
    console.log("REFRESH Project");
  },


  el: "#main",

  render:function(){
    self= this;
    var  project = this.model;
    var tasklists =  project.get('task_lists');

    //var title =  project.get('title');

    this.$el.empty();
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
  }
});
