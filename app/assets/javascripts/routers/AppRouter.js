var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes:{
      '': 'projectsPage'
    },

    projectsPage: function(){
      var projectsView= new app.ProjectsView({collection: app.projects});
      projectsView.render();
    }
});
