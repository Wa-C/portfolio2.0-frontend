// src/reducers/bannerReducer.js

const initialState = {
    image_url: null,
    cv_url: null,
    loading: false,
    error: null,
  };
  
  export default function bannerReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_BANNER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_BANNER_SUCCESS':
        return {
          ...state,
          image_url: action.payload.image_url,
          cv_url: action.payload.cv_url,
          loading: false,
        };
      case 'FETCH_BANNER_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  