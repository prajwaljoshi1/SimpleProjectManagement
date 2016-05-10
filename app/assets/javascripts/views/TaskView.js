

var app = app || {}

app.TaskView = Backbone.View.extend({

  initialize:function(){

     //this.model.on('update', this.reRender, this);
     //this.model.on('change', this.reRender, this);
  },


  reRender:function(){
    console.log("TASK VIEW RENDER");
    this.render();
  },

    render:function(){

        var task = this.model;
        //var title = task.get('title');
        //var alias = task.get('alias');

        //var id = task.get('id');  // bug-trapping
        //if(!id)
        //debugger;





        var individualTaskTemplate = _.template($('#individual-task').html());
        var html = individualTaskTemplate({task:this.model});
        this.$el.html(html);


        var $dropzone = this.$el.children();
        $dropzone.droppable({
          accept: 'li.user',
          drop: function(event, ui){

            var userId_str = ui.draggable.attr('id').replace(/[^\d.]/g, '');
            var userId = parseInt(userId_str);
            var userAlias = ui.draggable.attr('alias');


            var taskId_str = $(event.target).attr('id').replace(/[^\d.]/g, '');
            var taskId = parseInt(taskId_str);

            task.set({"task_owner_id": userId,
                      "alias": userAlias
                    });

            task.save()//.done(function(){
            //  app.tasks.update(task);
            //});
          }
        });
        //this.$el.appendTo('.task');
        return this.$el;
    }
});
