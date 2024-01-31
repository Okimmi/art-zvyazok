import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  editUser,
} from 'Redux/auth/operations';
import { updateUserData } from '../actions';
import { toast } from 'react-toastify';

const initialState = {
  user: {},
  token: { accessToken: null, refreshToken: null },
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    //fullfilled
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token.accessToken = action.payload.token.accessToken.token;
      state.token.refreshToken = action.payload.token.refreshToken;
      state.isLoggedIn = true;
      toast.success('Ласкаво просимо!');
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token.accessToken = action.payload.token.accessToken.token;
      state.token.refreshToken = action.payload.token.refreshToken;
      state.isLoggedIn = true;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      toast.success('Данні змінено');
      return {
        ...state,
        user: action.payload.user,
        token: {
          accessToken: action.payload.token.accessToken.token,
          refreshToken: action.payload.token.refreshToken,
        },
        isLoggedIn: true,
      };
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token.accessToken = action.payload.token.accessToken.token;
      state.token.refreshToken = action.payload.token.refreshToken;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(updateUserData, (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    });
    //pending
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    //rejected
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
    });
  },
});

export const { setEmail } = authSlice.actions;
export const authReducer = authSlice.reducer;
