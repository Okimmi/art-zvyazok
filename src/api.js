import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getUser } from "Redux/selectors";

console.log('TEST PAGE');
axios.defaults.baseURL = 'https://ctc.fly.dev';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    console.log(credentials);

    try {
      const res = await axios.post('/api/Auth/login', credentials);
      setAuthHeader(res.data.token.accessToken.token);
      console.log(res.data.token.accessToken.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    console.log(newUser);
    try {
      const res = await axios.post('/api/Auth/register', newUser);
      setAuthHeader(res.data.token.accessToken.token);
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken.accessToken);
      console.log(persistedToken);
      const res = await axios.post('/api/Token/refresh', persistedToken);

      console.log(res.data);

      const resUser = await axios.get('/api/User/details');

      return { token: res.data, user: resUser.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const GetAll = createAsyncThunk('auth/GetAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/api/User/all');
    // setAuthHeader(res.data.token);
    console.log(res);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editUser = createAsyncThunk(
  'auth/editUser',
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(`/api/User`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
