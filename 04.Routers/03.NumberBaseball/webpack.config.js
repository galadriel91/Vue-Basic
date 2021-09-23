const path = require('path');
const VueLoaderPlugins = require('vue-loader/lib/plugin');

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.vue' , '.scss' , '.css' , '.js'],
        alias:{
            Style:path.resolve(__dirname , './src/assets/scss/'),
            Img:path.resolve(__dirname , './src/assets/image/'),
            Components:path.resolve(__dirname , './src/components/'),
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
            },
            {
                test:/\.scss$/,
                use:['style-loader' , 'css-loader' , 'sass-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader' , 'css-loader']
            }
        ]
    },
    plugins:[
        new VueLoaderPlugins()
    ],
    output:{
        filename:'app.js',
        path:path.join(__dirname , 'dist'),
        publicPath:'/dist'
    },
    devServer:{
        devMiddleware:{publicPath:'/dist'},
        static:{directory:path.resolve(__dirname)},
        hot:true
    }
}
