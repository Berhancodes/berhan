import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isRepeating, setIsRepeating] = useState(false);

  const handleRepeatClick = (e) => {
    e.preventDefault();
    setIsRepeating(true);
    setTimeout(() => setIsRepeating(false), 1000);
  };

  // Cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const navbar = document.querySelector('.navBar');
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        navbar.style.setProperty('--mouse-x', `${x}%`);
        navbar.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    const navbar = document.querySelector('.navBar');
    if (navbar) {
      navbar.addEventListener('mousemove', handleMouseMove);
      return () => navbar.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <header className="navBar">
      <h1>
        <a href="/" className="logo-link">
          <img src="./kick.png" alt="Berhan" className="logo-avatar" />
          HeyItsBerhan!
        </a>
      </h1>
      <ul className="nav-links">
        <li>
          <a href="" className="build-break-repeat">
            <span className="build-text">Build</span> <span className="build-icon">👾</span>
            <span className="arrow">→</span>
            <span className="break-text">Break</span> <span className="break-icon">🚀</span>
            <span className="arrow">→</span>
            <span 
              className={`repeat-text ${isRepeating ? 'spinning' : ''}`}
              onClick={handleRepeatClick}
            >
              Repeat
            </span> <span className="repeat-icon">💻</span>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
