var app = app || {}

app.TaskListView = Backbone.View.extend({

  render:function(){
    var self = this;

    var taskList = this.model;
    var taskListId = taskList.get('id');

    // console.log("HI FROM TASK LIST VIEW");
    // console.log(taskListId);


    var individialListTemplate = _.template($('#individual-list').html());
    var html = individialListTemplate({taskList: this.model});
    this.$el.html(html);
    this.$el.appendTo('.list');
    return this.$el;
  }
});
