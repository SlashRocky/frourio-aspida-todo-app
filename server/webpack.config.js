const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  externals: [nodeExternals()],
  entry: './apis/server.ts',
  output: {
    filename: 'index.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'server/tsconfig.json'
          }
        }
      }
    ]
  },
  plugins: [new NodemonPlugin()],
  resolve: {
    extensions: ['.ts'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'server/tsconfig.json' })]
  }
}
