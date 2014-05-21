module.exports = {
  all: {
    options: {
      browsers: ['PhantomJS'],
      files: [
        'src/skate-external-link.js',
        'test/skate-external-link.js'
      ],
      frameworks: ['mocha', 'chai'],
      singleRun: true
    }
  }
};
