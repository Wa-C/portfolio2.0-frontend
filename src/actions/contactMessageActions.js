// src/actions/contactMessageActions.js
import axiosInstance from '../api/axiosInstance';

export const fetchContactMessage = () => async (dispatch) => {
  dispatch({ type: 'FETCH_CONTACT_MESSAGE_REQUEST' });
  try {
    const response = await axiosInstance.get('/contact');
    dispatch({ type: 'FETCH_CONTACT_MESSAGE_SUCCESS', payload: response.data });
    console.log(response.data);
  } catch (error) {
    dispatch({
      type: 'FETCH_CONTACT_MESSAGE_FAIL',
      payload: error.response ? error.response.data : error.message,
    });
  }
};
