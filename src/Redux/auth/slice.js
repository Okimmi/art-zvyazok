import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refresh,
  register,
  editUser,
} from 'Redux/auth/operations';
import { updateUserData } from '../actions';

const initialState = {
  user: {},
  token: { accessToken: null, refreshToken: null },
  isLoggedIn: false,
  isLoading: false,
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
      state.isLoading = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token.accessToken = action.payload.token.accessToken.token;
      state.token.refreshToken = action.payload.token.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: {
          accessToken: action.payload.token.accessToken.token,
          refreshToken: action.payload.token.refreshToken,
        },
        isLoading: false,
      };
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = {};
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token.accessToken = action.payload.token.accessToken.token;
      state.token.refreshToken = action.payload.token.refreshToken;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(updateUserData, (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoading = false;
    });
    //pending
    builder.addCase(refresh.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logIn.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(register.pending, state => {
      state.isLoading = true;
    });
    //rejected
    builder.addCase(refresh.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { setEmail } = authSlice.actions;
export const authReducer = authSlice.reducer;
