module.exports = {
  all: {
    options: {
      browsers: ['PhantomJS'],
      files: [
        'src/skate-code.js',
        'test/skate-code.js'
      ],
      frameworks: ['mocha', 'chai'],
      singleRun: true
    }
  }
};
