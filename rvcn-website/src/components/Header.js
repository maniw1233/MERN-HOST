import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const menuItems = [
    {
      title: 'About us',
      submenu: [
        { title: 'About RVCN', link: '/about-rvcn' },
        { title: 'Board of Management', link: '/board-of-management' },
        { title: 'Achievements', link: '/achievements' }
      ]
    },
    {
      title: 'Academics',
      submenu: [
        { title: 'Programmes', link: '/programmes' },
        { title: 'Departments', link: '/departments' },
        { title: 'Standard Operating Procedures', link: '/standard-operating-procedures' },
        { title: 'Faculty', link: '/faculties' }
      ]
    },
    {
      title: 'Campus',
      submenu: [
        { title: 'Clinical Experience', link: '/experience' },
        { title: 'Visits', link: '/visits' },
        { title: 'NSS', link: '/nss' },
        { title: 'Gallery', link: '/gallery' },
        { title: 'Events', link: '/events' },
        { title: 'SNA', link: '/sna' }
      ]
    },
    { title: 'Committee', link: '/committee' },
    { title: 'Placement & Recruitment', link: '/placement-recruitment' },
    { title: 'Alumni', link: '/alumni' },
    { title: 'RVJNS', link: 'https://rvjns.rvcn.edu.in/', external: true },
    { title: 'Contact us', link: '/contact-us' },
    { title: 'Change the world', link: 'https://www.rvinstitutions.com/donate/', external: true }
  ];

  return (
    <header id="masthead" itemScope="itemScope" itemType="https://schema.org/WPHeader">
      <p className="main-title bhf-hidden" itemProp="headline">
        <Link to="/" title="RVCN" rel="home">RVCN</Link>
      </p>
      
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img 
              src="https://rvcn.edu.in/wp-content/uploads/2023/06/logo1.png" 
              alt="RVCN Logo" 
              className="logo"
            />
          </Link>
        </div>
        
        <div className="nav-container">
          <div 
            role="button" 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-haspopup="true" 
            aria-expanded={isMenuOpen}
          >
            <span className="screen-reader-text">Menu</span>
            <div className="menu-icon">
              <FontAwesomeIcon icon={isMenuOpen ? faWindowClose : faAlignJustify} />
            </div>
          </div>
          
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`menu-item ${item.submenu ? 'has-submenu' : ''} ${openSubmenu === index ? 'submenu-open' : ''}`}
                >
                  {item.submenu ? (
                    <>
                      <div className="submenu-container">
                        <button 
                          className="menu-link" 
                          onClick={() => toggleSubmenu(index)}
                          aria-haspopup="true" 
                          aria-expanded={openSubmenu === index}
                        >
                          {item.title}
                          <span className="submenu-arrow">
                            <i className="fa"></i>
                          </span>
                        </button>
                      </div>
                      <ul className="sub-menu">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="submenu-item">
                            <Link to={subItem.link} className="submenu-link">
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : item.external ? (
                    <a 
                      href={item.link} 
                      className="menu-link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.link} className="menu-link">
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="fixed-link">
          <a 
            href="https://wds-prd.rvei.edu.in:4430/sap/bc/ui5_ui5/sap/zrvihlthscience/index.html#/Scode/RVCN" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://rvcn.edu.in/wp-content/uploads/2023/06/RVCN-Link-Button-1.png" 
              alt="RVCN Link Button" 
              className="link-button"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;