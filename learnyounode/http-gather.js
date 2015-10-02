var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function (response) {
  // dataイベントを検知して毎回データチャンクをblに流してくれる
  response.pipe(bl(function (err, data) {
    // responseのendイベントを検知した時に実行される
    if (err)
      return console.error(err);
    console.log(data.length);
    console.log(data.toString());
  }));
});
