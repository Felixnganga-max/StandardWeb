import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";






const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        < FaInstagramSquare />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
      </div>
      <p className="copyright">© {currentYear} The Standard Web Technologies. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
