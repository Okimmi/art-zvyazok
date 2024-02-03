import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instance } from 'Redux/constants';

const setAuthHeader = token => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  $instance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const res = await $instance.post('/api/Auth/register', newUser);
      setAuthHeader(res.data.token.accessToken.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    console.log(credentials);

    try {
      const res = await $instance.post('/api/Auth/login', credentials);
      setAuthHeader(res.data.token.accessToken.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await $instance.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken.accessToken);
    // const res = await $instance.post('/api/Token/refresh', persistedToken);

    const resUser = await $instance.get('/api/User/details');

    // return { token: res.data, user: resUser.data };
    return { user: resUser.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const GetAll = createAsyncThunk('auth/GetAll', async (_, thunkAPI) => {
  try {
    const res = await $instance.get('/api/User/all');
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
      const response = await $instance.put(`/api/User`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
