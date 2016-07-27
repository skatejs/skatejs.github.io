import * as skate from 'skatejs';
import css from './index.css';

const { define, vdom } = skate;

function format(code) {
  const lines = code.split('\n');
  const ident = lines[1].match(/^\s*/)[0].length;
  return lines.map(line => line.substring(ident)).join('\n').trim();
}

const CodeExample = (props, chren) => (
  <div class={css.locals.codeExample}>
    <div>
      <h3>JS</h3>
      <pre><code>{format(props.js)}</code></pre>
    </div>
    <div>
      <h3>HTML</h3>
      <pre><code>{format(props.html)}</code></pre>
    </div>
    <div>
      <h3>Result</h3>
      <p>{chren()}</p>
    </div>
  </div>
);

const FeaturePane = (props, chren) => (
  <div class={css.locals.featurePane}>
    <h3>{props.title}</h3>
    <p>{chren()}</p>
  </div>
);



// Examples

skate.define('x-hello', {
  render() {
    return <span>Hello, <slot />!</span>;
  },
});

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
        <CodeExample
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
      </div>
    );
  },
});
