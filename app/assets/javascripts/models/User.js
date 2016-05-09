var app = app || {};

app.User = Backbone.RelationalModel.extend({
  urlRoot: '/users'
});
