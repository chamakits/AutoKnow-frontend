var gulp = require('gulp');
var gulpBeautifyHtml = require('./beautify-html.js').beautifyHtml;
var beautify_html = require('js-beautify').html;

gulp.task("default", function() {

  var sampleHtmlToPrettify = "<html><body><h1></h1>\
  <ol>\
    <li><p>\
    <a></a> \
    </p></li>\
  </ol> \
</body></html>"
  var prettyHtml = beautify_html(sampleHtmlToPrettify);
  console.log(prettyHtml);
});

gulp.task("prettyhtml", function(){
  console.log(gulpBeautifyHtml)
  gulp.src('./sampleHtml.html')
    .pipe(gulpBeautifyHtml(beautify_html))
    .pipe(gulp.dest('./dist/'))
})

gulp.task("prettyallhtml", function(){
  console.log(gulpBeautifyHtml)
  gulp.src('./app/**/*.html')
    .pipe(gulpBeautifyHtml(beautify_html))
    .pipe(gulp.dest('./app/'))
})
