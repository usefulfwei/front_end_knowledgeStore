var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
var ROOT_PATH = path.join(__dirname, '../'); // 项目根目录
var MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目录
var BUILD_PATH = path.join(ROOT_PATH, './dist'); // 最后输出放置公共资源的目录


module.exports = {

    //项目的文件夹 可以直接用文件夹名称 默认会找index.js ，也可以确定是哪个文件名字
    entry: {
        app: ['./src/index.js'],
        login: ['./src/login.js'],
        vendors: ['jquery', 'moment'] //需要打包的第三方插件

    },

    //输出的文件名,合并以后的js会命名为bundle.js
    output: {
        path: path.join(__dirname, "dist/"),
        publicPath: "http://localhost:8088/dist/",
        filename: "bundle_[name].js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "./",
        quiet: false, //控制台中不输出打包的信息
        noInfo: false,
        hot: true, //开启热点
        inline: true, //开启页面自动刷新
        lazy: false, //不启动懒加载
        progress: true, //显示打包的进度
        watchOptions: {
            aggregateTimeout: 300
        },
        port: '8088' //设置端口号
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
        //提取公共部分资源
        //CommonsChunkPlugin是一个对象，所以使用的时候要 进行实例化
        new webpack.optimize.CommonsChunkPlugin({
            // 与 entry 中的 vendors 对应
            name: 'vendors',
            // 输出的公共资源名称
            filename: 'common.bundle.js',
            // 对所有entry实行这个规则
            minChunks: Infinity
        }),
        //ProvidePlugin插件主要是进行设置全局模块
         new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
/*
CommonsChunkPlugin 常用参数：
name:与 entry 中的键对应
filename:公共文件的输出名字
minChunks ：公共模块被使用的最小次数。比如配置为3，
也就是同一个模块只有被3个以外的页面同时引用时才会被提取出来作为common chunks。
minSize：作用类似于minChunks，只不过这里控制的文件大小。*/
    devtool: 'source-map'

};
