import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Row: Contact Button & Social Icons */}
      <div className="footer-top">
        <button 
          className="contact-btn" 
          onClick={() => window.location.href = 'mailto:berh3n@gmail.com?subject=Hey%20Berhan!&body=I%20wanted%20to%20reach%20out%20regarding...'}
        >
          Contact Me <span className="icon">📧</span>
        </button>

        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={28} color="white"/>
          </a>
          <a href="https://github.com/berhancodes" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={28} color="white" />
          </a>
        </div>
      </div>

      {/* Centered Paragraph */}
      <p className="footer-text">I like building things that make 💰!</p>

      {/* Copyright Row */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HeyItsBerhan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
