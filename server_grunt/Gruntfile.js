module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'server/dist/constraints.min.js': ['server/tmp/**/*.js'],
          'server/dist/public/scripts.min.js': ['server/client/**/*.js'],
          'server/dist/index.min.js': ['server/index.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['server/**/*.bbb','server/**/*.js'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
    babelsbergjs: {
      build: {
        cwd: 'server/',
        src: '**/*.bbb',
        dest: 'server/tmp/'
      }
    },
    copy: {
      build: {
        files: [
          {
            src: 'server/dist/constraints.min.js',
            dest: 'server/constraints.min.js'
          }, {
            expand: true,
            cwd: 'server/public/',
            src: ['**'],
            dest: 'server/dist/public/'
          }
        ]
      }
    },
    clean: {
      prebuild: ["server/dist/"],
      postbuild: ["server/tmp/"]
    },
  });

  grunt.loadNpmTasks('grunt-babelsbergjs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
      'clean:prebuild',
      'babelsbergjs:build',
      'uglify:build',
      'copy:build',
      'clean:postbuild'
      ]);

};
