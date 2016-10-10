import * as skate from 'skatejs';
import css from './index.css';
import cssPrism from '!css!prismjs/themes/prism.css';
import Prism from 'prismjs';
import Tabs, { Tab } from '../../tabs';

const { define, h } = skate;

function format(code, lang = 'markup') {
  const lines = code.split('\n');
  const ident = (lines[1] || '').match(/^\s*/)[0].length;
  const formatted = lines.map(line => line.substring(ident)).join('\n').trim();
  const highlighted = Prism.highlight(formatted, Prism.languages[lang]);
  return highlighted;
}

const CodeExample = (props, chren) => (
  <div class={css.locals.code}>
    <style>{cssPrism.toString()}</style>
    {props.title ? <h3 class={css.locals.title}>{props.title}</h3> : ''}
    {props.description ? <h3 class={css.locals.description}>{props.description}</h3> : ''}
    <Tabs>
      <Tab name="Result" selected>
        <p>{chren}</p>
      </Tab>
      <Tab name="JS">
        <pre><code ref={e => (e.innerHTML = format(props.js, 'javascript'))}></code></pre>
      </Tab>
      <Tab name="HTML">
        <pre><code ref={e => (e.innerHTML = format(props.html, 'markup'))}></code></pre>
      </Tab>
    </Tabs>
  </div>
);

const FeaturePane = (props, chren) => (
  <div class={css.locals.featurePane}>
    <h3>{props.title}</h3>
    <p>{chren}</p>
  </div>
);



// Hello World

skate.define('x-hello', {
  render() {
    return <span>Hello, <slot />!</span>;
  },
});



// Simple Counter

skate.define('x-counter', {
  props: {
    count: skate.prop.number(),
  },
  attached(elem) {
    elem.__ival = setInterval(() => ++elem.count, 1000);
  },
  detached(elem) {
    clearInterval(elem.__ival);
  },
  render(elem) {
    return <span>Count: {elem.count}</span>;
  },
});



// Todo List

// Dumb component that just emits events when something happens.

function remove(elem, indx) {
  return () => {
    skate.emit(elem, 'x-todo-remove', { detail: {
      todo: elem,
      item: elem.children[indx],
    } });
  };
}

function submit(elem) {
  return e => {
    skate.emit(elem, 'x-todo-add', { detail: {
      todo: elem,
      item: elem.value,
    } });
    e.preventDefault();
  };
}

const symItems = Symbol();
const Xtodo = skate.define('x-todo', {
  props: {
    [symItems]: skate.prop.array(),
    title: skate.prop.string({ attribute: true }),
    value: skate.prop.string({ attribute: true }),
  },
  render(elem) {
    const numItems = elem[symItems].length;
    return (
      <div>
        {/* To hide a slot, it must be wrapped in an element that is hidden.
          Setting display to none doesn't seem to work on slot elements. */}
        <div style={{ display: 'none' }}>
          {/* Updates the list of items when the slot receives new assigned nodes. */}
          <slot on-slotchange={() => (elem[symItems] = [...elem.children])} />
        </div>
        <h3>{elem.title}{numItems ? ` (${numItems})` : ''}</h3>
        <form on-submit={submit(elem)}>
          <input on-keyup={skate.link(elem)} type="text" value={elem.value} />
          <button type="submit">Add {elem.value}</button>
        </form>
        {numItems ? (
          <ol>
            {elem[symItems].map((item, indx) => (
              <li>
                {item.textContent}
                <button on-click={remove(elem, indx)}>x</button>
              </li>
            ))}
          </ol>
        ) : (
          <p>There is nothing to do.</p>
        )}
      </div>
    );
  },
});


// Smart component so <x-todo> doesn't mutate itself.

function addTodo(e) {
  const { item, todo } = e.detail;
  const xitem = document.createElement('x-item');
  xitem.textContent = item;
  todo.appendChild(xitem);
  todo.value = '';
}

function removeTodo(e) {
  const { item, todo } = e.detail;
  todo.removeChild(item);
}

skate.define('x-todo-smart', class extends Xtodo {
  static created(elem) {
    elem.addEventListener('x-todo-add', addTodo);
    elem.addEventListener('x-todo-remove', removeTodo);
  }
});



