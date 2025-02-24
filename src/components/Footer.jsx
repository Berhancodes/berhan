import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section - Button on Left, Social Icons on Right */}
      <div className="footer-top">
        <div className="footer-left">
          <button 
            className="contact-btn" 
            onClick={() => window.location.href = 'mailto:berh3n@gmail.com?subject=Hey%20Berhan!&body=I%20wanted%20to%20reach%20out%20regarding...'}
          >
            Contact Me <span className="icon">📧</span>
          </button>

           {/* Middle Row: Centered Paragraph */}
      <p className="footer-text">I like building things that make 💰!</p>
        </div>

        <div className="footer-right">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={32} color="white"/>
          </a>
          <a href="https://github.com/berhancodes" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={32} color="white" />
          </a>
        </div>
      </div>

     

      {/* Bottom Row: Centered Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HeyItsBerhan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
