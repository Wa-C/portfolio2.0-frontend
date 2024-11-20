// src/reducers/blogReducer.js

const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  export default function blogReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_BLOG_POSTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_BLOG_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          loading: false,
        };
      case 'FETCH_BLOG_POSTS_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  