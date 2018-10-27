//! redux
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { routerMiddleware } from 'react-router-redux';
//! redix-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
//! redux-thunk
import thunk from 'redux-thunk';
//! redux-router
import createHistory from 'history/createBrowserHistory';

// react-router
export const history = createHistory();

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: hardSet
};
// pass root reducer to persist reducer
// pass persist reducer config from above
const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, routerMiddleware(history)];

// instead of passing root reducer we pass persist reducer (included root reducer)
export const store = createStore(
  pReducer,
  compose(
    applyMiddleware(...middleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// pass redux store to persistor to be saved to local storage
export const persistor = persistStore(store);
