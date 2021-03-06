const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9000';

module.exports = merge(common, {
  devServer: {
    compress: true,
    contentBase: './dist',
    historyApiFallback: true,
    host: HOST,
    hot: true,
    inline: true,
    open: true,
    overlay: true,
    port: PORT
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve('../../node_modules/patternfly'),
          path.resolve('../../node_modules/@patternfly/patternfly'),
          path.resolve('../../node_modules/@patternfly/react-styles/css'),
          path.resolve(
            '../../node_modules/@patternfly/react-core/dist/styles/base.css'
          ),
          path.resolve(
            '../../node_modules/@patternfly/react-core/dist/esm/@patternfly/patternfly'
          ),
          path.resolve(
            '../../node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css'
          ),
          path.resolve(
            '../../node_modules/@patternfly/react-table/node_modules/@patternfly/react-styles/css'
          )
        ],
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    modules: [
      path.resolve('../../node_modules'),
      path.resolve('./node_modules'),
      path.resolve('./src')
    ]
  }
});
