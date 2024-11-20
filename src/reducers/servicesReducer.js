// src/reducers/servicesReducer.js
import { servicesData } from '../mockData';

const initialState = {
  list: servicesData || [], // Initialize with mock data or an empty array
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    // Add cases for services actions here
    default:
      return state;
  }
}
