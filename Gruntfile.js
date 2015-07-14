module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: ['server/**/*.bbb'],
        tasks: ['babelsbergjs'],
        options: {
          spawn: false,
        },
      },
    },
    babelsbergjs: {
      build: {
        cwd: 'server/',
        src: '**/*.bbb',
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babelsbergjs');

  grunt.registerTask('default', ['babelsbergjs']);

};
