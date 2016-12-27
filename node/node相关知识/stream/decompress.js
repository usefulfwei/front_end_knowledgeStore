var fs = require('fs');
var zlib  = require('zlib');

fs.createReadStream('input.txt.gz').pipe(
    (zlib.createGunzip()).pipe(
        fs.createWriteStream('decompress.txt')
    )
);

console.log('执行完成');