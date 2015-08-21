var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var wiredep = require('wiredep').stream;
var karma = require('karma').Server;
var _ = require('underscore');
var $ = require('gulp-load-plugins')();


gulp.task('inject', function() {
  var injectScripts = gulp.src([
    './css/**/*.css',
    './src/app/**/*.js',
    '!./src/app/**/*.spec.js'
  ])
  .pipe($.angularFilesort);
  // {
  //   read: false
  // });
  // no need to read file, for speed up inject time
  // because this plugin(gulp.src) analyzes the contents of each file to determine sort order.
  // but gulp-angular-filesort depends on file contents, so don't use {read: false} here

  var injectOptions = {
    ignorePath: ['/src'],
    addRootSlash: false
  };

  return gulp.src('./src/index.html')
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep({
      directory: 'bower_components',
      exclude: [/jquery/]
    }))
    .pipe(gulp.dest('./build'));
});


gulp.task('tdd', function(done) {
  new karma({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});


gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: ['./build', './src'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
});

gulp.task('serve', ['browser-sync', 'inject'], function() {
  gulp.watch(['src/**/*.js', 'src/index.html', 'src/**/*.tpl.html'], browserSync.reload);
  // gulp.watch(['src/**/*.tpl.html'], browserSync.reload);
  // gulp.watch('src/**/*.tpl.html').on('change', browserSync.reload);
  // gulp.watch(['index.html'], browserSync.reload);
  // gulp.watch('src/**/*.*.js').on('change', browserSync.reload);
});
