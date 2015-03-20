module.exports = function($, gulp, paths){

  return {
    dev: function(){
      var source = gulp.src(paths.client.css);
      var dest   = gulp.dest(paths.build.dir.css);

      return source
        .pipe($.concat('index.css'))
        .pipe( dest );
    },
    stage: function(){
      var source = gulp.src(paths.client.css);
      var dest   = gulp.dest(paths.build.dir.css);

      return source
        .pipe($.concat('index.min.css'))
        .pipe($.minifyCss())
        .pipe( dest );
    }
  };
};