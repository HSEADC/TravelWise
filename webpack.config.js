const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pageFolders = ['guides', 'advices', 'reviews', 'routes', 'map'];

const htmlPlugins = pageFolders.map((folder) => {
  return new HtmlWebpackPlugin({
    template: `./src/pages/${folder}/index.html`,
    filename: `${folder}/index.html`,
    chunks: [folder],
    inject: true,
  });
});

module.exports = {
  entry: pageFolders.reduce((entries, folder) => {
    entries[folder] = `./src/pages/${folder}/${folder}.js`;
    return entries;
  }, {}),
  output: {
    filename: '[name]/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    ...htmlPlugins,
    new HtmlWebpackPlugin({
      template: './src/pages/guides/index.html',
      filename: 'index.html',
      chunks: ['guides'],
      inject: true,
    }),
  ],
  devServer: {
    static: './dist',
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
  mode: 'development',
};
