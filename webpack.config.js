const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "build"),
        publicPath: '/build',
        filename: "index_bundle.js"
    },
    plugins: [
    new CleanWebpackPlugin(),
    ],
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.(jsx|js)$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ["@babel/plugin-syntax-jsx"]
              },
            },
            exclude: /node_modules/
          },
          {
            test: /\.s?css/,
            use: ["style-loader", "css-loader", "sass-loader"
            ],
          },
          {
            // Apply rule for images
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                // Using file-loader for these files
                loader: "file-loader",
                  options: {
                  outputPath: '/images'
                }
              }
            ]
          },
        ]
    },
    target: 'electron-renderer',
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, '/src'),
        },
      proxy: {
        '/': 'http://localhost:3000'
      },
      compress: true,
      port: 8080,
  },
};