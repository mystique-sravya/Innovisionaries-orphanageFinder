import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        {/* Replace 'logo.png' with the path to your logo */}
        <img src="path/to/logo.png" alt="Logo" className="navbar__logo" />
        <h1 className="navbar__title">Website Name</h1>
      </div>

      {/* Mobile navigation */}
      <div className="navbar__mobile">
        <div className="navbar__hamburger" onClick={handleMobileNavToggle}>
          <div className={`navbar__bar ${isMobileNavOpen ? 'open' : ''}`} />
          <div className={`navbar__bar ${isMobileNavOpen ? 'open' : ''}`} />
          <div className={`navbar__bar ${isMobileNavOpen ? 'open' : ''}`} />
        </div>
      </div>

      {/* Navigation links for desktop */}
      <div className={`navbar__links ${isMobileNavOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="programsOffered">Programs Offered</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        {/* Replace 'logo.png' with the path to your logo */}
        <img src="path/to/logo.png" alt="Logo" className="navbar__logo" />
        <h1 className="navbar__title">Website Name</h1>
      </div>

      {/* Mobile navigation */}
      <div className="navbar__mobile">
        <div className="navbar__hamburger" onClick={handleMobileNavToggle}>
          <div className={`navbar__bar ${isMobileNavOpen ? 'open' : ''}`} />
          <div className={`navbar__bar ${isMobileNavOpen ? 'open' : ''}`} />
          <div className={`navbar__bar ${isMobileNavOpen ? 'open' : ''}`} />
        </div>
      </div>

      {/* Navigation links for desktop */}
      <div className={`navbar__links ${isMobileNavOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="programsOffered">Programs Offered</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;