module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/www',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './www',
    port: 3000
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
      { test: /\.js$/, use: ['source-map-loader'], enforce: 'pre' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ]
  },
  plugins: []
}
