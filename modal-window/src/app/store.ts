import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import modalReducer from '../features/modalSlice';

const rootReducer = combineReducers({
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
