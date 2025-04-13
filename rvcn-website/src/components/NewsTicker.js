import React from 'react';
import './NewsTicker.css';

const NewsTicker = () => {
  return (
    <div className="news-ticker-section">
      <div className="ticker-container">
        <div className="ticker-content">
          <div className="ticker-item">
            <span className="blinking-text">
              Few Seats are available for B.Sc., (N), M.Sc (N) and NPCC courses for the academic year 2024-2025. 
              Contact: Mrs. G S Uma - 9110815424 / Mr Harshavardhan P - 9686622256 / Email to: rvcn@rvei.edu.in
            </span>
          </div>
          <div className="ticker-item">
            <a 
              href="https://rvcn.edu.in/wp-content/uploads/2025/02/Recrutiment-of-Nursing-Faculty-RVCN-Feb-2025.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="blinking-text"
            >
              Recruitment of Nursing faculty
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;