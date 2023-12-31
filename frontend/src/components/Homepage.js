import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs'; // Adjust the file path accordingly
import ProgramsOffered from './ProgramsOffered'; // Adjust the file path accordingly
import ContactUs from './ContactUs'; // Adjust the file path accordingly
import Testimonials from './Testimonials';


const Homepage = () => {
  return (
    <div className="homepage" style={{ paddingTop: '3rem' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Explore our services and support orphanages.</p>
          <Link to="/orphanages">
            <button>Explore</button>
          </Link>
        </div>
      </section>

      {/* Include AboutUs, ProgramsOffered, and ContactUs Components */}
      <AboutUs className='aboutussection' id= "about" />
      <ProgramsOffered id= "programsOffered"/>
      <div className="homepage__testimonials">
        
        <Testimonials />
      </div>  
      <ContactUs />
    </div>
  );
}

export default Homepage;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs'; // Adjust the file path accordingly
import ProgramsOffered from './ProgramsOffered'; // Adjust the file path accordingly
import ContactUs from './ContactUs'; // Adjust the file path accordingly
import Testimonials from './Testimonials';


const Homepage = () => {
  return (
    <div className="homepage" style={{ paddingTop: '3rem' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Explore our services and support orphanages.</p>
          <Link to="/orphanages">
            <button>Explore</button>
          </Link>
        </div>
      </section>

      {/* Include AboutUs, ProgramsOffered, and ContactUs Components */}
      <AboutUs className='aboutussection' id= "about" />
      <ProgramsOffered id= "programsOffered"/>
      <div className="homepage__testimonials">
        
        <Testimonials />
      </div>  
      <ContactUs />
    </div>
  );
}

export default Homepage;