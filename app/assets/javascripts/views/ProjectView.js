var app = app || {};

app.ProjectView = Backbone.View.extend({
  initialize:function(){
    console.log(this.model.toJSON());
  },

  el: "#main",

  render:function(){
    this.$el.empty();
    var projectPageTemplate = _.template($('#project-page').html());
    var html = projectPageTemplate({project: this.model});
    this.$el.html(html);
  }
});
