module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babelsbergjs: {
      build: {
        cwd: 'server/',
        src: '**/*.bbb',
        dest: 'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-babelsbergjs');

  grunt.registerTask('default', ['babelsbergjs']);

};
