var foo1 = require('./foo');
var foo2 = require('./foo.js');
var foo3 = require('/home/user/foo');
var foo4 = require('/home/user/foo.js');
/*相对路径（以./开头），
或者是绝对路径（以/或C:之类的盘符开头）*/

var data = require('./data.json');