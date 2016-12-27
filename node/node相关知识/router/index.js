/**
 * Created by jwdn on 2016/11/30.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);