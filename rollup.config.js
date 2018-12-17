const rebasePlugin = require('rollup-plugin-rebase');

module.exports = {
  input: 'src/index.js',
  output: {
    format: 'es',
    file: 'es/index.js'
  },
  plugins: [rebasePlugin({keepName: true})]
};