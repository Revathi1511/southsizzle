import React from 'react';

const Restaurant = () => {
  const restaurantNames = [
    "Saravana Bhavan",
    "Adyar Ananda Bhavan",
    "Murugan Idli Shop",
    "Madras Cafe",
    "Anjappar Chettinad",
    "Sangeetha Vegetarian Restaurant",
    "The Grand Sweets and Snacks",
    "Ratna Cafe",
    "Ponnusamy Hotel",
    "Namma Veedu Vasanta Bhavan",
  ];

  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    margin: 'auto',
    width: '60%',
  };

  return (
    <div style={{ background: '#DAA520', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={containerStyle}>
        <h1>Restaurant Page</h1>
        <h2>List of South Indian Restaurants</h2>
        <ul>
          {restaurantNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;

