import {createStore} from 'redux';
import reducer from '../reducers/index';

// const store = createStore(reducer);

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const store = process.env.NODE_ENV !== `production` && typeof window === `object` ? createStore(reducer, reduxDevTools) : createStore(reducer);

export default store;
