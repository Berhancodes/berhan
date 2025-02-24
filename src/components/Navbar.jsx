import React from "react";


const Navbar = () => {
  return (
    <header className="navBar">
      <h1><a href="/">HeyItsBerhan!</a></h1>
      <ul className="nav-links">
        <li>
          <a href="">
            Build <span>→</span> Break <span>→</span> Repeat
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
