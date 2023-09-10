const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.js",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "src/"),
        }
    },
    module: {
        rules: [
        {
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                  '@babel/preset-env', 
                  [ "@babel/preset-react", {"runtime": "automatic"} ]
                ],
            },
        },
        {
            test: /\.(png|jpe?g|gif|mp4)$/,
            use: [
            {
                loader: "file-loader",
            },
            ],
        },
        {
            test: /\.s?css$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        }
        ],
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new CleanWebpackPlugin(),
        new Dotenv(),
    ],
    devServer: {
        proxy: {
            '/youtube.com':
            {
                target: 'https://www.googleapis.com/youtube/v3',
                changeOrigin: true,
            }   
        },
    },
};