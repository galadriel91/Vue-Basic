const path = require('path');
const VueLoaderPlugins = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.vue' , '.js' , '.scss' , '.css'],
        alias:{
            Components:path.resolve('./src/components/')
        }
    },
    entry:{
        app:'./main.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugins()
    ],
    output:{
        filename:'app.js',
        path:path.join(__dirname , '/dist'),
        publicPath:'/dist'
    },
    devServer:{
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    }
}