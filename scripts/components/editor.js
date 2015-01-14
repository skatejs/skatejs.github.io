'use strict';

import '../../../../bower_components/skate-template-html/src/main';
import '../../../../src/skate';

function createEditor (element, mode) {
  var html;

  if (!element) {
    return;
  }

  html = element.innerHTML;
  element.innerHTML = '';

  return CodeMirror(element, {
    mode: mode,
    value: html
  });
}

export default skate('skate-editor', {
  type: skate.types.TAG,

  created: function (element) {
    var html = element.querySelector('[data-lang="html"]');
    var css = element.querySelector('[data-lang="css"]');
    var js = element.querySelector('[data-lang="js"]');

    console.log(js);

    createEditor(html, 'html');
    createEditor(css, 'css');
    createEditor(js, 'js');
  },

  template: function (element) {
    console.log(element.innerHTML);
  },

  test: skateTemplateHtml(
    '<skate-tabs>',
      '<li is="skate-tabs-tab">HTML</li>',
      '<li is="skate-tabs-tab">CSS</li>',
      '<li is="skate-tabs-tab">JS</li>',
      '<li is="skate-tabs-tab">Result</li>',
      '<section>',
        '<content select="[data-lang=html]"></content>',
      '</section>',
      '<section>',
        '<content select="[data-lang=css]"></content>',
      '</section>',
      '<section>',
        '<content select="[data-lang=js]"></content>',
      '</section>',
      '<section></section>',
    '</skate-tabs>'
  )
});
