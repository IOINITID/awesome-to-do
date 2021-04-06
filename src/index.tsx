import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import App from './components/app/app';
import './assets/styles/styles.scss';
import './assets/images/favicon.svg';

store.subscribe(() => {
  window.localStorage.setItem('theme', store.getState().theme.value);
  window.localStorage.setItem('itemsData', JSON.stringify(store.getState().app.itemsData));
  window.localStorage.setItem('language', store.getState().app.language);
});

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector(`.root`));
