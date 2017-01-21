import { Component, define, emit, prop, h } from 'skatejs';
import cx from 'classnames';
import css from './tab.css';
import debounce from 'debounce';

function emitSlotChange(elem) {
  if (!elem.__debouncedSlotChangeEvent) {
    elem.__debouncedSlotChangeEvent = debounce(emit.bind(null, elem, 'slotchange'), 0);
  }
  return elem.__debouncedSlotChangeEvent();
}

export default define(class extends Component {
  static get is(){ return 'sk-tabs-tab' }
  static get props(){ 
    return {
      name: prop.string({ attribute: true }),
      selected: prop.boolean({ attribute: true }),
    }
  }
  connectedCallback() {
    super.connectedCallback();
    emitSlotChange(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    emitSlotChange(this);
  }
  updatedCallback(prev) {
    emitSlotChange(this);
    return super.updatedCallback(prev);
  }
  renderCallback() {
    return (
      <div class={cx({ [css.locals.pane]: true, [css.locals.selected]: this.selected })}>
        <style>{css.toString()}</style>
        <slot />
      </div>
    );
  }
});
