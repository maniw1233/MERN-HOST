import React from 'react';
import './Footer.css';
import { 
  FaFacebook, FaLinkedin, FaTwitter, 
  FaInstagram, FaYoutube, FaPinterest, 
  FaSpotify 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <a href="https://rvcn.edu.in">
            <img 
              src="https://rvcn.edu.in/wp-content/uploads/2023/06/Logo-1-white-150x150.png" 
              alt="RV College of Nursing Logo"
              className="footer-logo-img"
            />
          </a>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="links-column">
            <h3 className="links-heading">About Us</h3>
            <ul className="links-list">
              <li><a href="https://rvcn.edu.in/Test/about-rvcn/">About RVCN</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3 className="links-heading">What we do</h3>
            <ul className="links-list">
              <li><a href="https://rvcn.edu.in/Test/placement-recruitment/">Placements</a></li>
              <li><a href="https://rvcn.edu.in/Test/careers/">Careers</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3 className="links-heading">Other information</h3>
            <ul className="links-list">
              <li>Privacy Policy</li>
              <li><a href="https://rvcn.edu.in/Test/programmes/">Programmes</a></li>
              <li><a href="https://rvcn.edu.in/Test/anti-ragging/">Anti Ragging</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <div className="contact-item">
            <div className="contact-icon">
              <img 
                src="https://rvcn.edu.in/wp-content/uploads/2023/06/Group-37.png" 
                alt="Email icon"
              />
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>rvcn@rvei.edu.in</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <img 
                src="https://rvcn.edu.in/wp-content/uploads/2023/06/Group-38.png" 
                alt="Phone icon"
              />
            </div>
            <div className="contact-details">
              <h4>Phone</h4>
              <p>
                080-68917100<br/>
                080-68917101<br/>
                080-68917102<br/>
                9036876172
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <img 
                src="https://rvcn.edu.in/wp-content/uploads/2023/06/Group-39.png" 
                alt="Location icon"
              />
            </div>
            <div className="contact-details">
              <h4>Location</h4>
              <p>
                CA 2/83-3, 9th Main Rd, Behind Jain Temple,<br/>
                4th T Block East, 4th Block, Jayanagar,<br/>
                Bengaluru, Karnataka-560011
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3 className="social-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61552955893886" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/98823851/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/rvcollegeofnsg" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com/rvcn_rvcollegeofnursing/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCxCrdnb7iPgYpjOThwdU83g/videos" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://www.pinterest.com/rvcncollege/" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="social-icon" />
            </a>
            <a href="https://podcasters.spotify.com/pod/show/r-v-college-of-nursing" target="_blank" rel="noopener noreferrer">
              <FaSpotify className="social-icon" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <div className="copyright-text">
            <p>Copyright © {new Date().getFullYear()} Rashtreeya Sikshana Samithi Trust</p>
          </div>
          <div className="design-credit">
            <p>Designed by Department of Alumni Affairs and Communications</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;