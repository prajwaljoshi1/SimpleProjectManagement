

var app = app || {}

app.TaskView = Backbone.View.extend({

  initialize:function(){
    //this.model.on('add', this.render, this);
    this.$el.sortable({
           placeholder :"sortable-placeholder",
           update: function(event, ui){
             self.taskUpdate();
           }
         });
  },

  taskUpdate:function(){
    console.log("TASK CHANGED");
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

// var app = app || {}
//
// app.TaskView = Backbone.View.extend({
//
//   el: 'li',
//
//   tasks: [],
//
//   initialize:function(){
//     this.model.on('add', this.render, this);
//     this.$el.sortable({
//       placeholder :"sortable-placeholder",
//       update: function(event, ui){
//         self.taskUpdate();
//       }
//     });
//   },
//
//   taskUpdate: function(){
//
//     // _.each(this.viewItems, function(item){
//     //            item.model.set('order', item.$el.index());
//     //        });
//     //        this.collection.sort({silent: true})
//     //         _.invoke(this.viewItems, 'remove');
//     //        this.render();
//
//     // _.each(this.tasks, function(task){
//     //     task.model.set('order', item.$el.index());
//     // })
//     console.log("update task position");
//     //this.render()
//   },
//
//
//     render:function(){
//
//
//         var task = this.model;
//         var title = task.get('title');
//         console.log(title);
//         var individualTaskTemplate = _.template($('#individual-task').html());
//         var html = individualTaskTemplate({task:this.model});
//         this.$el.html(html);
//         //this.$el.appendTo('.task');
//         return this.$el;
//     }
// });
