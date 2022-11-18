import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'services/ApiContactsSlice';
import { filterReducer } from './phonebook/filterSlice';
import { authReducer } from './auth';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
