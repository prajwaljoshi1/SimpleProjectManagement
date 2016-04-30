// changes underscore templating to {{ }}
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};



var app = app || {};

$(document).ready(function() {

console.log("DOCUMENT READY");
console.log(app.current_user);

});
