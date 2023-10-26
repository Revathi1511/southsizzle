import React from 'react';

const andhraStyle = {
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.pinimg.com/originals/e9/88/09/e988093865a29fbf6ed8c4f0beb8e302.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  color: 'white',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  padding: '20px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  
};

const Andhra = () => {
  const andhraRecipes = [
    {
      name: 'Andhra Chicken Curry',
      description: 'Andhra Chicken Curry is a spicy and tangy chicken curry with a distinctive flavor of Andhra cuisine. It\'s known for its fiery taste.',
    },
    {
      name: 'Gongura Mutton',
      description: 'Gongura Mutton is a popular Andhra dish made with tender mutton and the sour-flavored gongura leaves.',
    },
    {
      name: 'Pesarattu',
      description: 'Pesarattu is a green gram dosa, a popular breakfast item in Andhra Pradesh, often served with ginger chutney.',
    },
  ];

  const andhraRestaurants = [
    {
      name: 'Andhra Spice Delight',
      location: '234 Oak Street, Etobicoke',
      cuisine: 'Andhra Specialties',
    },
    {
      name: 'Spicy Andhra House',
      location: '345 Maple Avenue, Etobicoke',
      cuisine: 'Authentic Andhra Cuisine',
    },
    {
      name: 'Nellore Biryani Corner',
      location: '456 Cedar Road, Etobicoke',
      cuisine: 'Andhra-style Biryani',
    },
  ];

  return (
    <div style={andhraStyle}>
      <h2 style={{ color: 'white' }}>Andhra Recipes</h2>
      <ul>
        {andhraRecipes.map((recipe, index) => (
          <li key={index}>
            <h3 style={{ color: 'white' }}>{recipe.name}</h3>
            <p style={{ color: 'white' }}>{recipe.description}</p>
          </li>
        ))}
      </ul>

      <h2 style={{ color: 'white' }}>Andhra Restaurants</h2>
      <ul>
        {andhraRestaurants.map((restaurant, index) => (
          <li key={index}>
            <h3 style={{ color: 'white' }}>{restaurant.name}</h3>
            <p style={{ color: 'white' }}>Location: {restaurant.location}</p>
            <p style={{ color: 'white' }}>Cuisine: {restaurant.cuisine}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Andhra;
