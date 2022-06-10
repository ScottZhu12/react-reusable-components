import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { imageDataType } from '../../types';

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const { data } = await axios.get(
    'https://scottzhu-json-server-data.herokuapp.com/expandCardImages'
  );
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
  reducers: {
    setActiveImage: (state, action) => {
      const newData = state.data.map((image) => {
        if (image.id === action.payload) {
          return { ...image, active: true };
        }

        return { ...image, active: false };
      });

      state.data = [...newData];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.data = [...action.payload];
    });
  },
});

export const { setActiveImage } = imageSlice.actions;

export default imageSlice.reducer;
