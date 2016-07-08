var gulp = require('gulp'),
    clean = require('gulp-clean'),
    deploy = require('gulp-gh-pages');

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

gulp.task('deploy', function() {
  return gulp.src('dist/**/*')
    .pipe(deploy());
});

gulp.task('default', ['clean']);
