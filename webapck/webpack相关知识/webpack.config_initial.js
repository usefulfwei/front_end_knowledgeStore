var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {

    //页面入口文件配置
    entry: {
        index: './src/index.js'
    },
    //入口文件输出配置
    output: {

        path: __dirname,
        filename: "bundle.js"
    },
   //定义相关的别名，方便以后使用   
    resolve: {
        root: 'modules'
        /*alias: {
            'mod/slider': '/path/mods/mod/slider/0.0.5',
            'mod/footer': '/path/mods/mod/footer/0.0.2',
            'mod/slider/0.0.3': '/path/mods/mod/slider/0.0.3',
            'mod/header': '/path/mods/mod/header/0.0.1',
            'mod/slider/0.0.1': '/path/mods/mod/slider/0.0.1'
        }*/   
    }};


    /*$ webpack --config XXX.js //使用另一份配置文件（比如webpack.config2.js）来打包

$ webpack --watch //监听变动并自动打包

$ webpack -p//压缩混淆脚本，这个非常非常重要！

$ webpack -d//生成map映射文件，告知哪些模块被最终打包到哪里了其中的 
$ webpack --progress //显示进度条
$ webpack --color //添加颜色
*/