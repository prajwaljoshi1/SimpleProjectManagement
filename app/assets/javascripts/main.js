// changes underscore templating to {{ }}
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};



var app = app || {};

$(document).ready(function() {

 //console.log("DOCUMENT READY");
 //console.log("LOGGED IN USER ID: ",app.current_user);



 app.user = new app.User({id: app.current_user});
  var trUser = app.user.fetch();



  app.projects = new app.Projects();
  var trProjects = app.projects.fetch();

  //  app.lists = new app.TaskLists();
  //  var trLists = app.lists.fetch();




  $.when(trUser, trProjects ).then( function() {
     //console.log("details of current user"); console.log(app.user.toJSON()); console.log("------------------------");
     //console.log("LIST OF PROJECTS BELOW"); console.log(app.projects.toJSON()); console.log("------------------------");
     //console.log("LIST OF LISTS"); console.log(app.lists.toJSON());
    app.username = app.user.attributes.user.name;
    app.user_alias = app.username.match(/\b(\w)/g).join('');


    app.router = new app.AppRouter();
    Backbone.history.start();


  });

});
