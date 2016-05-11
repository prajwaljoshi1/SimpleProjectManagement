var app = app || {}

app.UserView = Backbone.View.extend({


  initialize:function(){

  },

  events:{
    'submit form.add-user' : 'addNewMember'
  },

  addNewMember:function(event){
    event.preventDefault();

    var projectId = app.projectId;
    var memberEmail= this.$el.find('#member-email').val();

    var re = /\S+@\S+\.\S+/;
    if(re.test(memberEmail)){
    var memberProject = { "project_id": projectId, "member_email":memberEmail }
    postUrl='project/member';
    $.post(postUrl, memberProject,function(){
      console.log('saved!!');
    });
    }



  },

    render:function(){

         var memberListTemplate = _.template($('#member-list').html());
         var html = memberListTemplate({users:this.collection});
         this.$el.html(html);
         return this.$el;
    }
});
