// src/reducers/skillsReducer.js

const initialState = {
    list: [],
    loading: false,
    error: null,
  };
  
  export default function skillsReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_SKILLS_SUCCESS':
        return {
          ...state,
          list: action.payload,
          loading: false,
        };
      case 'FETCH_SKILLS_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      // Handle other actions
      default:
        return state;
    }
  }
  