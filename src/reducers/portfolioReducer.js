// src/reducers/portfolioReducer.js

const initialState = {
    projects: [],
    loading: false,
    error: null,
  };
  
  export default function portfolioReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_PROJECTS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_PROJECTS_SUCCESS':
        return {
          ...state,
          projects: action.payload,
          loading: false,
        };
      case 'FETCH_PROJECTS_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  