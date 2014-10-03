var gulp = require('gulp');
var gulpBeautyWeb = require('./utils/node/gulp-beauty-web.js').beautify;
var beautify = require('js-beautify'); //.html;

gulp.task("prettyallhtml", function() {
  gulp.src(['./app/**/*.html', '!./app/thirdparty/**'])
    .pipe(gulpBeautyWeb(beautify.html))
    .pipe(gulp.dest('./app/'))
})

gulp.task("prettyalljs", function() {
  gulp.src(['./app/**/*.js', '!./app/thirdparty/**'])
    .pipe(gulpBeautyWeb(beautify.js))
    .pipe(gulp.dest('./app/'))
})

gulp.task("prettyallcss", function() {
  gulp.src(['./app/**/*.css', '!./app/thirdparty/**'])
    .pipe(gulpBeautyWeb(beautify.css))
    .pipe(gulp.dest('./app/'))
  gulp.src(['./style/**/*.css', '!./style/thirdparty/**'])
    .pipe(gulpBeautyWeb(beautify.css))
    .pipe(gulp.dest('./style/'))

})

gulp.task("prettyall", ["prettyallhtml", "pretyalljs", "prettyallcss"]);
