const conf = module.exports = require('skatejs-build/webpack.config');
conf.devtool = 'source-map';
conf.module.loaders[0].loader = 'css?modules&camelCase';
