var app = app || {}

app.TaskModalView = Backbone.View.extend({

   initialize:function(){

     this.model.get('task_comments').on('add', this.render, this);
   },

   events: {
   'submit form#add-comment': 'addComment'
  },

    addComment:function(event){
       event.preventDefault();
       console.log("add comment");
       var task = this.model;
       var taskId = task.get('id');

       var commentor = app.current_user;
       var commentText = this.$el.find("#comment").val();

       var comments = task.get('task_comments');

       var comment = new app.TaskComment();
       console.log(commentText);
       if(commentText !==""){
         comment.set({
            message:commentText,
            task_id:taskId,
            user_alias: app.user_alias
         });
       }

       comment.save().done(function(){
          comments.add(comment);
       });
    },


  render:function(){
    task = this.model;
    var comments = task.get('task_comments');


    var taskModalTemplate = _.template($('#task-modal').html());
    var html = taskModalTemplate({
          task:task,
          comments:comments
    });
    this.$el.html(html);

    return this.$el;

    //debugger;
    //console.log(task.get('title'));
    // var taskModalTemplate = _.template($('#task-modal').html());
    // var html = taskModalTemplate({task:this.model});
    // this.$el.html(html);
    //
    //
    //
    // var taskCommentInput = new app.TaskCommentInput();
    // this.$('.task-message-form').html(taskCommentInput.render());
    //
    //
    // return this.$el;
  }
});
