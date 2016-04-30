var app = app || {}

app.ProjectsView = Backbone.View.extend({

  initialize:function(){

  },

  el: "#main",

  render: function(){
    this.$el.empty();
    var projectsPageTemplate = _.template($('#my-projects-page').html());
    var html = projectsPageTemplate({projects: this.collection});
    this.$el.html(html);
  }
});
