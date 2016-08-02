import { Component, define, emit, prop, vdom } from 'skatejs';
import cx from 'classnames';
import css from './index.css';
import Tab from './tab';

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
        <style>{css.toString()}</style>
        <div class={css.locals.tabs}>
          {elem.tabs.map(tab => (
            <div class={cx({ [css.locals.tab]: true, [css.locals.selected]: tab.selected })}>
              <a href={`#${tab.name}`} on-click={selectTab(elem.tabs, tab)}>{tab.name}</a>
            </div>
          ))}
        </div>
        <slot on-slotchange={onTabsChanged(elem)} />
      </div>
    );
  },
});

export { Tab };