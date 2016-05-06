

var app = app || {}

app.TaskView = Backbone.View.extend({

  initialize:function(){


  },

    render:function(){


        var task = this.model;
        var title = task.get('title');
        var individualTaskTemplate = _.template($('#individual-task').html());
        var html = individualTaskTemplate({task:this.model});
        this.$el.html(html);
        //this.$el.appendTo('.task');
        return this.$el;
    }
});
