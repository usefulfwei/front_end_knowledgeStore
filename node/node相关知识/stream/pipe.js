/**
 * Created by jwdn on 2016/11/29.
 */
/*管道流*/
var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log('程序执行完毕');