// src/components/Home.js
import React from 'react';
import Banner from './Banner';
import Skills from './Skills';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Services from './Services';
import Blog from './Blog';
//import Contact from './Contact';

function Home() {
  
  return (
    <>
      <Banner />
      <Skills />
      <Experience />
      <Portfolio />
      <Services />
      <Blog />
     
    </>
  );
}

export default Home;
