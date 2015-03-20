module.exports = function($, gulp, paths){

	return{
		dev: function(){
			return $.nodemon({ script: paths.server.root, ext: 'js css html', env:{'NODE_ENV':'development'} })
			  .on('restart', function () {
			    console.log('restarted!')
			  });
		}, 
		stage: function(){
			return $.nodemon({ script: paths.server.root, ext: 'js', env:{'NODE_ENV':'stage'} })
			  .on('restart', function () {
			   console.log('restarted!')
		  	  });
		}
	}
};