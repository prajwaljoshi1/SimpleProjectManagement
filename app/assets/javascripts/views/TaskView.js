var app = app || {}

app.TaskView = Backbone.View.extend({

  initialize:function(){
    this.model.on('add', this.render, this);

  },

  refresh:function(){
  },


    render:function(){


        var task = this.model;
        var title = task.get('title');
        console.log(title);
        var individualTaskTemplate = _.template($('#individual-task').html());
        var html = individualTaskTemplate({task:this.model});
        this.$el.html(html);
        //this.$el.appendTo('.task');
        return this.$el;
    }
});
