$(function(){

	var contests = new Contests();
  var currentView;
  var setCurrentView = function(view){
    currentView = view;
  };

  // set up model objects
    contests.fetch({reset:true, success: function(){

      // Instantiate the router
      var app_router = new AppRouter;

      var app = new AppModel({contests: contests, router: app_router});

      // build a view for the top level of the whole app
      var appView = new AppView({model: app});

      app_router.on('route:getPost', function (id) {
          setCurrentView(function(){
            // Note the variable in the route definition being passed in here
            var contestView = new SingleContestView({model: app, id: id});
            $('.app').children().detach();          
            $('.app').append(contestView.render());            
          });
          currentView();

      });
      app_router.on('route:defaultRoute', function (actions) {
        setCurrentView(function(){

          // put the view onto the screen
          $('.app').children().detach();
          $('.app').append(appView.render());
        });
        currentView();
      });
      // Start Backbone history a necessary step for bookmarkable URL's
      Backbone.history.start();

    }
  });

  //set up socket
  var socket = io();
  socket.on('increment', function(model){
    var updated = contests.get(model.id); 
    updated.set('currentEntries',model.currentEntries);    
    currentView();
    updated.highlight();
  })

});