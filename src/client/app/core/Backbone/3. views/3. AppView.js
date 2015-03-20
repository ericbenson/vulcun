// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  render: function(){
    this.contestsView = new ContestsView({collection: this.model.get('contests')});
    return this.$el.html([
      this.contestsView.$el
    ]);
  }

});
