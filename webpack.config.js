const path = require(`path`);
const outputPath = path.join(__dirname, `public`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: outputPath
  },
  devServer: {
    contentBase: outputPath,
    open: true,
    inline: true,
    port: 1337
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      },
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`]
      },
      {
        test: /\.svg$/,
        use: {
          loader: `@svgr/webpack`,
          options: {
            svgo: false
          }
        }
      }
    ]
  },
  devtool: `source-map`
};
