import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'app/reducers/index.js';

import styles from './styles.scss';

const store = createStore(reducers);

function Content() {
  return (
    <Provider store={store}>
      <div className={styles.blue}>Hello React/Redux</div>
    </Provider>
  );
}


ReactDOM.render(<Content />, document.getElementById('content'));
