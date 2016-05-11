var app = app || {}

app.TaskModalView = Backbone.View.extend({

  render:function(){
    console.log("TASK MODAL");
    task = this.model;
    //debugger;
    //console.log(task.get('title'));
    var taskModalTemplate = _.template($('#task-modal').html());
    var html = taskModalTemplate({task:this.model});
    this.$el.html(html);
    return this.$el;
  }
});
