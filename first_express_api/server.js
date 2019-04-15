var express = require('express');
var routes = require('./routes/routes.js');

var app = express();
app.use('/api', routes);

var server = app.listen(process.env.PORT || 3000, function () {
    console.log('app running on port', server.address().port)
});