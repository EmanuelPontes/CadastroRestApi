var app = require("../app");
var http = require("http");
var config = require("config");

var server = http.createServer(app);

var port = (process.env.PORT || config.get("server.port")); 


server.listen(port);

server.on('listening', () => {
    console.log("Listening to http://localhost:" + port);
});
