import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/Api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      return await API.getContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      return await API.addContact(contact);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await API.deleteContact(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
