const path = require('path');
const VueLoaderPlugins = require('vue-loader/lib/plugin')

module.exports = {
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.vue' , '.js' , '.scss' , '.css'],
        alias:{
            Components:path.resolve('./src/components/'),
            Style:path.resolve('./src/assets/scss/'),
            Img:path.resolve('./src/assets/image/'),
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
                use:['style-loader' , 'css-loader' ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugins()
    ],
    output:{
        filename:'app.js',
        path:path.join(__dirname , 'dist'),
        publicPath:'/dist/'
    },
    devServer:{
        devMiddleware:{publicPath : '/dist'},
        static:{directory:path.resolve(__dirname)},
        hot:true,
    }
}
