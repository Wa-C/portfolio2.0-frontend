// src/actions/portfolioActions.js
import axiosInstance from '../api/axiosInstance';

export const fetchProjects = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PROJECTS_REQUEST' });
  try {
    const response = await axiosInstance.get('/portfolio');
    dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({
      type: 'FETCH_PROJECTS_FAIL',
      payload: error.response ? error.response.data : error.message,
    });
  }
};
