var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'src')));
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname,'css')));
// app.use('/', express.static(__dirname));
// or can use with no path specific because
// '/' it will default of app.use()
// app.use(express.static(__dirname));

var server = app.listen(3000, function () {
  console.log('listen on http://localhost:%s',server.address().port);
});
