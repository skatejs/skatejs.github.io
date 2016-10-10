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

export default define('sk-tabs-tab', {
  props: {
    name: prop.string({ attribute: true }),
    selected: prop.boolean({ attribute: true }),
  },
  attached(elem) {
    emitSlotChange(elem);
  },
  detached(elem) {
    emitSlotChange(elem);
  },
  updated(elem, prev) {
    emitSlotChange(elem);
    return Component.updated(elem, prev);
  },
  render(elem) {
    return (
      <div class={cx({ [css.locals.pane]: true, [css.locals.selected]: elem.selected })}>
        <style>{css.toString()}</style>
        <slot />
      </div>
    );
  },
});
