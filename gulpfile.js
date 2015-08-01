var gulp = require('gulp');
var browserSync = require('browser-sync');
var karma = require('karma').Server;


gulp.task('tdd', function(done) {
  new karma({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});


gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('serve', ['browser-sync', 'tdd'], function() {
  gulp.watch(['src/**/*.js', 'index.html', 'src/**/*.tpl.html'], browserSync.reload);
});
