// ContestsView.js - Defines a backbone view class for the music library.
var ContestsView = Backbone.View.extend({

  tagName: "table",

  events: {
    'click th': 'sort', 
  },

  initialize: function() {
    this.render();

  },

  sort:function(e){
    var className = e.toElement.className;
    this.collection.sortCollection(className);
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    
    this.$el.children().detach();

    this.$el.html('<th class=contestName>    Contest Name</th> \
                   <th class=prizePool>      Prize Pool</th> \
                   <th class=currentEntries> Entries</th> \
                   <th class=entryFee>       Entry Fee</th> \
                   <th class=startDate>      Start Date</th> \
                   <th class=enter>          Enter</th> ').append(

      this.collection.map(function(contest){
        return new ContestEntryView({model: contest}).render();
      })
    );
  }

});
