// src/actions/blogActions.js
import axiosInstance from '../api/axiosInstance';

export const fetchBlogPosts = () => async (dispatch) => {
  dispatch({ type: 'FETCH_BLOG_POSTS_REQUEST' });
  try {
    const response = await axiosInstance.get('/blog');
    dispatch({ type: 'FETCH_BLOG_POSTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({
      type: 'FETCH_BLOG_POSTS_FAIL',
      payload: error.response ? error.response.data : error.message,
    });
  }
};
