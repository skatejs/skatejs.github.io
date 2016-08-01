import * as skate from 'skatejs';
import css from './index.css';
import cssPrism from '!css!prismjs/themes/prism.css';
import Prism from 'prismjs';
import Tabs, { Tab } from '../../tabs';

const { define, vdom } = skate;

function format(code, lang = 'markup') {
  const lines = code.split('\n');
  const ident = lines[1].match(/^\s*/)[0].length;
  const formatted = lines.map(line => line.substring(ident)).join('\n').trim();
  const highlighted = Prism.highlight(formatted, Prism.languages[lang]);
  return highlighted;
}

const CodeExample = (props, chren) => (
  <div class={css.locals.code}>
    <style>{cssPrism.toString()}</style>
    {props.title ? <h3 class={css.locals.title}>{props.title}</h3> : ''}
    <Tabs>
      <Tab name="Result" selected>
        <p>{chren()}</p>
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
    <p>{chren()}</p>
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

skate.define('x-todo', {
  props: {
    items: skate.prop.array(),
    title: skate.prop.string({ attribute: true }),
    value: skate.prop.string({ attribute: true }),
  },
  attached(elem) {
    elem.mo = new MutationObserver(() => (elem.items = [...elem.children]));
    elem.mo.observe(elem, { childList: true });
  },
  detached(elem) {
    elem.mo.disconnect();
  },
  render(elem) {
    const numItems = elem.items.length;
    return (
      <div>
        <h3>{elem.title}{numItems ? ` (${numItems})` : ''}</h3>
        <form on-submit={submit(elem)}>
          <input on-keyup={skate.link(elem)} type="text" value={elem.value} />
          <button type="submit">Add {elem.value}</button>
        </form>
        {numItems ? (
          <ol>
            {elem.items.map((item, indx) => (
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

skate.define('x-todo-smart', {
  created(elem) {
    elem.addEventListener('x-todo-add', addTodo);
    elem.addEventListener('x-todo-remove', removeTodo);
  },
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
            html="
              <x-hello>Bob</x-hello>
            "
            js="
              skate.define('x-hello', {
                render() {
                  return <span>Hello, <slot />!</span>;
                },
              });
            "
          >
            <x-hello>Bob</x-hello>
          </CodeExample>
          <CodeExample
            title="Simple Counter"
            description="A simple counter that shows how to use Shadow DOM name slots and re-rendering."
            html="
              <x-counter count=&quot;1&quot;></x-counter>
            "
            js="
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
            "
          >
            <x-counter count="1"></x-counter>
          </CodeExample>
          <CodeExample 
            title="Todo List"
            html="
              <x-todo-smart>
                <x-todo title=&quot;Things I need to do&quot;>
                  <x-item>Get milk</x-item>
                  <x-item>Feed cats</x-item>
                </x-todo>
              </x-todo-smart>
            "
            js="
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

              skate.define('x-todo', {
                props: {
                  items: skate.prop.array(),
                  title: skate.prop.string({ attribute: true }),
                  value: skate.prop.string({ attribute: true }),
                },
                attached(elem) {
                  elem.mo = new MutationObserver(() => (elem.items = [...elem.children]));
                  elem.mo.observe(elem, { childList: true });
                },
                detached(elem) {
                  elem.mo.disconnect();
                },
                render(elem) {
                  const numItems = elem.items.length;
                  return (
                    <div>
                      <h3>{elem.title}{numItems ? ` (${numItems})` : ''}</h3>
                      <form on-submit={submit(elem)}>
                        <input on-keyup={skate.link(elem)} type=&quot;text&quot; value={elem.value} />
                        <button type=&quot;submit&quot;>Add {elem.value}</button>
                      </form>
                      {numItems ? (
                        <ol>
                          {elem.items.map((item, indx) => (
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

              skate.define('x-todo-smart', {
                created(elem) {
                  elem.addEventListener('x-todo-add', addTodo);
                  elem.addEventListener('x-todo-remove', removeTodo);
                },
              });
            "
          >
            <x-todo-smart>
              <x-todo title="Things I need to do">
                <x-item>Get milk</x-item>
                <x-item>Feed cats</x-item>
              </x-todo>
            </x-todo-smart>
          </CodeExample>
        </div>
      </div>
    );
  },
});
