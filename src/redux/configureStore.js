import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Bookreducer from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  Bookreducer,
  checkStatusReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
