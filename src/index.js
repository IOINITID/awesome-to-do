import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import './assets/styles/styles.scss';
import './assets/images/favicon.svg';

store.subscribe(() => {
  window.localStorage.setItem(`theme`, store.getState().theme);
  window.localStorage.setItem(`itemsData`, JSON.stringify(store.getState().itemsData));
});

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector(`.root`));
