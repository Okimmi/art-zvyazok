import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instance } from 'Redux/constants';

export const fetchAllChats = createAsyncThunk(
  'chat/fetchAllChats',
  async (userId, thunkAPI) => {
    try {
      const response = await $instance.get(`/api/Chat/inbox?userId=${userId}`);
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
      const response = await $instance.get(`/api/Chat/c/${chatId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
