var express = require('express');
var app = express();


app.use('/', express.static(__dirname));
// or can use with no path specific because
// '/' it will default of app.use()
// app.use(express.static(__dirname));

var server = app.listen(3000, function () {
  console.log('listen on http://localhost:%s',server.address().port);
});
