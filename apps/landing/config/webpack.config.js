// webpack config
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'landing',
      filename: 'remoteEntry.js',
      exposes: {
        './LandingApp': './src/index',
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
