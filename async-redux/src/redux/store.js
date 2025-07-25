import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './users/pokemon';
import { contactApi } from './users/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    contactApi.middleware,
  ],
});
