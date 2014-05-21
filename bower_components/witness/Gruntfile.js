module.exports = function(grunt) {

  'use strict';

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    concat: {
      all: {
        files: {
          'dist/witness.js': [
            'src/witness.js'
          ]
        }
      }
    },
    karma: {
      all: {
        options: {
          browsers: ['PhantomJS'],
          files: [
            'src/witness.js',
            'tests/witness.js'
          ],
          frameworks: ['mocha', 'sinon-chai'],
          singleRun: true
        }
      }
    },
    uglify: {
      all: {
        files: {
          'dist/witness.min.js': 'dist/witness.js'
        }
      }
    },
    watch: {
      test: {
        files: ['src/*.js'],
        tasks: ['dist']
      }
    }
  });

  grunt.registerTask('build', 'Runs the tests and builds the dist.', ['test', 'dist']);
  grunt.registerTask('dist', 'Builds the dist.', ['concat', 'uglify']);
  grunt.registerTask('test', 'Runs the tests.', ['karma']);

};
