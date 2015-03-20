// AppView.js - Defines a backbone view class for the whole music app.
var SingleContestView = Backbone.View.extend({

  events: {
    'click .lobby': 'toLobby', 
    'click .increment': 'increment' 
  },

  initialize: function(params){
    this.currentContest = this.model.get('contests').get(params.id);
    this.contestsView = new ContestsView({collection: new Contests(this.currentContest)});

  },

  toLobby: function(){
    this.currentContest.homepage();
  },

  increment: function(){
    this.currentContest.increment();
  },

  render: function(){
    return this.$el.html([
      '<div class=lobby>To Lobby</div>',
      '<div class=increment>Increment Contest Counter</div>',
      this.contestsView.$el
    ]);
  }

});