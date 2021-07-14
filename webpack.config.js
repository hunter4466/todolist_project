const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
     modules: './src/Assets/Javascript/modules.js',
     linkedList: './src/Assets/Javascript/linkedList.js',
     dataHandler: './src/Assets/Javascript/dataHandler.js',
   },
   devServer: {
    contentBase: './dist',
   hot: true,
  },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
   plugins: [
    new HtmlWebpackPlugin({
     title: 'Output Management',
     template: './src/index.html'
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };