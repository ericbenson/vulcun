// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // this.set('contests', new Contests(params.contests));
    this.set('contests', params.contests);

    this.set('router', params.router);

    params.contests.on('singleContest', function(model){
        this.get('router').singleContest(model.attributes.id);
    },this);

    params.contests.on('homepage', function(model){
        this.get('router').homepage();
    },this);

  } 


});
