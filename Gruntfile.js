module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/output.min.js': ['tmp/**/*.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['server/**/*.bbb'],
        tasks: ['babelsbergjs', 'uglify'],
        options: {
          spawn: false,
        },
      },
    },
    babelsbergjs: {
      build: {
        cwd: 'server/',
        src: '**/*.bbb',
        dest: 'tmp/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babelsbergjs');

  grunt.registerTask('default', ['babelsbergjs', 'uglify']);

};