export default define('sk-page-index', {
  render() {
    return (
      <div>
        <style>{css.toString()}</style>
        <div class={css.locals.hero}>
          <h1>SkateJS</h1>
          <p>Skate is a functional, featherweight and cross-framework compatible web component library built on W3C specs.</p>
        </div>
        <div class={css.locals.featurePanes}>
          <FeaturePane title="Forward-thinking">
            Skate leverages the web platform and is built on top of the <a href="https://github.com/w3c/webcomponents">W3C Web Component specs</a>. From this it gets native performance, longevity and cross-framework compatibility.
          </FeaturePane>
          <FeaturePane title="Functional">
            <a href="https://github.com/google/incremental-dom">Incremental DOM</a> backs Skate's functional rendering pipeline, offering performance, memory-efficiency and simplicity.
          </FeaturePane>
          <FeaturePane title="Featherweight">
            Weighing in at only 5k min+gz, it gives you a solid foundation for building complex UI components without downloading the entire internet.
          </FeaturePane>
        </div>
        <div class={`${css.locals.grid} ${css.locals.grid2}`}>
          <CodeExample
            title="Hello World"
            description="A simple hello world example."
            html={`
              <x-hello>Bob</x-hello>
            `}
            js={`
              skate.define('x-hello', {
                render() {
                  return <span>Hello, <slot />!</span>;
                },
              });
            `}
          >
            <x-hello>Bob</x-hello>
          </CodeExample>
          <CodeExample
            title="Simple Counter"
            description="A simple counter that shows how to use Shadow DOM name slots and re-rendering."
            html={`
              <x-counter count="1"></x-counter>
            `}
            js={`
              skate.define('x-counter', {
                props: {
                  count: skate.prop.number(),
                },
                attached(elem) {
                  elem.__ival = setInterval(() => ++elem.count, 1000);
                },
                detached(elem) {
                  clearInterval(elem.__ival);
                },
                render(elem) {
                  return <span>Count: {elem.count}</span>;
                },
              });
            `}
          >
            <x-counter count="1"></x-counter>
          </CodeExample>
          <CodeExample
            title="Todo List"
            description="The todo list is broken down into two separate components: a stateful one and a stateless one. The stateless one can be used anywhere and it does not mutate it's own state, however, you have to wire up the state / DOM changes. This is useful integrating with any library / framework that needs to control the state / DOM mutations such as some React apps. The smart one wires this up for you and is simpler for most use-cases that don't care if the component maintains its own state."
            html={`
              <x-todo-smart title="Things to do">
                <x-item>Get milk</x-item>
                <x-item>Feed cats</x-item>
              </x-todo-smart>
            `}
            js={`
              // Dumb component that just emits events when something happens.

              function remove(elem, indx) {
                return () => {
                  skate.emit(elem, 'x-todo-remove', { detail: {
                    todo: elem,
                    item: elem.children[indx],
                  } });
                };
              }

              function submit(elem) {
                return e => {
                  skate.emit(elem, 'x-todo-add', { detail: {
                    todo: elem,
                    item: elem.value,
                  } });
                  e.preventDefault();
                };
              }

              const symItems = Symbol();
              const Xtodo = skate.define('x-todo', {
                props: {
                  [symItems]: skate.prop.array(),
                  title: skate.prop.string({ attribute: true }),
                  value: skate.prop.string({ attribute: true }),
                },
                render(elem) {
                  const numItems = elem[symItems].length;
                  return (
                    <div>
                      {/* To hide a slot, it must be wrapped in an element that is hidden.
                        Setting display to none doesn't seem to work on slot elements. */}
                      <div style={{ display: 'none' }}>
                        {/* Updates the list of items when the slot receives new assigned nodes. */}
                        <slot on-slotchange={() => (elem[symItems] = [...elem.children])} />
                      </div>
                      <h3>{elem.title}{numItems ? \` (\${numItems})\` : ''}</h3>
                      <form on-submit={submit(elem)}>
                        <input on-keyup={skate.link(elem)} type="text" value={elem.value} />
                        <button type="submit">Add {elem.value}</button>
                      </form>
                      {numItems ? (
                        <ol>
                          {elem[symItems].map((item, indx) => (
                            <li>
                              {item.textContent}
                              <button on-click={remove(elem, indx)}>x</button>
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <p>There is nothing to do.</p>
                      )}
                    </div>
                  );
                },
              });


              // Smart component so <x-todo> doesn't mutate itself.

              function addTodo(e) {
                const { item, todo } = e.detail;
                const xitem = document.createElement('x-item');
                xitem.textContent = item;
                todo.appendChild(xitem);
                todo.value = '';
              }

              function removeTodo(e) {
                const { item, todo } = e.detail;
                todo.removeChild(item);
              }

              skate.define('x-todo-smart', class extends Xtodo {
                static created(elem) {
                  elem.addEventListener('x-todo-add', addTodo);
                  elem.addEventListener('x-todo-remove', removeTodo);
                }
              });
            `}
          >
            <x-todo-smart title="Things to do">
              <x-item>Get milk</x-item>
              <x-item>Feed cats</x-item>
            </x-todo-smart>
          </CodeExample>
        </div>
      </div>
    );
  },
});
