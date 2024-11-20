// src/reducers/servicesReducer.js

const initialState = {
    list: [],
    loading: false,
    error: null,
  };
  
  export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_SERVICES_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_SERVICES_SUCCESS':
        return {
          ...state,
          list: action.payload,
          loading: false,
        };
      case 'FETCH_SERVICES_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  