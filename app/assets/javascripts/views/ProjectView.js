var app = app || {};

app.ProjectView = Backbone.View.extend({
  initialize:function(){
    //console.log(this.model.toJSON());
  },

  el: "#main",

  render:function(){
    self= this;

    var  project = this.model;
    var title =  project.get('title');
    var tasklists =  project.get('task_lists');
    //console.log(project.task_lists);
    //console.log(tasklists.toJSON());
    //console.log(title);

    this.$el.empty();
    var projectPageTemplate = _.template($('#project-page').html());
    var html = projectPageTemplate({project: this.model});
    this.$el.html(html);

    tasklists.each(function (tasklist) {
      var taskListView = new app.TaskListView({
        model: tasklist
      });
      self.$('.lists').append(taskListView.render());
    });
  }
});
