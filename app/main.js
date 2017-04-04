import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index.js';

const store = createStore(reducers);

function Content() {
  return (
    <Provider store={store}>
      <div>Hello React/Redux ;)</div>
    </Provider>
  );
}


ReactDOM.render(<Content />, document.getElementById('content'));
