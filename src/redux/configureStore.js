import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Bookreducer from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  Bookreducer,
  checkStatusReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
