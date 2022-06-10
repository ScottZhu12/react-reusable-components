import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { imageDataType } from '../../types';

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const { data } = await axios.get('http://localhost:3001/images');
  console.log(data);

  return data;
});

interface imageSliceState {
  data: imageDataType[];
}

const initialState: imageSliceState = {
  data: [],
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.data = [...action.payload];
    });
  },
});

export default imageSlice.reducer;
