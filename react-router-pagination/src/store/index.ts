import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import postsReducer from '../features/posts';

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;