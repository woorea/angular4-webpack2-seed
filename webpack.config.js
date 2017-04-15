var path = require("path");

var webpack = require("webpack");
var copyWebpackPlugin = require('copy-webpack-plugin');
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.browser.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader?exports=false']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new copyWebpackPlugin([
       { from: 'src/assets', to: 'assets' },
    ]),
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, 'src'), // location of your src
      {}
    )
  ]
}
