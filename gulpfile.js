var gulp = require('gulp');
var gulpBeautyWeb = require('./utils/node/gulp-beauty-web.js').beautify;
var beautify = require('js-beautify'); //.html;

function beautifyFilesClosure(patterns, beautifyFunction, destination) {
  return function() {
    gulp.src(patterns)
      .pipe(gulpBeautyWeb(beautifyFunction))
      .pipe(gulp.dest(destination));
  };
}
var patterns = {
  html: ['./app/**/*.html', '!./app/vendor/**'],
  js: ['./app/**/*.js', '!./app/vendor/**'],
  css: ['./app/**/*.css', '!./app/vendor/**']
};
var rootDestination= "./app";
// gulp.task("prettyallhtml", function() {
//   // gulp.src(['./app/**/*.html', '!./app/thirdparty/**'])
//   //   .pipe(gulpBeautyWeb(beautify.html))
//   //   .pipe(gulp.dest('./app/'))
//   beautifyFilesClosure(patterns.html, beautify.html,rootDestination);
// });
var prettyhtml = beautifyFilesClosure(patterns.html, beautify.html,rootDestination);
gulp.task("prettyallhtml", prettyhtml);

// gulp.task("prettyalljs", function() {
//   // gulp.src(['./app/**/*.js', '!./app/vendor/**'])
//   //   .pipe(gulpBeautyWeb(beautify.js))
//   //   .pipe(gulp.dest('./app/'))
//   beautifyFilesClosure(patterns.js, beautify.js,rootDestination);
// });
var prettyjs = beautifyFilesClosure(patterns.js, beautify.js,rootDestination);
gulp.task("prettyalljs", prettyjs);

// gulp.task("prettyallcss", function() {
//   // gulp.src(['./app/**/*.css', '!./app/vendor/**'])
//   //   .pipe(gulpBeautyWeb(beautify.css))
//   //     .pipe(gulp.dest('./app/'));
//   beautifyFilesClosure(patterns.css, beautify.css,rootDestination);
// });
var prettycss = beautifyFilesClosure(patterns.css, beautify.css,rootDestination);
gulp.task("prettyallcss", prettycss);

gulp.task("prettyall", ["prettyallhtml", "pretyalljs", "prettyallcss"]);

gulp.task("watchall", function(){
  gulp.watch(patterns.html, prettyhtml);

  gulp.watch(patterns.css, prettycss);

gulp.watch(patterns.js, prettyjs);
gulp.watch("gulpfile.js", beautifyFilesClosure("gulpfile.js", beautify.js, "./."));
});
