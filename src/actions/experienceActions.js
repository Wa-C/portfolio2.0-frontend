// src/actions/experienceActions.js
import axiosInstance from '../api/axiosInstance';

export const fetchExperiences = () => async (dispatch) => {
  dispatch({ type: 'FETCH_EXPERIENCES_REQUEST' });
  try {
    const response = await axiosInstance.get('/experience');
    dispatch({ type: 'FETCH_EXPERIENCES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({
      type: 'FETCH_EXPERIENCES_FAIL',
      payload: error.response ? error.response.data : error.message,
    });
  }
};
