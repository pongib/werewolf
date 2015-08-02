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
      baseDir: './',
      browser: "google chrome"
    }
  });
});

gulp.task('serve', ['browser-sync'], function() {
  gulp.watch(['src/**/*.js', 'index.html', 'src/**/*.tpl.html'], browserSync.reload);
  // gulp.watch(['src/**/*.tpl.html'], browserSync.reload);
  // gulp.watch('src/**/*.tpl.html').on('change', browserSync.reload);
  // gulp.watch(['index.html'], browserSync.reload);
  // gulp.watch('src/**/*.*.js').on('change', browserSync.reload);
});
