var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-beauty-web';

console.log("Loaded!");

// plugin level function (dealing with files)
function beautify(beautifyFunction, options) {
    // creating a stream through which each file will pass
    var stream = through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            // do nothing if no contents

            this.push(file);
            return cb();
            // return;
        }

        if (file.isBuffer()) {
            // gutil.log("Checking file:"+ file.path)
            var originalString = file.contents.toString();
            if ((!originalString) || (originalString.length === 0)) {
                gutil.log("Should do NOTHING.  Picked original file as empty.");
                // this.push(file);
                // return cb();
                return gutil.noop();
            }
            var prettyString = beautifyFunction(originalString, options);

            // if ((!prettyString) || (0 === prettyString.length)) {
            if (!prettyString || 0 === prettyString.length) {
                gutil.log("Original string length:" + originalString.length);
                gutil.log("Pretty string length:" + prettyString.length);
                gutil.log("Something has gone ", gutil.colors.red("wildy"), " wrong.");
                gutil.log("File ", gutil.colors.cyan(file.path), " when prettified was emptied.  Must debug.");
                gutil.log("Leaving file unchanged.");
                this.push(file);
                return cb();
            }
            if (originalString.localeCompare(prettyString) !== 0) {
                gutil.log("File changed:", gutil.colors.cyan(file.path));
            }
            file.contents = new Buffer(prettyString);
        }

        if (file.isStream()) {
            return cb(new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
        }

        this.push(file);

        return cb();
    });

    // returning the file stream
    return stream;
};

// exporting the plugin main function
module.exports.beautify = beautify;