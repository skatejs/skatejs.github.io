import { Component, define, emit, prop, h } from 'skatejs';
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

export default define(class extends Component {
  static get is(){ return 'sk-tabs' }
  static get props() {
    return {
      tabs: prop.array(),
    };
  }
  updatedCallback(prev) {
    if (Component.updated(this, prev)) {
      return emit(this, 'tab-changed', { detail: this.selected });
    }
  }
  renderCallback() {
    return (
      <div>
        <style>{css.toString()}</style>
        <div class={css.locals.tabs}>
          {this.tabs.map(tab => (
            <div class={cx({ [css.locals.tab]: true, [css.locals.selected]: tab.selected })}>
              <a href={`#${tab.name}`} on-click={selectTab(this.tabs, tab)}>{tab.name}</a>
            </div>
          ))}
        </div>
        <slot on-slotchange={onTabsChanged(this)} />
      </div>
    );
  }
});

export { Tab };
