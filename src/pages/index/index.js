import { Component, define, emit, h, link, prop } from 'skatejs';
import { CodeExample } from '../../helpers';
import css from './index.css';

const { customElements } = window;

const FeaturePane = (props, chren) => (
  <div class={css.locals.featurePane}>
    <h3>{props.title}</h3>
    <p>{chren}</p>
  </div>
);

// Hello World

/** @jsx h */
// import { Component, h } from 'skatejs';

class Hello extends Component {
  renderCallback () {
    return <span>Hello, <slot />!</span>;
  }
}

customElements.define('x-hello', Hello);

// Simple Counter

/** @jsx h */
// import { Component, h, prop } from 'skatejs';

const _interval = Symbol();

class Counter extends Component {
  static get props () {
    return { count: prop.number() };
  }
  connectedCallback () {
    super.connectedCallback();
    this[_interval] = setInterval(() => ++this.count, 1000);
  }
  disconnectedCallback () {
    super.disconnectedCallback();
    clearInterval(this[_interval]);
  }
  renderCallback () {
    return <span>Count: {this.count}</span>;
  }
}

customElements.define('x-counter', Counter);

// Todo List

// Dumb component that just emits events when something happens.

// import { Component, emit, h, link, prop } from 'skatejs';

function remove (elem, indx) {
  return () => {
    emit(elem, 'x-todo-remove', { detail: {
      todo: elem,
      item: elem.children[indx]
    } });
  };
}

function submit (elem) {
  return e => {
    emit(elem, 'x-todo-add', { detail: {
      todo: elem,
      item: elem.value
    } });
    e.preventDefault();
  };
}

// This is currently in RFC: https://github.com/skatejs/skatejs/issues/863
const { MutationObserver } = window;
const symCache = Symbol();
const symDefault = Symbol();
const symMap = Symbol();
const symMo = Symbol();
const symProps = Symbol();

function distribute (cache, child) {
  const slot = child.getAttribute('slot') || symDefault;
  cache[slot] = cache[slot] || [];
  cache[slot].push(child);
  return cache;
}

function distributed ({ children }) {
  return [...children].reduce(distribute, {});
}

function slotMap (elem, name) {
  return elem[symMap][name] || symDefault;
}

function updateProp (elem, name, distributed) {
  elem[name] = distributed[slotMap(elem, name)];
}

function updateProps ({ target: elem }) {
  const dist = distributed(elem);
  elem[symProps].forEach(name => updateProp(elem, name, dist));
}

const slot = prop.create({
  slot: null,
  get (elem, { name }) {
    if (!elem[symMo]) {
      const mo = new MutationObserver(muts => muts.forEach(updateProps));
      mo.observe(elem, { childList: true });
      elem[symMo] = mo;
      elem[symCache] = distributed(elem);
      elem[symMap] = {};
      elem[symProps] = [];
    }
    elem[symMap][name] = this.slot;
    elem[symProps].push(name);
    return elem[symCache][slotMap(elem, name)];
  },
  set (elem, { name, newValue }) {
    elem[symCache][slotMap(elem, name)] = newValue || [];
  }
});

const _items = Symbol();

class Todo extends Component {
  static get props () {
    return {
      [_items]: slot(),
      title: prop.string({ attribute: true }),
      value: prop.string({ attribute: true })
    };
  }
  renderCallback () {
    const numItems = this[_items].length;
    return (
      <div>
        <h3>{this.title} ({numItems})</h3>
        <form on-submit={submit(this)}>
          <input on-keyup={link(this)} type='text' value={this.value} />
          <button type='submit'>Add {this.value}</button>
        </form>
        {numItems ? (
          <ol>
            {this[_items].map((item, indx) => (
              <li>
                {item.textContent}
                <button on-click={remove(this, indx)}>x</button>
              </li>
            ))}
          </ol>
        ) : (
          <p>There is nothing to do.</p>
        )}
      </div>
    );
  }
}

// Smart component so <Todo /> doesn't mutate itself.

function addTodo (e) {
  const { item, todo } = e.detail;
  const xitem = document.createElement('x-item');
  xitem.textContent = item;
  todo.appendChild(xitem);
  todo.value = '';
}

function removeTodo (e) {
  const { item, todo } = e.detail;
  todo.removeChild(item);
}

class TodoSmart extends Todo {
  static created (elem) {
    elem.addEventListener('x-todo-add', addTodo);
    elem.addEventListener('x-todo-remove', removeTodo);
  }
}

customElements.define('x-todo', Todo);
customElements.define('x-todo-smart', TodoSmart);

export default define(class extends Component {
  renderCallback () {
    return (
      <div>
        <style>{css.toString()}</style>
        <div class={css.locals.hero}>
          <h1>SkateJS</h1>
          <p>Skate is a functional, featherweight and cross-framework compatible web component library built on W3C specs.</p>
        </div>
        <div class={css.locals.featurePanes}>
          <FeaturePane title='Forward-thinking'>
            Skate leverages the web platform and is built on top of the <a href='https://github.com/w3c/webcomponents'>W3C Web Component specs</a>. From this it gets native performance, longevity and cross-framework compatibility.
          </FeaturePane>
          <FeaturePane title='Functional'>
            <a href='https://github.com/google/incremental-dom'>Incremental DOM</a> backs Skate's functional rendering pipeline, offering performance, memory-efficiency and simplicity.
          </FeaturePane>
          <FeaturePane title='Featherweight'>
            Weighing in at only 5k min+gz, it gives you a solid foundation for building complex UI components without downloading the entire internet.
          </FeaturePane>
        </div>
        <div class={`${css.locals.grid} ${css.locals.grid2}`}>
          <CodeExample
            title='Hello World'
            description='A simple hello world example.'
            html={`
              <x-hello>Bob</x-hello>
            `}
            js={`
              /** @jsx h */
              import { Component, h } from 'skatejs';

              class Hello extends Component {
                renderCallback () {
                  return <span>Hello, <slot />!</span>;
                }
              }

              customElements.define('x-hello', Hello);
            `}
          >
            <x-hello>Bob</x-hello>
          </CodeExample>
          <CodeExample
            title='Simple Counter'
            description='A simple counter that shows how to use Shadow DOM name slots and re-rendering.'
            html={`
              <x-counter count="1"></x-counter>
            `}
            js={`
              /** @jsx h */
              import { Component, h, prop } from 'skatejs';

              const _interval = Symbol();

              class Counter extends Component {
                static get props () {
                  return { count: prop.number() };
                }
                connectedCallback () {
                  super.connectedCallback();
                  this[_interval] = setInterval(() => ++this.count, 1000);
                }
                disconnectedCallback () {
                  super.disconnectedCallback();
                  clearInterval(this[_interval]);
                }
                renderCallback () {
                  return <span>Count: {this.count}</span>;
                }
              }

              customElements.define('x-counter', Counter);
            `}
          >
            <Counter count='1' />
          </CodeExample>
        </div>
      </div>
    );
  }
});
