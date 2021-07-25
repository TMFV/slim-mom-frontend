import axios from 'axios';
import apiService from '../../service/service-api';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { authSlice } from '.';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authSlice.actions.registerRequest());
  console.log(credentials);
  try {
    const { data } = await apiService.registerUser(credentials);
    token.set(data.token);
    dispatch(authSlice.actions.registerSuccess(data));
  } catch (error) {
    // toast.error(error.message);
    console.log(error.message);
    dispatch(authSlice.actions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authSlice.actions.loginRequest());

  try {
    const { data } = await apiService.logInUser(credentials);

    token.set(data.token);
    dispatch(authSlice.actions.loginSuccess(data));
  } catch (error) {
    // toast.error(error.message);
    dispatch(authSlice.actions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authSlice.actions.logoutRequest());

  try {
    await apiService.logOutUser();

    token.unset();
    dispatch(authSlice.actions.logoutSuccess());
  } catch (error) {
    //   toast.error(error.message);
    dispatch(authSlice.actions.logoutError(error.message));
  }
};

const currentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authSlice.actions.getCurrentUserRequest());

  try {
    const { data } = await apiService.getCurrentUser();

    dispatch(authSlice.actions.getCurrentUserSuccess(data));
  } catch (error) {
    // toast.error(error.message);
    dispatch(authSlice.actions.getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line
export default { register, logIn, logOut, currentUser };
