import React, { useState, useEffect } from 'react';

const images = [
  './assets/analytics.avif',
  './assets/blockchain.avif',
  './assets/Code.avif',
  './assets/Google.avif',
  './assets/Photoshop.avif',
  './assets/sign.avif'

];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="hero-content">
        <h1>At Standard Web Technologies, we are dedicated to simplifying your journey in the digital world. Let us handle the technology, so you can focus on what truly matters – your growth.</h1>
      </div>
    </div>
  );
};

export default Hero;
