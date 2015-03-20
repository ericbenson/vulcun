// Contests.js - Defines a backbone collection class for songs.
var Contests = Backbone.Collection.extend({

  model: ContestModel,
  url: '/contests', 
 
	sortAttribute: "contestName",
	sortDirection: 1,

	sortCollection: function (attr) {
	  if(this.sortAttribute === attr){
      this.sortDirection *= -1; 
    } else {
      this.sortDirection = 1;
    }
    this.sortAttribute = attr;
	  this.sort();
    console.log(attr);
	},

	comparator: function(a, b) {
	  var a = a.get(this.sortAttribute),
	      b = b.get(this.sortAttribute);

	  if (a === b) return 0;

	  if (this.sortDirection === 1) {
	     return a > b ? 1 : -1;
	  } else {
	     return a < b ? 1 : -1;
	  }
	}



});