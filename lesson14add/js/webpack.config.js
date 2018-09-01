var path = require('path');

module.exports = {
  entry: './bundle/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle')
  }
};
