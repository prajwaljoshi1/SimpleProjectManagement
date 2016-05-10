var app = app || {}

app.UserView = Backbone.View.extend({


  initialize:function(){

  },

    render:function(){

         var memberListTemplate = _.template($('#member-list').html());
         var html = memberListTemplate({users:this.collection});
         this.$el.html(html);
         return this.$el;
    }
});
