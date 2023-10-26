import React from 'react';

const karnatakaStyle = {
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
//   justifyContent: 'center',
//   alignItems: 'center',
};

const Karnataka = () => {
  const karnatakaRecipes = [
    {
      name: 'Bisi Bele Bath',
      description: 'Bisi Bele Bath is a traditional Karnataka dish made with rice, lentils, and a flavorful spice blend.',
    },
    {
      name: 'Mysore Masala Dosa',
      description: 'Mysore Masala Dosa is a popular South Indian dish with a spicy potato filling and a crispy dosa.',
    },
    {
      name: 'Ragi Mudde',
      description: 'Ragi Mudde is a nutritious Karnataka dish made from finger millet flour, often served with sambar or chutney.',
    },
  ];

  const karnatakaRestaurants = [
    {
      name: 'Karnataka Flavors',
      location: '123 Pine Street, Etobicoke',
      cuisine: 'Authentic Karnataka Cuisine',
    },
    {
      name: 'Udupi Sagar',
      location: '789 Cedar Avenue, Etobicoke',
      cuisine: 'South Indian Delicacies',
    },
    {
      name: 'Mangalorean Bites',
      location: '456 Elm Road, Etobicoke',
      cuisine: 'Mangalorean Specialties',
    },
  ];

  return (
    <div style={karnatakaStyle}>
      <h2>Karnataka Recipes</h2>
      <ul>
        {karnatakaRecipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>

      <h2>Karnataka Restaurants</h2>
      <ul>
        {karnatakaRestaurants.map((restaurant, index) => (
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

export default Karnataka;
