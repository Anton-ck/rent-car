import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { carsReducer } from './cars/carsSlice';
import { favoritesReducer } from './favorite/favoriteSlice';

const persistConfig = {
  key: 'favoritesCar',
  storage,
  // whitelist: ['token'],
};

const rootReducer = combineReducers({
  cars: carsReducer,
  favorites: persistReducer(persistConfig, favoritesReducer),

  // filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
