// ContestModel.js - Defines a backbone model class for songs.
var ContestModel = Backbone.Model.extend({

  singleContest: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('singleContest', this);
  },

	homepage: function(){
	// Triggering an event here will also trigger the event on the collection
	this.trigger('homepage', this);
	}, 

  increment: function(){
    if(this.get('currentEntries')<this.get('totalEntries')){
      var socket = io();
      this.set('currentEntries', this.get('currentEntries')+1);
      this.save();
      socket.emit('increment', this);
    } else {
      alert('contest already full');
    }
  }, 

  highlight: function(){
    this.trigger('highlight',this);
  }

});
