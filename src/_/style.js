/** @jsx h */

import { h } from 'skatejs';

export default function (css) {
  return <style>{css.toString()}</style>;
}
