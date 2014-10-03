var gulp = require('gulp');
var gulpBeautyWeb = require('./gulp-beauty-web.js').beautify;
var beautify = require('js-beautify'); //.html;

gulp.task("prettyallhtml", function() {
  console.log(gulpBeautifyHtml)
  gulp.src('./app/**/*.html')
    .pipe(gulpBeautifyHtml.beautifyHtml(beautify.html))
    .pipe(gulp.dest('./app/'))
})

gulp.task("prettyalljs", function() {
  console.log(gulpBeautifyHtml)
  gulp.src('./app/**/*.js')
    .pipe(gulpBeautifyHtml.beautifyHtml(beautify.js))
    .pipe(gulp.dest('./app/'))
})

gulp.task("prettyallcss", function() {
  console.log(gulpBeautifyHtml)
  gulp.src('./app/**/*.css')
    .pipe(gulpBeautifyHtml.beautifyHtml(beautify.css))
    .pipe(gulp.dest('./app/'))
  gulp.src('./style/**/*.css')
    .pipe(gulpBeautifyHtml.beautifyHtml(beautify.css))
    .pipe(gulp.dest('./app/'))

})
