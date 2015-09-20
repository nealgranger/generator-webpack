
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	writing: {
		config: util.copy(
			'~config/webpack/partial/postcss.webpack.config.js',
			'postcss.webpack.config.js'
		),
		manifest: util.manifest()
	}
});