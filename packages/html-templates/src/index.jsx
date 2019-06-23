/* global module */
import { render } from 'preact';
import 'preact/debug';

import App from './app';
import './default.css';

const jobs = window.__INITIAL_DATA__; // eslint-disable-line no-underscore-dangle

if (__DEVELOPMENT__) {
  require('preact/debug'); // eslint-disable-line global-require
}

let appElm = document.body.firstElementChild;

const renderStandaloneApp = () => {
  appElm = render(<App jobs={jobs} />, document.body, appElm);
};

if (module.hot) {
  module.hot.accept('./index.jsx', renderStandaloneApp);
}

renderStandaloneApp();
