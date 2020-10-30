import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root />, document.querySelector(`.root`));
