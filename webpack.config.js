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
        test: /\.(css|scss)$/,
        use: [`style-loader`, `css-loader`, `postcss-loader`,
          {
            loader: `sass-loader`,
            options: {
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: `@svgr/webpack`,
          options: {
            svgo: false
          }
        }]
      }
    ]
  },
  devtool: `source-map`
};
