import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import imageReducer from '../features/imageSlice';

const rootReducer = combineReducers({
  image: imageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
