// src/reducers/bannerReducer.js
import { bannerData } from '../mockData';

const initialState = {
  image: bannerData.image,
  cvLink: bannerData.cvLink,
};

export default function bannerReducer(state = initialState, action) {
  switch (action.type) {
    // Handle actions when integrating with backend
    default:
      return state;
  }
}
