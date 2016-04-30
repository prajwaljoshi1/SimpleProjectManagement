// changes underscore templating to {{ }}
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};



var app = app || {};

$(document).ready(function() {

 //console.log("DOCUMENT READY");
 //console.log("LOGGED IN USER ID: ",app.current_user);



 app.users = new app.Users();
  var trUsers = app.users.fetch();


  $.when(trUsers).then( function() {
    console.log("LIST OF USERS BELOW");
    console.log(app.users.toJSON());
    console.log("------------------------");
    app.router = new app.AppRouter();
    Backbone.history.start();


  });

});
