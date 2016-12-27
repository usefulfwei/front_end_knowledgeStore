var server = require("./start2");
var router = require("./router");

server.start(router.route);