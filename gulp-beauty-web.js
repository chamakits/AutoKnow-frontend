var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-beauty-web';

function prefixStream(prefixText) {
  var stream = through();
  stream.write(prefixText);
  return stream;
}
console.log("Loaded!")

// plugin level function (dealing with files)
function beautify(beautifyFunction, options) {
  // creating a stream through which each file will pass
  var stream = through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // do nothing if no contents
    }

    if (file.isBuffer()) {
      var prettyString = beautifyFunction(file.contents.toString(),options);
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
