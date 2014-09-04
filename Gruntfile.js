module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '\n/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> by alan\n' +
            '' +
            ' * Copyright <%= grunt.template.today("yyyy") %> alankehoe.github.io\n' +
            '' +
            ' */\n',
        less: {
            'alankehoe.github.io': {
                files: {
                    'dist/<%= pkg.name %>.css': ["assets/app.less"]
                }
            }
        },
        concat: {
            'alankehoe.github.io': {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angulartics/src/angulartics.js',
                    'bower_components/angulartics/src/angulartics-ga.js',
                    'assets/app.js'
                ],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            'alankehoe.github.io': {
                src: ['dist/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            'alankehoe.github.io': {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    'dist/<%= pkg.name %>.min.css': ['dist/<%= pkg.name %>.css']
                }
            }
        },
        clean: {
            js: ["dist/*.js", "!dist/*.min.js"],
            css: ["dist/*.css", "!dist/*.min.css"]
        },
        watch: {
            css: {
                files: ['assets/less/**/*.less'],
                tasks: ['less', 'cssmin']
            },
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['concat', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['less', 'concat', 'uglify', 'cssmin', 'clean']);
};