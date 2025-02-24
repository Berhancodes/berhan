import React from "react";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src="./avatarpic.gif" alt="Avatar" className="avatar" />
        <h1>
          <TypeAnimation
            sequence={[
              "Hey, I'm Berhan, a full-stack developer!",  // Text to display
              2000,  // Pause time before erasing
              "",  // Erase the text
              500,  // Pause before typing again
            ]}
            speed={10} // Typing speed
            repeat={Infinity} // Loop the animation
            cursor={true}
          />
        </h1>
        <p>With a passion for creating modern web applications for commercial businesses using cutting-edge technologies.</p>
      </div>
      <div className="hero-right">
        
        <a href="https://pearrthreads-cad1bef3bdcf.herokuapp.com" target="_blank" rel="noopener noreferrer" className="project-card" data-title="PearThreads">
          <img src="./dummy.webp" alt="Pearthreads" />
        </a>

        <a href="https://bookabizz.com" target="_blank" rel="noopener noreferrer" className="project-card" data-title="BookaBizz - building :)">
          <img src="./dummy.webp" alt="BookaBizz" />
        </a>

        <a href="https://github.com/Ade-mir/company-landing-page-2" target="_blank" rel="noopener noreferrer" className="project-card" data-title="Chatbox">
          <img src="./dummy.webp" alt="Chatterbox" />
        </a>

        <a href="https://github.com/Ade-mir/company-landing-page-2" target="_blank" rel="noopener noreferrer" className="project-card" data-title="Ai Agent">
          <img src="./dummy.webp" alt="Ai Agent" />
        </a>

      </div>
      
    </section>
  );
};

export default Hero;
