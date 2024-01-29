import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://ctc.fly.dev';

export const fetchAll = createAsyncThunk(
  'chat/fetchAll',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/Chat/inbox?userId=${userId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchActiveChat = createAsyncThunk(
  'chat/fetchActiveChat',
  async (chatId, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/Chat/c/${chatId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
