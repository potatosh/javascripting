var module = require('./moduler-module');

module(process.argv[2], process.argv[3], function (err, data) {
  // エラーに対する処理を忘れない
  if (err)
    return console.error('There was an error:', err);

  data.forEach(function (fn) {
    console.log(fn);
  });
});
