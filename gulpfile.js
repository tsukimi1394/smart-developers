var gulp         = require('gulp'),
postcss      = require('gulp-postcss'),
sass         = require('gulp-sass'),
autoprefixer = require('autoprefixer'),
browser      = require('browser-sync'),
sourcemaps   = require('gulp-sourcemaps'),
pug          = require('gulp-pug'),
gcmq          = require('gulp-group-css-media-queries'),
iconfont     = require('gulp-iconfont'),
consolidate  = require('gulp-consolidate');

gulp.task('views', function buildHTML() {
  return gulp.src('views/**/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('build:sass', function () {
 return gulp.src('scss/**/*.scss')
 .pipe(sourcemaps.init())
 .pipe(sass().on('error', sass.logError))
 .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
 .pipe(gcmq())
 .pipe(sourcemaps.write('.'))
 .pipe(gulp.dest('./css'))
 .pipe(browser.stream({match: '**/*.css'}));
});

gulp.task("build:icons", function() {
   return gulp.src(["./assets/icons/*.svg"])//path to svg icons
   .pipe(iconfont({
    fontName: "svg-icons",
     formats: ["ttf", "eot", "woff", "svg"],//зависит от браузеров, если последние браузеры то достаточно woff, woff2
     centerHorizontally: true,
     fixedWidth: true,
     normalize: true
   }))
     .on("glyphs", function (glyphs) {     //добавление иконки   
        gulp.src("./assets/icons/util/*.scss") // Template for scss files
       .pipe(consolidate("lodash", { //template language
         glyphs: glyphs,
         fontName: "svg-icons",
         fontPath: "../fonts/"
       }))
       .pipe(gulp.dest("./assets/scss/icons/"));//generated scss files with classes
     })
     .pipe(gulp.dest("./fonts/"));//icon font destination
   });

 // Starts a BrowerSync instance
 gulp.task('serve', ['build:sass','views'], function(){
   browser.init({
     server: {
       baseDir: ["./"],
       index: "./index.html"
     }
   });
 });

 // Runs all of the above tasks and then waits for files to change
 gulp.task('default', ['serve'], function() {
   gulp.watch(['scss/**/*.scss'], ['build:sass']);
   gulp.watch(['views/**/*.pug'], ['views']);  
   gulp.watch('./**/*.html').on('change', browser.reload);
 });