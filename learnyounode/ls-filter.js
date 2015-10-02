var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
  list.filter(function (fn) {
    return path.extname(fn) === '.' + process.argv[3]
  }).forEach(function (fn) {
    // forEachのcallbackは、
    // 要素の値・要素のインデックス・元のArrayオブジェクトが
    // 引数として渡されるため、
    // 要素の値のみを受け取る関数を噛ませる必要がある
    console.log(fn);
  });
});
