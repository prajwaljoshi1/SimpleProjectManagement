var app = app || {};

app.TaskCommentInput = Backbone.View.extend({
  events: {
    'click button' : 'addComment'
    //'keypress textarea' : 'checkForEnter'
  },

  //el: "task-message-form",

  // checkForEnter: function (event) {
  //   var ENTER_KEY = 13;
  //   // They pressed enter and they weren't holding the Shift key
  //   if (event.which === ENTER_KEY && !event.shiftKey) {
  //     event.preventDefault();
  //     this.createSecret();
  //   }
  // },

  addComment: function () {
    var comment = new app.TaskComment();
    var userMessage = this.$el.find("#task-message").val();
    comment.set({
      message: userMessage,
      user_id: 'uid',
      task_id: 'tid',
      user_alias: 'alias'
    });
    TaskComment.save() // Saves it to the server - POST /secrets
    app.TaskComments.add( TaskComment );
    this.$el.find("#task-message").val('').focus();
  },

  render: function () {
    var taskMessageTemplate = $("#task-message-template").html();
    this.$el.html( taskMessageTemplate );

    return this.$el
  }

});
