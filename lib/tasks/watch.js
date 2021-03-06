module.exports = function($, gulp, paths){
	return {
    dev: function(){
      $.livereload();
      $.livereload.listen();
      gulp.watch(paths.client.js,    ['js:dev'     , $.livereload.reload]);
      gulp.watch(paths.client.main,  ['main:dev'     , $.livereload.reload]);
      gulp.watch(paths.client.css,   ['css:dev'    , $.livereload.reload]);
      gulp.watch(paths.client.index, ['inject:dev' , $.livereload.reload]);
      gulp.watch(paths.client.html,  ['html:dev'   , $.livereload.reload]);

    },
    stage: function(){
      $.livereload();
      $.livereload.listen();
      gulp.watch(paths.client.js,    ['js:dev'     , $.livereload.reload]);
      gulp.watch(paths.client.main,  ['main:dev'     , $.livereload.reload]);
      gulp.watch(paths.client.css,   ['css:dev'    , $.livereload.reload]);
      gulp.watch(paths.client.index, ['inject:dev' , $.livereload.reload]);
      gulp.watch(paths.client.html,  ['html:dev'   , $.livereload.reload]);

    }
	}
};