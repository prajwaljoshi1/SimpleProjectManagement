var app = app || {};

app.Project = Backbone.RelationalModel.extend({
  urlRoot: '/projects',

  relations:[{
    type: Backbone.HasMany,
    key: 'task_lists',
    relatedModel: 'app.TaskList',
    collectionType: 'app.TaskLists',
    reverseRelation:{
      key: 'project',
      type: Backbone.BelongsTo
    }
  },{
    type: Backbone.HasMany,
    key: 'users',
    relatedModel: 'app.User',
    collectionType: 'app.Uesrs'
  }]
});
