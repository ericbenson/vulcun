// ContestModel.js - Defines a backbone model class for songs.
var ContestModel = Backbone.Model.extend({

  initialize: function(){
    var date = this.get('startDate');
    this.set('timeUntil',this.formatDate(date));
  },

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
  }, 

  formatDate: function(date){

    var toObj = function(unformatted) {
        var b = unformatted.split(/[-TZ:]/i);

        return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5]));
    }

    var timeToGo = function(date) {
        // Utility to add leading zero
        var addsZeroes = function (n) {
          return (n < 10? '0' : '') + n;
        }

        // Convert string to date object
        var d = toObj(date);
        var diff = d - new Date();

        // Allow for previous times
        var sign = diff < 0? '-' : '';
        diff = Math.abs(diff);

        // Get time components
        var days = diff / 8.64e7 | 0;
        var hours = (diff % 8.64e7)/3.6e6 | 0;
        var mins  = diff%3.6e6 / 6e4 | 0;

        // Return formatted string
        if (days === 1){
          return sign + days + ' day';
        } else if (days >=1 ){
          return sign + days + ' days';
        } else {
          return sign + addsZeroes(hours) + ' hours ' + addsZeroes(mins) + ' minutes';   
        }
    }
    return timeToGo(date);
  }

});
