var require = require || '';
var express = require('express'), fs = require('fs');

var app = express.createServer(express.logger());

app.use('/css/',express.static(__dirname + '/css/'));

app.get('/', function (request, response) {
    fs.readFile('index.html', function (err, data) {
        if (err) {
            response.send("Error reading file");
            return;
        }
        response.send(data.toString());
    });

});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Listening on " + port);
});
