// src/components/Banner.js
import React from 'react';
import { useSelector } from 'react-redux';

function Banner() {
  const bannerImage = useSelector((state) => state.banner.image);
  const cvLink = useSelector((state) => state.banner.cvLink);

  return (
    <div>
      <img src={bannerImage} alt="Banner" />
      <a href={cvLink} download>
        Download CV
      </a>
    </div>
  );
}

export default Banner;
