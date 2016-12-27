/**
 * Created by jwdn on 2016/11/29.
 */
var fs = require('fs');
var zlib  = require('zlib');

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(
    fs.createWriteStream('input.txt.gz')
);

console.log('执行完成');