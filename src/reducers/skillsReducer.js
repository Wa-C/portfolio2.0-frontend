// src/reducers/skillsReducer.js
import { skillsData } from '../mockData';

const initialState = {
  list: skillsData, // Populate with mock data initially
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    // Handle actions to add, update, or remove skills
    default:
      return state;
  }
}
