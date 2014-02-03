var file = require('file-utils');
var util = require('gulp-util');
var http = require('http');
var open = require('open');
var connect = require('connect');

module.exports = function (opt) {
  opt = opt || {};
  if (!opt.root) opt.root = 'app';
  if (!opt.port) opt.port = 3000;
  if (opt.open) {
    if (!opt.open) opt.open = {};
    if (!opt.open.file) opt.open.file = 'index.html';
    if (!opt.open.browser) opt.open.browser = 'chrome';
  }

  if (!file.isDir(opt.root)) {
    util.log(util.colors.red('Folder ' + opt.root + ' does not exist!'));
    return false;
  }

  return function () {
    var app = connect();
    app.use(connect.static(opt.root));

    if (opt.rewrite) {
      app.use(function (req, res) {
        res.end(file.read(opt.root + "/" + opt.rewrite));
      });
    }

    http.createServer(app).listen(opt.port, function () {
      util.log(util.colors.green('Server started on ' + opt.port + ' port'));
      if (opt.open) {
        open('http://localhost:' + opt.port + '/' + opt.open.file, opt.open.browser);
        util.log(util.colors.green('Opened ' + opt.open.file + ' in ' + opt.open.browser));
      }
    });
  };
};
