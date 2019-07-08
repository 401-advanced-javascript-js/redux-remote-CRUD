import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reporter from './middleware/reporter';
import recordsReducer from '../components/record/reducers';

const reducers = combineReducers({
  records: recordsReducer,
});

export default () => createStore(reducers, composeWithDevTools(applyMiddleware(reporter)));
