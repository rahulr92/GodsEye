   var fs = require("fs");
    var express = require("express");
    var app = express();

    app.use(express.static(__dirname + '/public'));
    app.get('/', function(req, res) {
        fs.readFile(__dirname + '/public/gyro.html', 'utf8', function(err, text){
        	console.log(text);
            res.send(text);
        });
    });
    app.listen(3005);