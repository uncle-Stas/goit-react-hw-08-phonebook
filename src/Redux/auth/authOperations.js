import { createAsyncThunk } from '@reduxjs/toolkit';

import * as ApiAuth from 'services/ApiAuth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await ApiAuth.signup(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
