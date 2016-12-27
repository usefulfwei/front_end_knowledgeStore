fs.readFile(pathname, function (err, data) {
    if (err) {
        // Deal with error.
    } else {
        // Deal with data.
    }
});
/*基本上所有fs模块API的回调参数都有两个。
第一个参数在有错误发生时等于异常对象，
第二个参数始终用于返回API方法执行结果。*/