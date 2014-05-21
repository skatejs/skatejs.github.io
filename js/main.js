require({
  paths: {
    highlight: '../bower_components/highlightjs/highlight.pack',
    jquery: '../bower_components/jquery/dist/jquery',
    q: '../bower_components/q/q',
    skate: '../bower_components/skate/dist/skate',
    skateCode: '../bower_components/skate-code/src/skate-code',
    skateExternalLink: '../bower_components/skate-external-link/src/skate-external-link',
    skateHeadingLink: '../bower_components/skate-heading-link/src/skate-heading-link',
    slash: '../bower_components/slash/src/slash',
    windex: '../bower_components/windex/src/windex',
    witness: '../bower_components/witness/dist/witness'
  },
  shim: {
    highlight: {
      exports: 'hljs'
    },
    skateCode: {
      dependencies: ['hljs', 'skate']
    },
    skateExternalLink: {
      dependencies: ['skate']
    },
    skateHeadingLink: {
      dependencies: ['skate']
    }
  }
});

require(['skate'], function (skate) {
  window.skate = skate;

  require(['app'], function (app) {
    app();
  });
});
