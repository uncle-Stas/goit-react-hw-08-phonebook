import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, current } from './authOperations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  isCurrentUserLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [signup.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.user = action.payload.user;
      store.token = action.payload.token;
      store.isLogin = true;
    },
    [signup.rejected]: (store, action) => {
      store.isLoading = false;
      store.error = action.payload;
    },

    [login.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [login.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.user = action.payload.user;
      store.token = action.payload.token;
      store.isLogin = true;
    },
    [login.rejected]: (store, action) => {
      store.isLoading = false;
      store.error = action.payload;
    },

    [logout.pending]: store => {
      store.isLoading = true;
      store.error = null;
    },
    [logout.fulfilled]: store => {
      store.isLoading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
    },
    [logout.rejected]: (store, action) => {
      store.isLoading = false;
      store.error = action.payload;
    },

    [current.pending]: store => {
      store.isLoading = true;
      store.error = null;
      store.isCurrentUserLoading = true;
    },
    [current.fulfilled]: (store, action) => {
      store.isLoading = false;
      store.user = action.payload;
      store.isLogin = true;
      store.isCurrentUserLoading = false;
    },
    [current.rejected]: (store, action) => {
      store.isLoading = false;
      store.error = action.payload;
      store.isCurrentUserLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
