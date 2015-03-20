module.exports = function($, gulp, paths){

	return {
		dev: function(){
			var source = gulp.src(paths.client.js);
      var dest   = gulp.dest(paths.build.dir.corejs);

      return source
        .pipe( dest );
		},
    stage: function(){
      var source = gulp.src(paths.client.js);
      var dest   = gulp.dest(paths.build.dir.corejs);

      return source
        .pipe($.concat('app.min.js'))
        .pipe($.uglify())
        .pipe( dest );
    }
	}
};