var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function (chunk) {
    if (ws.write(chunk) === false)
//根据.write方法的返回值来判断传入的数据是写入目标了，
//还是临时放在了缓存了
     {
        rs.pause();
    }
});

rs.on('end', function () {
    ws.end();
});

ws.on('drain', function () {
    rs.resume();
});
//根据drain事件来判断什么时候只写数据流
//已经将缓存中的数据写入目标，
//可以传入下一个待写数据了