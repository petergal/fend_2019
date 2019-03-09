var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var appDir = './2 - The Building Blocks/9 - Common Responsive' +
  ' Patterns/11. Project Update Part 2/workspace/Exercise';
/*
gulp.task("styles", function () {
  gulp.src("sass/!**!/!*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});

//Watch task
gulp.task('default',function() {
  gulp.watch('sass/!**!/!*.scss',['styles']);
});*/


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: appDir,
  });

  gulp.watch(`${appDir}/*.css`).on('change', browserSync.reload);

  gulp.watch(`${appDir}/*.html`).on('change', browserSync.reload);

  gulp.watch(`${appDir}/scss/*.scss`, ['sass']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
