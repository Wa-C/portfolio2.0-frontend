// src/actions/authActions.js
import axiosInstance from '../api/axiosInstance';

export const login = (credentials, history) => async (dispatch) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    history.push('/admin');
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};
