module.exports = function(grunt){

	//Project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//tasks
		watch: {
			compass: {
				files: ['sass/*.{scss,sass}'],
				tasks: ['compass:dev', 'jekyll:dev']
			},
			jekyll: {
				files: ['_includes/*.html', '_layouts/*.html', '*.html', '_posts/*.{html,md}'],
				tasks: ['jekyll:dev']
			}
		},
		compass: {
			dev: {
				options: {
					config: 'config.rb',
					environment: 'development',
					outputStyle: 'nested'
				}
			},
			prod: {
				options: {
					config: 'config.rb',
					environment: 'production'
				}
			}
		},
		jekyll: {
			dev: {
				options:{
					config: '_config.dev.yml'
				}

			},
			build: {
				
			}
		}
	});

	//Load the plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jekyll');

	//Default task(s)
	grunt.registerTask("default", ['watch']);

};