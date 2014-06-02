define([
  'components/each',
  'components/icon',
  'components/output',
  'components/router',
  'components/router-link',
  'components/snippet',
  'components/toc',
  'components/toc-item',
  'skateCode',
  'skateExternalLink',
  'skateHeadingLink'
], function(
  each,
  icon,
  output,
  router,
  routerLink,
  snippet,
  toc,
  tocItem,
  skateCode,
  skateExternalLink,
  skateHeadingLink
) {
  router.on('route', function () {
    var tocs = toc.existing();

    if (tocs.length) {
      toc.existing()[0].clearAllItems();
    }
  });

  return function() {
    document.body.className = 'loaded';
  };
});
