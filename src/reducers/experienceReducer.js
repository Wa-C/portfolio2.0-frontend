// src/reducers/experienceReducer.js
import { experienceData } from '../mockData';

const initialState = {
  list: experienceData,
};

export default function experienceReducer(state = initialState, action) {
  switch (action.type) {
    // Handle actions when integrating with backend
    default:
      return state;
  }
}
