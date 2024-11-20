// src/reducers/portfolioReducer.js
import { portfolioData } from '../mockData';

const initialState = {
  projects: portfolioData || [], // Initialize with mock data or an empty array
};

export default function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    // Add cases for portfolio actions here
    default:
      return state;
  }
}
