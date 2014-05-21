module.exports = {
  all: {
    options: {
      browsers: ['PhantomJS'],
      files: [
        'src/skate-heading-link.js',
        'test/skate-heading-link.js'
      ],
      frameworks: ['mocha', 'chai'],
      singleRun: true
    }
  }
};
