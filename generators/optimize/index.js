
var generators = require('yeoman-generator');
var util = require('yeoman-util');

module.exports = generators.Base.extend({
	writing: {
		config: util.copy(
			'~config/webpack/partial/optimize.webpack.config.js',
			'optimize.webpack.config.js'
		)
	}
});
