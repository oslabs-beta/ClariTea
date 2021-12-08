// Webpack uses this to work with directories
const path = require('path');
//This plugin is required to tell Webpack to bundle the index.html file found in the src directory.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// This is the main configuration object.
// Here, you can write different options and tell Webpack what to do
module.exports = {

// Path to your entry point. From this file Webpack will begin its work.  For this example, we are using index.js as our entry.
  entry: './src/index.js',

  // Path and filename represent your resulted bundle upon build.
  // Webpack will bundle all JS/JSX into this file
  //publicPath acts as a fallback to root for other urls
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  //this Webpack uses webpack-dev-server for hot model reloading
  //If handling routes and APIs is not your requirement, you can still use Express for your routes
  mode: 'development',
  devServer: {
    static: {
      publicPath: '/build/',
    },
    host: 'localhost',
    port: 8080,
    // enable HMR (Hot Model Reloading) on the devServer
    hot: true,
    
    historyApiFallback: true,

    headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express servers while using hot-reload
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        //this rule is applied to let webpack handle js and JSX files
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          //Babel helps compile JSX syntax to JS. 
          //Not just that, but for regular .js files, we can now use the ES6 syntax and Babel will compile that to its equivalent ES5 form.
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        //This boilerplate uses these loaders for handling static CSS/SASS files.
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
               {
                 // We use file-loader for loading files...pretty self explanatory
                 loader: "file-loader",
  
                 // In options we can set different things like formats
                 // and directory to save
                 options: {
                   outputPath: 'images'
                 }
               }
             ]
      }  
  ],
}, 
  resolve: {
    extensions: ['.ts', '.jsx', '.js', '.svg', '.png']
  },
  
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
