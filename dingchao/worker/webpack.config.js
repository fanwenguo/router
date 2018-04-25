const htmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
var api = require('./src/mock/index.js') 

const config = {
    entry:__dirname+'/src/main.js',
    output:{
        path:__dirname+'/dist',
        filename:'js/[id]-[name]-[chunkhash:5].js'
    },
    resolve:{
        alias:{
            vue:"vue/dist/vue.js"
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "env"
                        ]
                    }
                }]
            },
            {
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:['url-loader']
            },
            {
                test:/\.html$/,
                use:['html-loader']
            }
        ]
    },
    plugins:[
        // new cleanWebpackPlugin(['dist']),
        new uglifyjsWebpackPlugin(),
        new htmlWebpackPlugin({
            filename:'index.html',
            template:__dirname+'/src/index.html'
        })
    ],
    devServer:{
        contentBase:__dirname+'/dist',
        host:"localhost",
        port:5353,
        open:true,
        before:api
    }
}

module.exports = config