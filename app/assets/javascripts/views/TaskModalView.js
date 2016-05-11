var app = app || {}

app.TaskModalView = Backbone.View.extend({

   initialize:function(){

     //this.model.get('task_comments').on('add', this.render, this);
   },

   events: {
   'submit form#add_comment': 'addComment',
  },

    addComment:function(event){
       event.preventDefault();

       var task = this.model;
       var tasks = this.collection;
       var comments = card.get('text_comments');
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
