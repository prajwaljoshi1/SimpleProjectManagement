
var app = app || {}

app.TaskView = Backbone.View.extend({

  initialize:function(){

     //this.collection.on('update', this.reRender, this);
     //this.collection.on('change', this.reRender, this);
     //this.collection.on('reset', this.reRender, this);
  },


  reRender:function(){
    this.render;
    // var project = app.projects.get(app.projectId);
    // var projectView = new app.ProjectView({ model: project });
    // projectView.render();
  },

    render:function(){
        var tasks = this.collection;
        var individualTaskTemplate = _.template($('#individual-task').html());
        var html = individualTaskTemplate({tasks:this.collection});
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

            console.log("________TASK ID: ", taskId);
            var task = tasks.get(taskId);
            console.log(tasks.toJSON());
            console.log(task);
            if (task == undefined){
              alert("PAGE CRASHED! please reload")
            }

            task.set({"task_owner_id": userId,
                      "alias": userAlias
                    });

            task.save();
          }
        });
        return this.$el;
    }
});
