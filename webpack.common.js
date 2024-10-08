const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const path = require('path');
const fs = require('fs');

const pagesDir = path.resolve(__dirname, 'src/pages');

// Чтение всех папок внутри src/pages
const pages = fs.readdirSync(pagesDir).filter((file) => {
  return fs.statSync(path.join(pagesDir, file)).isDirectory();
});

const htmlPlugins = pages.map((folder) => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${folder}/index.html`,
    filename: `${folder}.html`,
    chunks: [folder],
  });
});

htmlPlugins.push(
  new HtmlWebpackPlugin({
    template: './src/pages/guides/index.html',
    filename: 'index.html',
    chunks: ['guides'],
  }),
);

module.exports = {
  entry: pages.reduce((entries, folder) => {
    entries[folder] = `./src/pages/${folder}/${folder}.js`;
    return entries;
  }, {}),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    ...htmlPlugins,
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
