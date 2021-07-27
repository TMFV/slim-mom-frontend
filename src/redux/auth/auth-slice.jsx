import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  user: null,
  token: null,
  error: null,
  isLoggedOn: false,
  isLoading: false,
};

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: initialUserState,
  reducers: {
    registerRequest: state => {
      console.log(state);
      state.isLoading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedOn = true;
    },
    registerError: (state, { payload }) => {
      console.log(state, payload);
      state.error = payload;
      state.isLoading = false;
      state.isLoggedOn = false;
    },
    loginRequest: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedOn = true;
    },
    loginError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isLoggedOn = false;
    },
    logoutRequest: state => {
      state.isLoading = true;
    },
    logoutSuccess: state => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.isLoggedOn = false;
    },
    logoutError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    getCurrentUserRequest: (state, { payload }) => {
      state.isLoading = true;
    },
    getCurrentUserSuccess: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.isLoggedOn = true;
    },
    getCurrentUserError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isLoggedOn = false;
    },
  },
});

// eslint-disable-next-line
export default { actions, reducer };
