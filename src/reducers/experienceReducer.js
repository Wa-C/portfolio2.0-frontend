// src/reducers/experienceReducer.js

const initialState = {
    list: [],
    loading: false,
    error: null,
  };
  
  export default function experienceReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_EXPERIENCES_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_EXPERIENCES_SUCCESS':
        return {
          ...state,
          list: action.payload,
          loading: false,
        };
      case 'FETCH_EXPERIENCES_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  