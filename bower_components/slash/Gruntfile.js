module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      tests: {}
    },
    ghoul: {
      tests: {
        urls: [
          'http://localhost:8000/tests'
        ]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-ghoul');

  grunt.registerTask('test', ['connect', 'ghoul']);
};