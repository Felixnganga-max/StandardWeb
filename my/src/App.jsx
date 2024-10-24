import React, { useEffect } from 'react';
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopButton = document.querySelector('.scroll-to-top');
      if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="services"><Services /></div>
      <div id="about"><AboutUs /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
    </>
  );
}

export default App;
