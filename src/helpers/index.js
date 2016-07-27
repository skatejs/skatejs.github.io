import { vdom } from 'skatejs';
import page from 'page';

function followHref(e) {
  page(e.target.pathname || '/');
  e.preventDefault();
}

export const Link = (props, chren) => <a {...props} onclick={followHref}>{chren()}</a>;
