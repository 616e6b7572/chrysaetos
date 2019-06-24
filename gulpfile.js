var gulp = require('gulp');

var concat = require('gulp-concat');

var del = require('del');

gulp.task('scripts', function() {
  gulp.src('src/core/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('hello', function() {
  console.log('Hello 61');
});
