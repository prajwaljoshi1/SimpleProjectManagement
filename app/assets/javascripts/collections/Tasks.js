var app = app || {};

app.Tasks = Backbone.Collection.extend({
  initialize:function(){
  
  },
  url: '/tasks',
  model: app.Task
   //comparator: 'positon'

});

// Tasks.comparator = function(chapter) {
//   return chapter.get("position");
// };
