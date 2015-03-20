var AppRouter = Backbone.Router.extend({
    routes: {
        "posts/:id": "getPost",
        "*actions": "defaultRoute" // Backbone will try to match the route above first
    },

    homepage: function(){
        this.navigate('#/');
    }, 

    singleContest: function(id){
        this.navigate('#/posts/'+id);
    }


});
