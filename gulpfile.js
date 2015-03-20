(function() {
	'use strict';

  /*Dependencies */
  var lib = require('./lib');
  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({lazy:false});
  var del = require('del');

  /*Tasks*/

  var tasks = lib.tasks;

  //=============DEV

  gulp
    .task('default',
      $.sequence( 'clean'
                , 'build:dev'
                , 'start:dev'
                ));


  //=============CLEAN

  gulp
    .task('clean', del.bind(null, ['build']));


  //=============BUILD

  gulp
    .task( 'js:dev'      , tasks.js.dev)
    .task( 'main:dev'    , tasks.main.dev)
    .task( 'css:dev'     , tasks.css.dev)
    .task( 'assets:dev'  , tasks.assets.dev)
    .task( 'build:dev'   ,
      $.sequence( 'js:dev'
                , 'main:dev'
                , 'css:dev'
                , 'assets:dev'
                ));

  //=============START

  gulp
    .task( 'vendor:dev' , tasks.vendor.dev)
    .task( 'inject:dev' , tasks.inject.dev)
    .task( 'server:dev' , tasks.server.dev)
    .task( 'watch:dev'  , tasks.watch.dev)
    .task ('start:dev'  ,
      $.sequence( 'vendor:dev'
                , 'inject:dev'
                , 'server:dev'
                , 'watch:dev'
                ));




})();