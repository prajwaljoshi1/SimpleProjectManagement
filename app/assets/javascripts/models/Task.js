var app = app || {}

app.Task = Backbone.RelationalModel.extend({
  urlRoot: "/task",

  relations:[{
    type: Backbone.HasMany,
    key: 'task_comments',
    relatedModel: 'app.TaskComment',
    collectionType: 'app.TaskComments',
    reverseRelation:{
      key: 'task',
      type: Backbone.BelongsTo
    }
  }]

});
