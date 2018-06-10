const gulp = require('gulp');
// const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("public/css"));
});


// Move JS Files to src/js
gulp.task('js', function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("public/js"));
});

// Watch Sass & Server
gulp.task('serve', ['sass'], function(){
  // browserSync.init({
  //   server: "./src"
  // });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  //gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Move img to public/img
gulp.task('images', function(){
  return gulp.src(['src/img/*.*'])
    .pipe(gulp.dest("public/img"));
});

// Move index.html to public/
gulp.task('idx', function(){
  return gulp.src(['src/index.html'])
    .pipe(gulp.dest("public/"));
});

// Move Fonts Folder to src/fonts
gulp.task('fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("public/fonts"));
});

// Move Font Awesome CSS to src/css
gulp.task('fa', function(){
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("public/css"));
});

// gulp.task('default', ['js', 'serve', 'fa', 'fonts']);
gulp.task('default', ['js', 'sass', 'fa', 'images', 'idx', 'fonts']);
