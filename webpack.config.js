const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    resolve: {
        extensions: [".js",".ts"]
    },
    entry: {
        app: './src/index.ts'
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, "./src"),
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            scriptLoading: "blocking",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "[name].css"
          })
    ],
}