import { vdom } from 'skatejs';

const specials = ['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'p', 'ul'];

export default Object.getOwnPropertyNames(window)
  .filter(name => name.indexOf('HTML') === 0 && name.indexOf('Element') > 0)
  .map(name => name.replace(/^HTML/, '').replace(/Element$/, ''))
  .map(name => name.toLowerCase())
  .concat(specials)
  .filter(name => !!name)
  .reduce((prev, curr) => (prev[curr] = vdom.element.bind(null, curr)) && prev, {});
