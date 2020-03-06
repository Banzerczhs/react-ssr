var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const paths=require('./config/paths');


module.exports = {
    mode: 'development',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js',
        chunkFilename : 'static/js/[name][contenthash:8].[ext]',
        publicPath: paths.publicUrlOrPath
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            script : `<script src="/bundle.js"></script>`,
            inject : false
        })
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {   
                test : /\.css$/,
                use : [{
                    loader : 'style-loader'
                },{
                    loader : 'css-loader'
                }]
            },
            {
                test : /\.less$/,
                use : [{
                    loader : 'style-loader'
                },{
                    loader : 'css-loader',
                    options : {
                        modules: true
                    }
                },{
                    loader : 'less-loader'
                }]
            }, {
                test: /\.(jpg|png|gif|webp|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'static/media/[name].[ext]'
                    }
                }]
            }
        ]
    }
}