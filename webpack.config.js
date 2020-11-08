const path = require(`path`);
const outputPath = path.join(__dirname, `public`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `scripts/scripts.js`,
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
        test: /\.scss$/,
        use: [`style-loader`, `css-loader`,
          {
            loader: `postcss-loader`,
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer']
                ]
              }
            }
          },
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
        use: {
          loader: `@svgr/webpack`,
          options: {
            svgo: false
          }
        }
      },
      {
        test: /favicon.svg$/,
        use: {
          loader: `file-loader`,
          options: {
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff2|woff|ttf)$/,
        use: {
          loader: `file-loader`,
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: `./src/index.html`,
      filename: `index.html`
    })
  ],
  devtool: `source-map`
};
