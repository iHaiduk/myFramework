/**
 * Gruntfile
 *
 * This Node script is executed when you run `grunt` or `sails lift`.
 * It's purpose is to load the Grunt tasks in your project's `tasks`
 * folder, and allow you to add and remove tasks as you see fit.
 * For more information on how this works, check out the `README.md`
 * file that was generated in your `tasks` folder.
 *
 * WARNING:
 * Unless you know what you're doing, you shouldn't change this file.
 * Check out the `tasks` directory instead.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        coffee: {
            Application: {
                options: {
                    bare: true
                },
                expand: true,
                flatten: true,
                cwd: 'coffee/Application',
                src: ['*.coffee'],
                dest: 'js/Application',
                ext: '.js'
            },
            Collections: {
                options: {
                    bare: true
                },
                expand: true,
                flatten: true,
                cwd: 'coffee/Collections',
                src: ['*.coffee'],
                dest: 'js/Collections',
                ext: '.js'
            },
            Models: {
                options: {
                    bare: true
                },
                expand: true,
                flatten: true,
                cwd: 'coffee/Models',
                src: ['*.coffee'],
                dest: 'js/Models',
                ext: '.js'
            },
            Views: {
                options: {
                    bare: true
                },
                expand: true,
                flatten: true,
                cwd: 'coffee/Views',
                src: ['*.coffee'],
                dest: 'js/Views',
                ext: '.js'
            },
            main: {
                options: {
                    bare: true
                },
                expand: true,
                flatten: true,
                cwd: 'coffee',
                src: ['*.coffee'],
                dest: 'js',
                ext: '.js'
            }
        },
        watch:{
            options:{
                livereload: true
            },
            scripts:{
                files: ['coffee/Application/*.coffee', 'coffee/Collections/*.coffee', 'coffee/Models/*.coffee', 'coffee/Views/*.coffee', 'coffee/*.coffee'],
                tasks: ['newer:coffee:Application','newer:coffee:Collections','newer:coffee:Models','newer:coffee:Views','newer:coffee:main']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-forever');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['coffee:Application','coffee:Collections','coffee:Models','coffee:Views','coffee:main', 'watch']);

};