const { merge } = require("webpack-merge")

const common = require("./webpack.config.common")

module.exports = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}):Configuration
