import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import AppRouter from './components/routers/AppRouter';
import { persistor, store } from './redux/store/configureStore';

import './index.scss';
import './helpers';

// get reactive (live) updates of our state
store.subscribe(() => {
  // log the current state
  console.log(store.getState());
});

/* give access to all components and their childs to the redux store */

const jsx = (
  <Provider store={store}>
    {/* <PersistGate loading={<Spinner />} persistor={persistor}> */}
    <AppRouter />
    {/* </PersistGate> */}
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
