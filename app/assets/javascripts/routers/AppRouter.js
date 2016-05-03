var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes:{
      '': 'projectsPage',
      'projects/:id': 'theProjectPage'
    },

    projectsPage: function(){
      var projectsView= new app.ProjectsView({collection: app.projects});
      projectsView.render();
    },

    theProjectPage: function(id){
       var project = app.projects.get(id);
       var projectView = new app.ProjectView({ model: project });
       projectView.render();
    }

});
