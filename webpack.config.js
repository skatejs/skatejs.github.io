const conf = module.exports = require('skatejs-build/webpack.config');
conf.module.loaders[0].loader = 'css?modules&camelCase';
conf.module.loaders.push({ test: /\.(png|svg)$/, loader: 'file?name=[hash].[ext]' });
conf.plugins = [];
conf.entry = { 'bundle.min.js': './src/index.js' };
conf.output.path = `${__dirname}/dist`;
conf.output.publicPath = '/dist/';
