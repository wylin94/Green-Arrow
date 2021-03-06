import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import portfolio from './portfolio';
import watchlist from './watchlist';
import stock from './stock';
import stockDetail from './stockDetail';
import stockDetailAll from './stockDetailAll';
import watchlistDetailAll from './watchlistDetailAll';
import stockGraph from './stockGraph';
import stockGraphAll from './stockGraphAll';
import watchlistGraphAll from './watchlistGraphAll';

const rootReducer = combineReducers({
  session,
  portfolio,
  watchlist,
  stock,
  stockDetail,
  stockDetailAll,
  watchlistDetailAll,
  stockGraph,
  stockGraphAll,
  watchlistGraphAll,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
