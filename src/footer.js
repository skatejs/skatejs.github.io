import { merge, style } from 'glamor';
import { h } from 'skatejs';
import { Css, Link } from './helpers';
import logoGithub from './assets/logo-github.png';
import logoTwitter from './assets/logo-twitter.svg';

const footerCss = style({
  color: '#eee',
  fontSize: 12,
  paddingBottom: 38,
  textAlign: 'center'
});

const githubLogoStyle = style({
  marginBottom: 10
});

export default () => (
  <div {...footerCss}>
    <Css for={[footerCss, githubLogoStyle]} />
    <Link rel="external" href="https://github.com/skatejs/skatejs"><img src={logoGithub} height="26" {...githubLogoStyle} /></Link>
    <Link rel="external" href="https://twitter.com/skate_js"><img src={logoTwitter} height="48" /></Link>
  </div>
);
