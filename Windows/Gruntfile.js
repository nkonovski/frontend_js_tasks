module.exports = function (grunt) {

    grunt.file.defaultEncoding = 'utf-8';

    /**
     * Configuration
     */
    grunt.initConfig({

        /**
         * Less Tasks
         */
        less: {

            options: {
                sourceMap: true
            },

            development: {
                
                files: {
                    "build/css/styles.css": "app/less/main.less"
                }
            },

            production: {
                options: {
                    sourceMap: false,
                },

                files: {
                    "production/css/styles.css": "app/less/main.less"
                }
            }
        },

        copy: {

            development: {

                files: [      
                    {expand: true, cwd: 'app/js', src: ['**'], dest: 'build/js'},
                    {expand: true, cwd: 'app/templates', src: ['**'], dest: 'build/templates'},
                ]
            },

            production: {

                files: [      
                    {expand: true, cwd: 'app/templates', src: ['**'], dest: 'production/templates'},
                ]
            },

            js: {

                files: [      
                    {expand: true, cwd: 'app/js', src: ['**'], dest: 'build/js'},
                ]
            },

            templates: {
                
                files: [      
                    {expand: true, cwd: 'app/templates', src: ['**'], dest: 'build/templates'},
                ]
            }
        },

        connect: {
            server: {

                options: {
                    port: 8000,
                    hostname: "*",

                    base: {
                        path: 'build',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },

        clean: {

            development: {
                src: ["build"]
            },

            production: {
                src: ["production"]
            }
        },

        watch: {

            less: {
                options: {
                    livereload: true
                },
                files: ["app/less/**/*.less"],
                tasks: ["less:development"]
            },

            js: {
                options: {
                    livereload: true
                },
                files: ["app/js/**/*.js"],
                tasks: ["copy:js"]
            },

            templates: {
                options: {
                    livereload: true
                },
                files: ["app/templates/**/*.html"],
                tasks: ["copy:templates"]
            },

            html: {
                options: {
                    livereload: true
                },
                files: ["app/index.html"],
                tasks: ["htmlbuild:development"]
            }
        },

        cssmin: {

            production: {
                files: [{
                  expand: true,
                  cwd: 'production/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'production/css',
                  ext: '.min.css'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },

            production: {
                
                files:  {
                    'production/js/main.min.js': ['app/js/**/*.js']
                }
            }
        },

        htmlbuild: {
            production: {
                src: 'app/index.html',
                dest: 'production/',

                options: {
                    beautify: true,
                    // prefix: '//some-cdn',
                    relative: true,

                    data: {
                        // Data to pass to templates 
                        version: "1.0.0"
                    },
                }
                
            },
            development: {
                src: 'app/index.html',
                dest: 'build/',

                options: {
                    beautify: true,
                    // prefix: '//some-cdn',
                    relative: true,

                    data: {
                        // Data to pass to templates 
                        version: "1.0.0"
                    },
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask("default", ["clean:development", "htmlbuild:development", "less:development", "copy:development", "connect", "watch"]);
    grunt.registerTask("production", ["clean:production", "htmlbuild:production", "less:production", "cssmin:production", "uglify:production", "copy:production"]);
};