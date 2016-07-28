import { Component, define, emit, vdom } from 'skatejs';
import page from 'page';

function createRouteHandler(elem, detail) {
  return () => {
    emit(elem, 'RouteChange', { detail });
  };
}

function onRouteUpdate(elem) {
  return e => {
    const { component, path } = e.target;
    if (component && path) {
      const curr = window.location.pathname;
      page(path, createRouteHandler(elem, component));
      if (curr === path) {
        page(curr);
      }
    }
  };
}

export default define('sk-router', {
  created(elem) {
    elem.addEventListener('RouteUpdate', onRouteUpdate(elem));
  },
});

export const Route = define('sk-router-route', {
  props: {
    component: {},
    path: {},
  },
  updated(elem) {
    const { component, path } = elem;
    if (component && path) {
      emit(elem, 'RouteUpdate', {
        detail: { component, path },
      });
    }
  },
});
