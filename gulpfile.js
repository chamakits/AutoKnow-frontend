var gulp = require('gulp');
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
