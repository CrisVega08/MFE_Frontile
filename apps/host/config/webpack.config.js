const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        landingRemote: 'landing@http://localhost:8081/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Host Page',
      template: './public/index.html'
    }),
  ]
}
