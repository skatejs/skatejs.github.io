describe('Events', function() {
  it('Should trigger `route` events.', function(done) {
    var sl = new Slash;

    sl.on('route', function(route, uri) {
      uri.should.equal('test');
      done();
    });

    sl.when('*');
    sl.dispatch('test');
  });

  it('Should trigger `match` events.', function(done) {
    var sl = new Slash;

    sl.on('match', function(router, uri) {
      uri.should.equal('test');
      done();
    });

    sl.when('*');
    sl.dispatch('test');
  });

  it('Should trigger `done` events.', function(done) {
    var sl = new Slash;

    sl.on('done', function(router, uri) {
      uri.should.equal('test');
      done();
    });

    sl.when('*');
    sl.dispatch('test');
  });
});

describe('Properties', function() {
  it('Should provide the current match and route.', function(done) {
    var sl = new Slash;
    var test1 = sl.when('test1');
    var test2 = sl.when('test2');

    sl.on('route', function(router, uri) {
      switch (uri) {
        case 'test1':
          router.match.should.equal(false);
          router.route.should.equal(false);
          break;
        case 'test2':
          console.log(uri);
          router.match.should.equal('test1');
          router.route.should.equal(test1);
          router.route.expr.should.equal('test1');
          break;
      }
    });

    sl.on('done', function(router, uri) {
      switch (uri) {
        case 'test1':
          router.match.should.equal('test1');
          router.route.should.equal(test1);
          break;
        case 'test2':
          router.match.should.equal('test2');
          router.route.should.equal(test2);
          router.route.expr.should.equal('test2');
          done();
          break;
      }
    });

    sl.dispatch('test1');
    sl.dispatch('test2');
  });
});

describe('Routing', function() {
  it('Should support splats.', function(done) {
    var sl = new Slash;

    sl.when('*uri').then(function(params) {
      params.uri.should.equal('my/test/uri');
      done();
    });

    sl.dispatch('my/test/uri');
  });

  it('Should support parameters.', function(done) {
    var sl = new Slash;

    sl.when('my/:test/:uri').then(function(params) {
      params.test.should.equal('test');
      params.uri.should.equal('uri');
      done();
    });

    sl.dispatch('my/test/uri');
  });

  it('Should support both splats and parameters.', function(done) {
    var sl = new Slash;

    sl.when('my/*test/:uri').then(function(params) {
      params.test.should.equal('test1/test2');
      params.uri.should.equal('uri');
      done();
    });

    sl.dispatch('my/test1/test2/uri');
  });

  it('Should work with both `history.pushState` and URI fragments.', function() {
    var sl = new Slash;

    sl.uri('test');
    window.location.hash.should.equal('#/test');
    sl.uri('');

    sl.usePopstate = true;

    sl.uri('test');
    window.location.pathname.should.equal('/test');
    sl.uri('tests/');
  });

  it('Should cancel routing if a match event returns false.', function() {
    var sl = new Slash
      , resMatch = false
      , resDone = false
      , fnMatch = function() {
          resMatch = true;
          return false;
        }
      , fnDone = function() {
          resRoute = true;
        };

    sl.on('match', fnMatch);
    sl.on('done', fnDone);
    sl.when('*');
    sl.dispatch();

    resMatch.should.equal(true);
    resDone.should.equal(false);
  });

  it('Should match routes.', function(done) {
    var sl = new Slash
      , matched = false;

    sl.when('*').then(function() {
      matched = true;
    });

    sl.on('done', function() {
      matched.should.equal(true);
      done();
    });

    sl.dispatch();
  });
});