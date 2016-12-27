new HtmlWebpackPlugin({    
	  title: 'My App',//设置title的名字 
filename: 'admin.html',//设置这个html的文件名  
template:'header.html',//要使用的模块的路径  
inject: 'body',//把模板注入到哪个标签后 'body' 
favicon:'./images/favico.ico',//给html添加一个favicon  './images/favico.ico'
minify:true,//是否压缩  true false 
hash:true,//是否hash化 true false , 
cache:false,//是否缓存, 
showErrors:false,//是否显示错误,  
xhtml:false //是否自动关闭标签 默认false 
    })

var webpack = require('webpack')
var WebpackDevServer = require("webpack-dev-server")
var path = require('path')
var CURRENT_PATH = path.resolve(__dirname)
 // 获取到当前目录var ROOT_PATH = path.join(__dirname, '../')
 // 项目根目录var MODULES_PATH = path.join(ROOT_PATH, './node_modules')
 // node包目录var BUILD_PATH = path.join(ROOT_PATH, './dist')
 // 最后输出放置公共资源的目录var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {    //项目的文件夹 可以直接用文件夹名称 默认会找index.js ，也可以确定是哪个文件名字  
  entry: {  

  app: ['./src/js/index.js'],
  vendors: ['jquery', 'moment']
   //需要打包的第三方插件 
      }, 
         //输出的文件名,合并以后的js会命名为bundle.js
             output: {
  path: path.join(__dirname, "dist/"),
  publicPath: "http://localhost:8088/dist/",
  filename: "bundle_[name].js"    },    devServer: {
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
  new webpack.optimize.CommonsChunkPlugin({

// 与 entry 中的 vendors 对应

name: 'vendors',

// 输出的公共资源名称

filename: 'common.bundle.js',

// 对所有entry实行这个规则

minChunks: Infinity
  }),
  // 把jquery作为全局变量插入到所有的代码中

  // 然后就可以直接在页面中使用jQuery了
  new webpack.ProvidePlugin({

$: 'jquery',

jQuery: 'jquery',

'window.jQuery': 'jquery'
  }),
  //生成index.html页面
  new HtmlWebpackPlugin({

title: '68kejian.com',

filename: 'index.html',

template:'header.html',

inject: 'body',

 favicon:'./images/favico.ico',

minify: false,

hash: true,

cache: false,

showErrors: false
  })
    ],    externals: {
  // require('data') is external and available

  //  on the global var data
  'data': 'data'    }, 
     devtool: 'source-map'}
	