import { createSlice } from '@reduxjs/toolkit';

type modalState = {
  show: boolean;
};

const initialState: modalState = {
  show: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
});

export default modalSlice.reducer;
