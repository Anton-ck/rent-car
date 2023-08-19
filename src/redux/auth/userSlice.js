import { createSlice } from '@reduxjs/toolkit';

import {
  loginUser,
  logoutUser,
  refreshUser,
  signupUser,
  updateAvatar,
} from './operationsWithUser';

const initialState = {
  user: { name: null, email: null, avatar: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signupUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [logoutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [updateAvatar.fulfilled](state, action) {
      state.user.avatar = action.payload.avatarURL;
    },
  },
});

export const authReducer = authSlice.reducer;
