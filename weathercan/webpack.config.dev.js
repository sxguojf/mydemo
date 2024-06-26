"use strict";

var path = require("path");

var webpack = require("webpack");

var HtmlWebPackPlugin = require("html-webpack-plugin");

var CopyWebpackPlugin = require("copy-webpack-plugin"); //const ProgressBarPlugin = require("progress-bar-webpack-plugin");


module.exports = {
  entry: {
    main: path.resolve(__dirname, "./app/index.js"),
    demo1: path.resolve(__dirname, "./demo/demo1/index.js"),
    demo2: path.resolve(__dirname, "./demo/demo2/index.js"),
    demo3: path.resolve(__dirname, "./demo/demo3/index.js"),
    demo4: path.resolve(__dirname, "./demo/demo4/index.js"),
    demo5: path.resolve(__dirname, "./demo/demo5/index.js"),
    demo6: path.resolve(__dirname, "./demo/demo6/index.js"),
    demo7: path.resolve(__dirname, "./demo/demo7/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name]-bundle.js" //publicPath: '.',

  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|lib)/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.worker\.js$/,
      //解析worker
      use: {
        loader: "worker-loader",
        options: {
          inline: true
        }
      }
    }, {
      test: /\.ts?$/,
      //解析ts
      use: "ts-loader",
      exclude: /node_modules/
    }, {
      test: /.css$/,
      //解析css, 并把css添加到html的style标签里
      use: ["style-loader", "css-loader"]
    }, {
      test: /.(jpg|png|gif|svg|ttf)$/,
      //解析图片
      use: ["url-loader?limit=8192&name=./[name].[ext]"]
    }, {
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"]
    }]
  },
  resolve: {
    //import文件没有后缀时，自动加上以下后缀尝试
    extensions: [".js", "ts", ".json", ".css", "less"],
    //核心库和插件别名
    alias: {
      "@lmet": path.resolve("leaflet.met"),
      "@plugin": path.resolve("plugin")
    }
  },
  // optimization: {
  //     splitChunks: {
  //         chunks: "all",
  //     },
  // },
  // devtool: "cheap-module-eval-source-map",
  devServer: {
    // compress: true,
    //host: '0.0.0.0',
    port: 3721 // hot: true,
    // open: true, // 自动拉起浏览器

  },
  plugins: [// 为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题
  // 可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
  new HtmlWebPackPlugin({
    filename: "index.html",
    //输出的html的文件名称
    template: "./app/index.html",
    //html模板所在的文件路径
    favicon: "./app/image/sun.ico",
    //favicon图标所在路径
    // hash: true, //是否给每个js文件引用加hash码
    chunks: ["main"]
  }), new HtmlWebPackPlugin({
    filename: "snap.html",
    //输出的html的文件名称
    template: "./plugin/snapPrint/snap.html",
    //html模板所在的文件路径
    inject: false,
    //不添加js文件
    chunks: ["snap"]
  }), new HtmlWebPackPlugin({
    filename: "demo1.html",
    //输出的html的文件名称
    template: "./demo/demo1/index.html",
    //html模板所在的文件路径
    chunks: ["demo1"]
  }), new HtmlWebPackPlugin({
    filename: "demo2.html",
    //输出的html的文件名称
    template: "./demo/demo2/index.html",
    //html模板所在的文件路径
    chunks: ["demo2"]
  }), new HtmlWebPackPlugin({
    filename: "demo3.html",
    //输出的html的文件名称
    template: "./demo/demo3/index.html",
    //html模板所在的文件路径
    chunks: ["demo3"]
  }), new HtmlWebPackPlugin({
    filename: "demo4.html",
    //输出的html的文件名称
    template: "./demo/demo4/index.html",
    //html模板所在的文件路径
    chunks: ["demo4"]
  }), new HtmlWebPackPlugin({
    filename: "demo5.html",
    //输出的html的文件名称
    template: "./demo/demo5/index.html",
    //html模板所在的文件路径
    chunks: ["demo5"]
  }), new HtmlWebPackPlugin({
    filename: "demo6.html",
    //输出的html的文件名称
    template: "./demo/demo6/index.html",
    //html模板所在的文件路径
    chunks: ["demo6"]
  }), new HtmlWebPackPlugin({
    filename: "demo7.html",
    //输出的html的文件名称
    template: "./demo/demo7/index.html",
    //html模板所在的文件路径
    chunks: ["demo7"]
  }), //文件复制插件
  new CopyWebpackPlugin([{
    from: path.resolve(__dirname, "./app/data"),
    to: path.resolve(__dirname, "./dist/data") // force: true

  }, {
    from: path.resolve(__dirname, "./app/lib"),
    to: path.resolve(__dirname, "./dist/lib")
  }, {
    from: path.resolve(__dirname, "./app/manifest.json"),
    to: path.resolve(__dirname, "./dist/manifest.json")
  }, {
    from: path.resolve(__dirname, "./demo/index.html"),
    to: path.resolve(__dirname, "./dist/demo/infex.html")
  }]), new webpack.HotModuleReplacementPlugin() // new ProgressBarPlugin({
  //     format: "build [:bar] :percent (:elapsed seconds)",
  //     clear: false,
  //     width: 60,
  // }),
  ]
};