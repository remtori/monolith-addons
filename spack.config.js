const {config} = require('@swc/core/spack');

module.exports = config({
	target: 'browser',
	entry: {
		nhentai: __dirname + '/src/nhentai.ts',
	},
	output: {
		path: __dirname + '/build',
	},
	module: {},
});
