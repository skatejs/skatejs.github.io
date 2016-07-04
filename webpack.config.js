const conf = module.exports = require('skatejs-build/webpack.config');
conf.devtool = 'source-map';
conf.module.loaders[0].loader = 'css?modules&camelCase';
conf.module.loaders[2].query.presets = [];
conf.module.loaders.push({ test: /\.(png)$/, loader: 'file?name=dist/[hash].[ext]' });
