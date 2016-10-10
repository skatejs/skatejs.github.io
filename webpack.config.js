const conf = module.exports = require('skatejs-build/webpack.config');
conf.module.loaders[0].loader = 'css?modules&camelCase';
conf.module.loaders.push({ test: /\.(png)$/, loader: 'file?name=dist/[hash].[ext]' });
conf.module.loaders[2].query.plugins = [['transform-react-jsx', { pragma: 'h' }]];
