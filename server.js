
require('dotenv').load();

var express = require('express');
var bodyParser = require('body-parser');
var verify = require('./security');
var app = express();

app.use(bodyParser.json({
  verify: verify
}));

require('./app')(app);

//Set Port
var port = process.env.PORT;
app.set('port', port);

// Listen on the specified port
app.listen(port, function() {
  console.log('Client server listening on port ' + port);
});
