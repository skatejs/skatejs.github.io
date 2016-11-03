import { h } from 'skatejs';
import { cssFor, hover, style } from 'glamor';
import page from 'page';
import PrismCss from '!css!prismjs/themes/prism.css';
import Prism from 'prismjs';
import Tabs, { Tab } from '../tabs';

function followHref(e) {
  if (e.currentTarget.rel !== 'external') {
    page(e.target.pathname || '/');
    e.preventDefault();
  }
}

export const Css = props => <style>
  {props.for.length ?
    cssFor(...props.for) :
    cssFor(props.for)
  }
</style>;
export const Link = (props, chren) => <a {...props} onclick={followHref}>{chren}</a>;
export const Layout = (props, chren) => <div style="padding: 20px">{chren}</div>;



function format (code, lang = 'markup') {
  const lines = code.split('\n');
  const ident = (lines[1] || '').match(/^\s*/)[0].length;
  const formatted = lines.map(line => line.substring(ident)).join('\n').trim();
  const highlighted = Prism.highlight(formatted, Prism.languages[lang]);
  return highlighted;
}

const codeCss = style({
  backgroundColor: '#F1EDE4'
});
const codeTitleCss = style({
  backgroundColor: '#DAD6CE',
  fontSize: 24,
  fontWeight: 200,
  margin: 0,
  padding: 20
});
const codeDescriptionCss = style({
  backgroundColor: '#DAD6CE',
  fontSize: 14,
  fontWeight: 100,
  margin: 0,
  padding: 20
});

export const CodeExample = (props, chren) => (
  <div {...codeCss}>
    <style>{PrismCss.toString()}</style>
    <Css for={[codeCss, codeTitleCss, codeDescriptionCss]} />
    {props.title ? <h3 {...codeTitleCss}>{props.title}</h3> : ''}
    {props.description ? <h3 {...codeDescriptionCss}>{props.description}</h3> : ''}
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



const itemCss = style({
  display: 'inline-block',
  margin: 0,
  padding: 0
});

const itemLinkCss = style({
  color: '#333',
  display: 'inline-block',
  fontSize: 18,
  margin: 0,
  padding: 20,
  textDecoration: 'none',
  transition: 'background-color .3s ease'
});

const itemLinkHover = hover({
  backgroundColor: '#eee'
});

export const Item = (props, chren) => (
  <li {...itemCss}>
    <Css for={[itemCss, itemLinkCss, itemLinkHover]} />
    {props.external
      ? <a {...props} {...itemLinkCss} {...itemLinkHover}>{chren}</a>
      : <Link {...props} {...itemLinkCss} {...itemLinkHover}>{chren}</Link>}
  </li>
);