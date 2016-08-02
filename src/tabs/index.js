import { merge, renderStatic, style } from 'glamor';
import { Component, define, emit, prop, vdom } from 'skatejs';
import Tab from './tab';

const css = renderStatic(() => {
  style({ backgroundColor: '#DAD6CE' });
  style({ display: 'inline-block' });
  style({ color: '#333', display: 'inline-block', fontSize: '18px', fontWeight: '200', padding: '20px', textDecoration: 'none' });
  style({ backgroundColor: '#F1EDE4' });
});

console.log(css);

function onTabsChanged(elem) {
  return () => (elem.tabs = [...elem.children]);
}

function selectTab(tabs, tab) {
  return e => {
    tabs.forEach(cur => (cur.selected = cur === tab));
    e.preventDefault();
  };
}

export default define('sk-tabs', {
  props: {
    tabs: prop.array(),
  },
  updated(elem, prev) {
    if (Component.updated(elem, prev)) {
      return emit(elem, 'tab-changed', { detail: elem.selected });
    }
  },
  render(elem) {
    return (
      <div>
        <style>{}</style>
        <div {...sheet.tabs}>
          {elem.tabs.map(tab => (
            <div {...merge(sheet.tab, tab.selected ? sheet.tabSelected : null)}>
              <a href={`#${tab.name}`} on-click={selectTab(elem.tabs, tab)} {...sheet.tabAnchor}>{tab.name}</a>
            </div>
          ))}
        </div>
        <slot on-slotchange={onTabsChanged(elem)} />
      </div>
    );
  },
});

export { Tab };
