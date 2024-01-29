import { displayTopArtists } from './newsOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topArtists: [],
};

const topArtistsSlice = createSlice({
  name: 'topArtists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(displayTopArtists.fulfilled, (state, action) => {
      state.topArtists = action.payload;
    });
  },
});

export const { setTopArtists } = topArtistsSlice.actions;
export const userTopArtistsReducer = topArtistsSlice.reducer;