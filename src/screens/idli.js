import React from 'react';

const idliStyle = {
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.pinimg.com/originals/e9/88/09/e988093865a29fbf6ed8c4f0beb8e302.jpg")', // Replace with your desired image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: 'white',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  padding: '20px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const Idli = () => {
  const idliRestaurants = [
    {
      name: 'Idli World',
      location: '123 Idli Street, Etobicoke',
      cuisine: 'South Indian',
    },
    {
      name: 'Saravana Bhavan',
      location: '456 Idli Avenue, Etobicoke',
      cuisine: 'South Indian Specialties',
    },
    {
      name: 'Tasty Idli House',
      location: '789 Idli Road, Etobicoke',
      cuisine: 'Traditional South Indian',
    },
  ];

  return (
    <div style={idliStyle}>
      <h2>Idli</h2>
      <p>
        Idli is a popular South Indian dish known for its soft and fluffy rice cakes.
        It is often served with a flavorful lentil soup called sambar and a variety of chutneys.
      </p>

      <h2>Restaurants Serving Idli in Etobicoke</h2>
      <ul>
        {idliRestaurants.map((restaurant, index) => (
          <li key={index}>
            <h3>{restaurant.name}</h3>
            <p>Location: {restaurant.location}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Idli;
