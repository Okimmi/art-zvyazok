// Замените 'YOUR_API_KEY' на ваш ключ Last.fm API
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const api_key = '99acc054925fce6ea6def0a629729eb0';

export const displayTopArtists = createAsyncThunk(
  'topArtists/fetch',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=${api_key}&format=json`);
      console.log(res.data);
      return res.data.artists.artist;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);