// src/reducers/blogReducer.js
import { blogData } from '../mockData';

const initialState = {
  posts: blogData || [], // Initialize with mock data or an empty array
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    // Add cases for blog actions here
    default:
      return state;
  }
}
