/**
 * Created by jwdn on 2016/12/1.
 */
var fs = require("fs")

/*Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，
例如读取文件内容的函数有异步的 fs.readFile()
和同步的 fs.readFileSync()。*/

/*建议大家是用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。*/
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

////////////////////////////////////////////////////////
/*以下为在异步模式下打开文件的语法格式：
 fs.open(path, flags[, mode], callback)
 path - 文件的路径。
 flags - 文件打开的行为。具体值详见下文。
 mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
 callback - 回调函数，带有两个参数如：callback(err, fd)。*/

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("文件打开成功！");
});

//////////////////////////////////////////////
/*获取文件信息
* fs.stat(path, callback)
* path - 文件路径。
 callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
 fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
 可以通过stats类中的提供方法判断文件的相关属性。*/



fs.stat('/Users/jwdn/Desltop/node_new/file_fs.js', function (err, stats) {
  console.log(stats.isFile()); 		//true
})

console.log("准备打开文件！");
fs.stat('input.txt', function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("读取文件信息成功！");

  // 检测文件类型
  console.log("是否为文件(isFile) ? " + stats.isFile());
  console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});

/*stats.isFile()	如果是文件返回 true，否则返回 false。
 stats.isDirectory()	如果是目录返回 true，否则返回 false。
 stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
 stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
 stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
 stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
 stats.isSocket()	如果是 Socket 返回 true，否则返回 false。*/

//////////////////////////////////////////////////////////////////
/*写入文件

 fs.writeFile(filename, data[, options], callback)*/
/*
* path - 文件路径。
 data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
 options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
 callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回*/

console.log("准备写入文件");
fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("数据写入成功！");
  console.log("--------我是分割线-------------")
  console.log("读取写入的数据！");
  fs.readFile('input.txt', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("异步读取文件数据: " + data.toString());
  });
});

/*读取文件

 fs.read(fd, buffer, offset, length, position, callback)*/

/*fd - 通过 fs.open() 方法返回的文件描述符。
 buffer - 数据写入的缓冲区。
 offset - 缓冲区写入的写入偏移量。
 length - 要从文件中读取的字节数。
 position - 文件读取的起始位置，如果 position 的值为 null，
 则会从当前文件指针的位置读取。

 callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息，
 bytesRead 表示读取的字节数，buffer 为缓冲区对象。*/


var buf = new Buffer(1024);

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("文件打开成功！");
  console.log("准备读取文件：");
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      console.log(err);
    }
    console.log(bytes + "  字节被读取");

    // 仅输出读取的字节
    if(bytes > 0){
      console.log(buf.slice(0, bytes).toString());
    }
  });
});

////////////////////////////////////////////////////////////////////
/*关闭文件
 以下为异步模式下关闭文件的语法格式：
 fs.close(fd, callback)

 fd - 通过 fs.open() 方法返回的文件描述符。
 callback - 回调函数，没有参数。*/

var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("文件打开成功！");
  console.log("准备读取文件！");
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      console.log(err);
    }
    // 仅输出读取的字节
    if(bytes > 0){
      console.log(buf.slice(0, bytes).toString());
    }

    // 关闭文件
    fs.close(fd, function(err){
      if (err){
        console.log(err);
      }
      console.log("文件关闭成功");
    });
  });
});

////////////////////////////////////////////////////////
/*截取文件
 以下为异步模式下截取文件的语法格式：
 fs.ftruncate(fd, len, callback)

 fd - 通过 fs.open() 方法返回的文件描述符。
 len - 文件内容截取的长度。
 callback - 回调函数，没有参数。*/

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("文件打开成功！");
  console.log("截取10字节后的文件内容。");

  // 截取文件
  fs.ftruncate(fd, 10, function(err){
    if (err){
      console.log(err);
    }
    console.log("文件截取成功。");
    console.log("读取相同的文件");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
        console.log(err);
      }

      // 仅输出读取的字节
      if(bytes > 0){
        console.log(buf.slice(0, bytes).toString());
      }

      // 关闭文件
      fs.close(fd, function(err){
        if (err){
          console.log(err);
        }
        console.log("文件关闭成功！");
      });
    });
  });
});

//////////////////////////////////////////////////////////////////////////////////
/*删除文件
 语法
 以下为删除文件的语法格式：
 fs.unlink(path, callback)

 path - 文件路径。
 callback - 回调函数，没有参数。*/
console.log("准备删除文件！");
fs.unlink('input.txt', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("文件删除成功！");
});

/////////////////////////////////////////////////////////////////
/*创建目录
 语法
 以下为创建目录的语法格式：
 fs.mkdir(path[, mode], callback)

 path - 文件路径。
 mode - 设置目录权限，默认为 0777。
 callback - 回调函数，没有参数。*/
console.log("创建目录 /tmp/test/");
fs.mkdir("/tmp/test/",function(err){
  if (err) {
    return console.error(err);
  }
  console.log("目录创建成功。");
});

/*读取目录
 语法
 以下为读取目录的语法格式：
 fs.readdir(path, callback)
 path - 文件路径。
 callback - 回调函数，
 回调函数带有两个参数err, files，
 err 为错误信息，
 files 为 目录下的文件数组列表。*/

console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
  if (err) {
    return console.error(err);
  }
  files.forEach( function (file){
    console.log( file );
  });
});


/*删除目录
 语法
 以下为删除目录的语法格式：
 fs.rmdir(path, callback)

 path - 文件路径。
 callback - 回调函数，没有参数。
 */

console.log("准备删除目录 /tmp/test");
fs.rmdir("/tmp/test",function(err){
  if (err) {
    return console.error(err);
  }
  console.log("读取 /tmp 目录");
  fs.readdir("/tmp/",function(err, files){
    if (err) {
      return console.error(err);
    }
    files.forEach( function (file){
      console.log( file );
    });
  });
});
