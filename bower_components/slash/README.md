Slash
=====

Slash is a simple promise-style router that supports both `:params` and `*splats`.

Usage
-----

Using Slash is pretty simple. You instantiate it, tell things to do things when a certain URI event happens and listen for updates.

    var sl = Slash();

    sl.when('').then(function() {
      // do something
    });

    sl.listen();

However, you're going to need more than that.

### :params

Params are any alphanumeric string prefixed with a colon.

    sl.when('blog/:id').then(function(params) {
      showBlog(params.id);
    });

Parameters can share URI parts, therefore you don't have to separate them with slashes.

    sl.when('blogs/:from..:to/:limit/:page', function(params) {
      showBlogs(params.from, params.to, params.limit, params.page);
    });

### *splats

Splats are any alphanumeric string prefixed with a star.

    sl.when('*uri').then(function(params) {
      showNotFound(params.uri);
    });

They can exist after a particular prefix.

    sl.when('admin/*uri').then(function(params) {
      showAdminNotFound(params.uri);
    });

Or in between expression parts. In the following expression, it would match up to the `:limit` and `:page` parameters.

    sl.when('search/*query/:limit/:page', function(params) {
      search(params.query, params.limit, params.page);
    });


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/treshugart/slash/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

