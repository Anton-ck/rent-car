import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  cars: [],
};

const favoritesSlice = createSlice({
  name: 'favoritesCar',
  initialState: favoritesInitialState,

  reducers: {
    incrementToFavoriteList(state, action) {
      state.cars.push(action.payload);
    },
    decrementToFavoriteList(state, action) {
      //   return (state = state.filter(car => car !== action.payload));
      state.cars = state.cars.filter(car => car !== action.payload);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { incrementToFavoriteList, decrementToFavoriteList } =
  favoritesSlice.actions;
