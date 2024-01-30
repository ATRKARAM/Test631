const path = require('path');

module.exports = {
  entry: './server.js',  // Entry point of your application
  output: {
    filename: 'run_server.js',  // Output file name
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply rule to JavaScript files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: {
          loader: 'babel-loader',  // Use Babel loader for transpiling
          options: {
            presets: ['@babel/preset-env'],  // Babel preset for modern JavaScript
          },
        },
      },
    ],
  },
};
