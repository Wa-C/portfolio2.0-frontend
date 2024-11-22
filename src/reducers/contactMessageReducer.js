// src/reducers/contactMessageReducer.js

const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const contactMessageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CONTACT_MESSAGE_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case 'FETCH_CONTACT_MESSAGE_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
  
      case 'FETCH_CONTACT_MESSAGE_FAIL':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default contactMessageReducer;
  