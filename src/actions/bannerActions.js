// src/actions/bannerActions.js
import axiosInstance from '../api/axiosInstance';

export const fetchBanner = () => async (dispatch) => {
  dispatch({ type: 'FETCH_BANNER_REQUEST' });
  try {
    const response = await axiosInstance.get('/banner');
    dispatch({ type: 'FETCH_BANNER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({
      type: 'FETCH_BANNER_FAIL',
      payload: error.response ? error.response.data : error.message,
    });
  }
};
