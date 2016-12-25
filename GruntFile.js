module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './deploy'
                }
            }
        },
        concat: {
            dist: {
                src: ["src/lib/**/*.js",
                    "src/game/**/*.js"
                ],
                dest: 'deploy/js/<%= pkg.name %>.js'
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, src: ['img/*'], dest: 'deploy/' },
                    { expand: true, src: ['favicon.png'], dest: 'deploy/' },
                    { expand: true, cwd: 'src/', src: ['index.html'], dest: 'deploy/' },
                ]
            },
        },
        watch: {
            files: 'src/**/*.js',
            tasks: ['concat']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask('default', ['concat', 'copy', 'connect', 'open', 'watch']);

}