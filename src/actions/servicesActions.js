// src/actions/servicesActions.js
import axiosInstance from '../api/axiosInstance';

export const fetchServices = () => async (dispatch) => {
  dispatch({ type: 'FETCH_SERVICES_REQUEST' });
  try {
    const response = await axiosInstance.get('/services');
    dispatch({ type: 'FETCH_SERVICES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({
      type: 'FETCH_SERVICES_FAIL',
      payload: error.response ? error.response.data : error.message,
    });
  }
};
