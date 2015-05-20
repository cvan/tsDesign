module.exports = function(grunt){

	//Project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//tasks
	});

	//Load the plugin that provides the "uglify" task
	grunt.loadNPMTasks('');

	//Default task(s)
	grunt.registerTask('default',['']);

};