import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'services/ApiSlice';
import { filterReducer } from './phonebook/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
