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
                    'dist/<%= pkg.name %>.css': ["assets/less/app.less"]
                }
            }
        },
        concat: {
            'alankehoe.github.io': {
                src: [
                    'assets/vendor/bower/angular/angular.js',
                    'assets/vendor/bower/angular-route/angular-route.js',
                    'assets/vendor/bower/angular-animate/angular-animate.js',
                    'assets/vendor/bower/angular-bootstrap/ui-bootstrap.js',
                    'assets/vendor/bower/angular-bootstrap/ui-bootstrap-tpls.js',
                    'assets/js/app.js'
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

    grunt.registerTask('build', ['less', 'concat', 'uglify', 'cssmin']);
};