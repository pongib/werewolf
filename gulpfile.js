var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('serve', ['browser-sync'], function() {
  gulp.watch(['src/**/*.js', 'index.html', 'src/**/*.tpl.html'], browserSync.reload);
});
