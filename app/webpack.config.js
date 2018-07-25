var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

function resolve (dir) {
  return path.join(__dirname, 'R_app/', dir)
}

module.exports = {
  entry: {
    app: './R_app/entry.jsx',
    // vendors: './test/entryb.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {//开发环境服务器热替换配置
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      host:"0.0.0.0", 
      port: 9000,//指定服务器端口号
  },
  resolve: {
  	alias: {
  		'@': resolve('src'),
  	}
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          "plugins": [
          		["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
      	test: /\.css$/,
      	loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
     new webpack.optimize.UglifyJsPlugin(),//压缩js
     new HtmlWebpackPlugin({ //会将原来的index.html文件在dist文件处生成并且引入关联的文件
          template: './index.html'
      })
  ]
}
