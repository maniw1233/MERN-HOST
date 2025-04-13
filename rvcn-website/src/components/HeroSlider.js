import React from 'react';
import './HeroSlider.css';
import { FaPlay } from 'react-icons/fa';

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <div className="slider-content">
        <h2 className="slider-title">
          WELCOME TO <br />
          RV COLLEGE OF NURSING
        </h2>

        <div className="video-container">
          <div className="play-button-wrapper">
            <a 
              href="https://rvcn.edu.in/wp-content/uploads/2024/01/final-out-put-4.mp4"
              className="play-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPlay className="play-icon" />
            </a>
          </div>
          <div className="video-text">
            <p>Check Out Our Intro Video</p>
          </div>
        </div>

        <div className="slider-image-wrapper">
          <img 
            src="https://rvcn.edu.in/wp-content/uploads/2025/02/Group-393.png" 
            alt="RV College of Nursing"
            className="slider-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;