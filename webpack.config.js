const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    mode: prod ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    },
    resolve: {
        extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new ESLintPlugin({
            extensions: ['.tsx', '.ts', '.js']
        })
    ],
    devtool: prod ? undefined : 'source-map',
    devServer: {
        static: path.join(__dirname, './src'),
        port: 3000,
        hot: true,
        // liveReload: false,
        compress: true,
        open: true
    }
};
