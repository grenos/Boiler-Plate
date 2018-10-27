const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = env => {
  //
  const isProduction = env === 'production';
  const CSSdev = ['style-loader', 'css-loader', 'sass-loader'];
  // css loader for prod
  const CSSprod = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: function() {
            return [require('precss'), require('autoprefixer')];
          }
        }
      },
      'sass-loader'
    ],
    publicPath: './dist'
  });
  // loaders
  return {
    entry: {
      index: './src/index.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: './scripts/[name]_bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: isProduction ? CSSprod : CSSdev
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'media/images',
                publicPath: 'media/images'
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        },
        {
          test: /\.(mp4|ogg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'media/videos',
                publicPath: 'media/videos'
              }
            }
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)$/,
          use: [
            {
              loader: 'url-loader?limit=100000',
              options: {
                name: '[name].[ext]',
                outputPath: 'media/fonts',
                publicPath: 'media/fonts'
              }
            }
          ]
        }
      ]
    },
    // aliases
    resolve: {
      alias: {
        TweenLite: path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TweenLite.js'
        ),
        TweenMax: path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TweenMax.js'
        ),
        TimelineLite: path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TimelineLite.js'
        ),
        TimelineMax: path.resolve(
          'node_modules',
          'gsap/src/uncompressed/TimelineMax.js'
        ),
        ScrollMagic: path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
        ),
        'animation.gsap': path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
        ),
        'debug.addIndicators': path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
        )
      }
    },
    //
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new ErrorOverlayPlugin(),
      //
      new HtmlWebpackPlugin({
        title: 'Boiler',
        //filename: './../index.html',  // in case file needs to go to the main dir folder
        minify: {
          collapseWhitespace: true
        },
        hash: true,
        //excludeChunks: ['aboutUs'], // exlude script chunks from index page
        template: './src/index.html'
      }),
      // in case there are multiple pages
      // new HtmlWebpackPlugin({
      //   title: 'slider-test-page',
      //   minify: {
      //     collapseWhitespace: true
      //   },
      //   hash: true,
      //   //chunks: ['aboutUs'],  include chunks to correct page
      //   filename: 'about-us.html',
      //   template: './src/about-us.html'
      // }),
      //inject partials to html
      // new HtmlWebpackPartialsPlugin([
      //   {
      //     path: './src/modules_html/_head.html',
      //     priority: 'high',
      //     location: 'head'
      //   }
      // {
      //   path: './src/modules_html/_visore.html',
      //   priority: 'high',
      //   location: 'body'
      // },
      // {
      //   path: './src/modules_html/_test2.html'
      // }
      // ]),
      new ExtractTextPlugin({
        filename: 'styles/[name].css',
        allChunks: true,
        disable: !isProduction
      }),
      // dump files directly to dist folder
      // new CopyWebpackPlugin([{ from: 'src/data', to: 'data' }]),
      //compress files optimization
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/
      })
    ],

    devtool: isProduction ? 'source-map' : 'eval',
    devServer: {
      hot: true,
      compress: true,
      historyApiFallback: true,
      stats: 'errors-only'
    }
  };
};
