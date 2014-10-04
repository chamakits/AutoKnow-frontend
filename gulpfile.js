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
    css: ['./app/**/*.css', '!./app/vendor/**'],
    gulp: ["gulpfile.js"]
};
var rootDestination = "./app";
var taskFunctions = {
    html: beautifyFilesClosure(patterns.html, beautify.html, rootDestination),
    js: beautifyFilesClosure(patterns.js, beautify.js, rootDestination),
    css: beautifyFilesClosure(patterns.css, beautify.css, rootDestination),
    gulp: beautifyFilesClosure("gulpfile.js", beautify.js, "./.")
}

gulp.task("prettyallhtml", taskFunctions.prettyhtml);

gulp.task("prettyalljs", taskFunctions.prettyjs);

gulp.task("prettyallcss", taskFunctions.prettycss);

gulp.task("prettyall", ["prettyallhtml", "pretyalljs", "prettyallcss"]);

gulp.task("watchall", function() {
    gulp.watch(patterns.html, taskFunctions.html);

    gulp.watch(patterns.css, taskFunctions.css);

    gulp.watch(patterns.js, taskFunctions.js);

    // gulp.watch(patterns.gulp, taskFunctions.gulp);
});
