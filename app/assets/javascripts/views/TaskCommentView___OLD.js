
var app = app || {};

app.TaskCommentView = Backbone.View.extend({

  tagName: 'li',


  render: function(){
    var message = this.model.get("message");
    var user_alias = this.model.get("user_alias");
    this.$el.html( "<div class='well'> <span='alias'>"+user_alias+"</span><span>"+message+"</span></div> ");
    this.$el.prependTo('#messages');

     ///return this.$el;

  }

});
