var gulp = require('gulp'),
    clean = require('gulp-clean');

var bases = {
  src: 'src/',
  dist: 'dist/'
};

var paths = {
  js: 'js/',
  images: 'images/',
  css: 'css/'
};

gulp.task('clean', function() {
  return gulp.src(bases.dist)
  .pipe(clean());
});

gulp.task('default', ['clean']);
