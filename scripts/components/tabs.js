'use strict';

import '../../../../bower_components/skate-template-html/src/main';
import '../../../../src/skate';

function getLis (element) {
  return element.querySelectorAll('ul > li');
}

function getSections (element) {
  return element.querySelectorAll('section');
}

function eachTab (element, callback) {
  var a;
  var lis = getLis(element);
  var sections = getSections(element);

  for (a = 0; a < lis.length; a++) {
    if (callback(lis[a], sections[a], a) === false) {
      return;
    }
  }
}

function indexOfTab (element, tab) {
  var returnIndex = -1;

  eachTab(element, function (li, section, index) {
    if (li === tab) {
      returnIndex = index;
      return false;
    }
  });

  return returnIndex;
}

function selectTab (element, index) {
  var selected = getLis(element)[parseFloat(index)];

  eachTab(element, function (li, section) {
    if (li === selected) {
      li.setAttribute('selected', '');
      section.setAttribute('selected', '');
    } else {
      li.removeAttribute('selected');
      section.removeAttribute('selected');
    }
  });
}

skate('skate-tabs', {
  type: skate.types.TAG,

  created: function (element) {
    if (!element.hasAttribute('selected')) {
      element.setAttribute('selected', '0');
    }
  },

  template: skateTemplateHtml(
    '<ul>',
      '<content select="li"></content>',
    '</ul>',
    '<content select="section"></content>'
  ),

  attributes: {
    selected: function (element, change) {
      selectTab(element, change.newValue);
    }
  },

  events: {
    'click ul > li': function (element, e, target) {
      selectTab(element, indexOfTab(element, target));
    },

    'click ul > li > a': function (element, e, target) {
      e.preventDefault();
    }
  }
});

skate('skate-tabs-tab', {
  type: skate.types.TAG,

  extends: 'li',

  template: skateTemplateHtml(
    '<a href="#">',
      '<content></content>',
    '</a>'
  )
});
