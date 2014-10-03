var gulp = require('gulp');
var gulpBeautyWeb = require('./gulp-beauty-web.js').beautify;
var beautify = require('js-beautify'); //.html;

gulp.task("prettyallhtml", function() {
  gulp.src('./app/**/*.html')
    .pipe(gulpBeautyWeb.beautifyHtml(beautify.html))
    .pipe(gulp.dest('./app/'))
})

gulp.task("prettyalljs", function() {
  gulp.src('./app/**/*.js')
    .pipe(gulpBeautyWeb(beautify.js))
    .pipe(gulp.dest('./app/'))
})

gulp.task("prettyallcss", function() {
  gulp.src('./app/**/*.css')
    .pipe(gulpBeautyWeb(beautify.css))
    .pipe(gulp.dest('./app/'))
  gulp.src('./style/**/*.css')
    .pipe(gulpBeautyWeb(beautify.css))
    .pipe(gulp.dest('./app/'))

})
