import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reporter from './middleware/reporter';

import recordsReducer from '../components/record/reducers';

const reducers = combineReducers({
  records: recordsReducer,
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(reporter)));
export default store;
