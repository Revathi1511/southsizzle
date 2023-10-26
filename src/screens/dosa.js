import React from 'react';

const dosaStyle = {
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

const Dosa = () => {
  const dosaRestaurants = [
    {
      name: 'Dosa Delight',
      location: '123 Dosa Street, Etobicoke',
      cuisine: 'South Indian',
    },
    {
      name: 'Saravana Bhavan',
      location: '456 Dosa Avenue, Etobicoke',
      cuisine: 'South Indian Specialties',
    },
    {
      name: 'Tasty Dosa House',
      location: '789 Dosa Road, Etobicoke',
      cuisine: 'Traditional South Indian',
    },
  ];

  return (
    <div style={dosaStyle}>
      <h2>Dosa</h2>
      <p>
        Dosa is a popular South Indian dish known for its thin, crispy texture and delicious taste.
        It is typically served with a variety of chutneys and sambar.
      </p>

      <h2>Restaurants Serving Dosa in Etobicoke</h2>
      <ul>
        {dosaRestaurants.map((restaurant, index) => (
          <li key={index}>
            <h3>{restaurant.name}</h3>
            <p>Location: {restaurant.location}</p>
            <p>Cuisine: {restaurant.cuisine}</p> {/* Fixed the typo here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dosa;
