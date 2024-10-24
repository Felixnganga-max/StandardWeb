// ScrollToTop.js
import React from 'react';

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-to-top" onClick={handleScrollToTop}>
      ↑
    </button>
  );
};

export default ScrollToTop;
