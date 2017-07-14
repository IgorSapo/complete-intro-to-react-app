import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
import App from './App';

window.Perf = Perf;
Perf.start();

const renderApp = () => {
  ReactDOM.render(<App />, document.querySelector('.app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
