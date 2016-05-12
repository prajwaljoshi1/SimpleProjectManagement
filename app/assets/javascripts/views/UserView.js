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

    var reCheckEmail = /\S+@\S+\.\S+/;
    if(reCheckEmail.test(memberEmail)){
    var memberProject = { "project_id": projectId, "member_email":memberEmail }
    postUrl='project/member';
    $.post(postUrl, memberProject,function(){
      console.log(' user added to group!!');
      app.projects.fetch().done(function(){
        var project = app.projects.get(app.projectId);
        console.log("RENDER PROJECT _ DROP USER SAVE");
        var projectView = new app.ProjectView({ model: project });
        projectView.render();
      });

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
