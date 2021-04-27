const path = require('path')

module.exports = {
   mode: 'production',
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname),
      filename: 'index.js',
      library: 'vue-the-filters',
      libraryTarget: 'umd',
      umdNamedDefine: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            loader: 'babel-loader',
            include: __dirname,
            exclude: /node_modules/
         }
      ]
   }
}
