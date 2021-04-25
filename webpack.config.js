const path = require('path')

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, '/'),
      filename: 'index.js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
         }
      ]
   }
}
