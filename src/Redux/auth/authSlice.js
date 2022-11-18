import { createSlice } from '@reduxjs/toolkit';
import { signup } from './authOperations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
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
      store.error = null;
    },
    [signup.rejected]: (store, action) => {
      store.isLoading = false;
      store.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
