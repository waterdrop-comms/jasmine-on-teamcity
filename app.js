var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
    res.send('Hello Mom');
});

var server = app.listen(3000,'10.2.20.53', function(){
    console.log('Magic is happening on port 3000');
});

exports.closeServer = function(){
    server.close();
};
