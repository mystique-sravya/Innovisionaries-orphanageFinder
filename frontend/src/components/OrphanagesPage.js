import React, { useState } from 'react';
import '../styles/OrphanagesPage.css'; // Import the CSS file
import NoticesSection from './NoticesSection';

const OrphanagesPage = () => {
  // Placeholder data for demonstration purposes
  const orphanagesData = [
    {
      id: 1,
      name: 'ABC Orphanage',
      city: 'New York',
      type: 'Children',
      ownerName: 'John Doe',
      ownerContact: 'johndoe@example.com',
      numberOfResidents: 50,
      image: '../assets/orphanage1.jpg', // Replace this path with the actual image path
    },
    {
      id: 2,
      name: 'XYZ Home',
      city: 'Los Angeles',
      type: 'Elderly',
import React, { useState } from 'react';
import '../styles/OrphanagesPage.css'; // Import the CSS file
import NoticesSection from './NoticesSection';

const OrphanagesPage = () => {
  // Placeholder data for demonstration purposes
  const orphanagesData = [
    {
      id: 1,
      name: 'ABC Orphanage',
      city: 'New York',
      type: 'Children',
      ownerName: 'John Doe',
      ownerContact: 'johndoe@example.com',
      numberOfResidents: 50,
      image: '../assets/orphanage1.jpg', // Replace this path with the actual image path
    },
    {
      id: 2,
      name: 'XYZ Home',
      city: 'Los Angeles',
      type: 'Elderly',
      ownerName: 'Jane Smith',
      ownerContact: 'janesmith@example.com',
      numberOfResidents: 30,
      image: '../assets/orphanage2.jpg', // Replace this path with the actual image path
    },
    {
      id: 3,
      name: 'Hope Center',
      city: 'Chicago',
      type: 'Children',
      ownerName: 'Michael Johnson',
      ownerContact: 'michael@example.com',
      numberOfResidents: 40,
      image: '../assets/orphanage3.jpg', // Replace this path with the actual image path
    },
    // Add more orphanage data as needed
  ];

  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [filteredOrphanages, setFilteredOrphanages] = useState(orphanagesData);

  // Handler functions for city and type selection
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  // Filtering logic for orphanages based on selected city and type
  const handleFilterOrphanages = () => {
    const filteredData = orphanagesData.filter((orphanage) => {
      const cityMatch = city === '' || orphanage.city.toLowerCase().includes(city.toLowerCase());
      const typeMatch = type === '' || orphanage.type.toLowerCase() === type.toLowerCase();
      return cityMatch && typeMatch;
    });
    setFilteredOrphanages(filteredData);
  };

  return (
    <div className="orphanages-container">
      <h2 className="orphanages-header">Explore Orphanages</h2>
      <div className="filter-container">
        <label htmlFor="city">Search by City:</label>
        <input type="text" id="city" value={city} onChange={handleCityChange} />

        <label htmlFor="type">Search by Type:</label>
        <select id="type" value={type} onChange={handleTypeChange}>
          <option value="">Select Type</option>
          <option value="Children">Children</option>
          <option value="Elderly">Elderly</option>
          {/* Add more options as needed */}
        </select>

        <button onClick={handleFilterOrphanages}>Filter</button>
      </div>

      {/* Display the filtered orphanages */}
      <div className="notices-container">
        <NoticesSection />
      </div>

      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        {filteredOrphanages.map((orphanage) => (
          <div key={orphanage.id} className="col mb-4">
            <div className="orphanage-card">
              <img src={orphanage.image} alt={orphanage.name} className="orphanage-image" />
              <h3>{orphanage.name}</h3>
              <p>City: {orphanage.city}</p>
              <p>Type: {orphanage.type}</p>
              <p>Owner Name: {orphanage.ownerName}</p>
              <p>Owner Contact: {orphanage.ownerContact}</p>
              <p>No. of Residents: {orphanage.numberOfResidents}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default OrphanagesPage;
