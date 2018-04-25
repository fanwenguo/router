var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
var uglifyjsPlugin = require('uglifyjs-webpack-plugin');
var api = require('../src/mock/mock.js')
module.exports = {
    entry: path.join(__dirname, '../src/app.js'), //入口文件
    output: { //出口文件
        path: path.join(__dirname, '../dist'),
        filename: "js/[name].js"
    },
    resolve: {
        //设置别名
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['dist']), //每次打包之前清除一下dist文件夹
        new uglifyjsPlugin(), //压缩js
        new htmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: "index.html"
        })
    ],
    devServer: {
        //启服务
        contentBase: path.join(__dirname, '../dist'),
        host: "localhost",
        port: 3000,
        open: true,
        before: api
    }
}