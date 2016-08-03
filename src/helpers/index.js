import { vdom } from 'skatejs';
import { cssFor } from 'glamor';
import page from 'page';

function followHref(e) {
  page(e.target.pathname || '/');
  e.preventDefault();
}

export const Css = (props, chren) => {
  const { tag } = props;
  const Tag = tag || 'div';
  delete props.key;
  delete props.statics;
  delete props.tag;
  return (
    <Tag {...props}>
      <style>{cssFor(props)}</style>
      {chren()}
    </Tag>
  );
};
export const Link = (props, chren) => <a {...props} onclick={followHref}>{chren()}</a>;
export const Layout = (props, chren) => <div style="padding: 20px">{chren()}</div>;
