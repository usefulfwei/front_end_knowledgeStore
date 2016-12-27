/*方法一：将代码内联到入口配置文件webpakc.config.js文件entry属性里面，
并且添加new webpack.HotModuleReplacementPlugin()热点插件*/

var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

module.exports = {

    //项目的文件夹 可以直接用文件夹名称 默认会找index.js ，也可以确定是哪个文件名字
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        './src/index.js'
    ],

    //输出的文件名,合并以后的js会命名为bundle.js
    output: {
        path: path.join(__dirname, "dist/"),
        publicPath: "http://localhost:8088/dist/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
//这种方式比较容易，但是不够灵活，需要添加相关的热点插件。