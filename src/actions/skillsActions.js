// src/actions/skillsActions.js
import axiosInstance from '../api/axiosInstance';

export const fetchSkills = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get('/skills');
    dispatch({ type: 'FETCH_SKILLS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_SKILLS_FAIL', payload: error.response.data });
  }
};
