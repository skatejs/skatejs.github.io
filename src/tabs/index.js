import { Component, define, emit, prop, h } from 'skatejs';
import cx from 'classnames';
import css from './index.css';
import Tab from './tab';

function onTabsChanged(elem) {
  return () => {
    elem.tabs = [...elem.children]
  };
}

function selectTab(elem, tabs, tab) {
  return e => {
    tabs.forEach(cur => {
      cur.selected = cur === tab
    });
    // @TODO temporary fix to make generated tab titles to re-render in IE and FF ( because they don't react properly on slotchange event - issue is probably with polyfill )
    elem.tabs = [...tabs];
    e.preventDefault();
  };
}

function getSelectedTab(tabs=[]){
  return tabs.filter(tab=>tab.selected)[0];
}

export default define(class extends Component {
  static get is(){ return 'sk-tabs' }
  static get props() {
    return {
      tabs: prop.array(),
    };
  }
  updatedCallback(prev) {
    if (super.updatedCallback(prev)) {
      return emit(this, 'tab-changed', { detail: getSelectedTab(this.tabs) });
    }
  }
  renderCallback() {
    return (
      <div>
        <style>{css.toString()}</style>
        <div class={css.locals.tabs}>
          {this.tabs.map(tab => (
            <div class={cx({ [css.locals.tab]: true, [css.locals.selected]: tab.selected })}>
              <a href={`#${tab.name}`} on-click={selectTab(this, this.tabs, tab)}>{tab.name}</a>
            </div>
          ))}
        </div>
        <slot on-slotchange={onTabsChanged(this)} />
      </div>
    );
  }
});

export { Tab };
