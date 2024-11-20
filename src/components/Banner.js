// src/components/Banner.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBanner } from '../actions/bannerActions';

function Banner() {
  const dispatch = useDispatch();
  const { image_url, cv_url, loading, error } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(fetchBanner());
  }, [dispatch]);

  if (loading) return <p>Loading banner...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      {image_url && <img src={image_url} alt="Banner" style={{ maxWidth: '100%', height: 'auto' }} />}
      {cv_url && (
        <div style={{ marginTop: '10px' }}>
          <a href={cv_url} download="My_CV.pdf">
            <button>Download CV</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Banner;
