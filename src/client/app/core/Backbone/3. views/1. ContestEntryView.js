// ContestEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var ContestEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= contestName %></td> \
                        <td>$<%= prizePool %></td> \
                        <td><%= currentEntries %> / <%= totalEntries %></td>   \
                        <td>$<%= entryFee %></td>  \
                        <td><%= timeUntil %></td>  \
                        <td class="enter"> Enter </td>'),

  events: {
    'click': function(e) {
      var className = e.toElement.className;
      if(className === 'enter'){
        this.model.singleContest();      
      }
    }
  },

  initialize: function(params) {
    this.model.on('highlight', function(model){
      var element = this.$el;
      element.addClass('highlighted');
      setTimeout(function(){
        element.removeClass('highlighted');
      },3000);
    },this);

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
