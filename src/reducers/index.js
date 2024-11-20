// src/reducers/index.js
import { combineReducers } from 'redux';
import portfolioReducer from './portfolioReducer';
import servicesReducer from './servicesReducer';
import blogReducer from './blogReducer';
import skillsReducer from './skillsReducer';
import bannerReducer from './bannerReducer';
import experienceReducer from './experienceReducer';

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  services: servicesReducer,
  blog: blogReducer,
  skills: skillsReducer,
  banner: bannerReducer,
  experience: experienceReducer,
});

export default rootReducer;
