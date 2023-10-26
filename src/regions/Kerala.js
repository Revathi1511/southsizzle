import React from 'react';

const keralaStyle = {
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
  justifyContent: 'center',
  alignItems: 'center',
};

const Kerala = () => {
  const keralaRecipes = [
    {
      name: 'Appam with Ishtu',
      description: "Appam is a traditional Keralite dish, often served with Ishtu, a mild and flavorful stew. It's a popular breakfast choice in Kerala.",
    },
    {
      name: 'Kerala Sadya',
      description: 'Kerala Sadya is a grand feast with an array of vegetarian dishes served on a banana leaf, typically during festivals and special occasions.',
    },
    {
      name: 'Kozhikodan Biriyani',
      description: 'Kozhikodan Biriyani is a flavorful and aromatic rice dish made with fragrant spices, rice, and tender pieces of meat or vegetables.',
    },
  ];

  const keralaRestaurants = [
    {
      name: 'Malabar Bay',
      location: '123 Main Street, Etobicoke',
      cuisine: 'Keralite Cuisine',
    },
    {
      name: 'Kerala Delights',
      location: '456 Elm Avenue, Etobicoke',
      cuisine: 'Kerala Specialties',
    },
    {
      name: 'Taste of Kerala',
      location: '789 Oak Road, Etobicoke',
      cuisine: 'South Indian Cuisine',
    },
  ];

  return (
    <div style={keralaStyle}>
      <h1>Kerala Restaurants and Recipes in Etobicoke</h1>

      <h2>Popular Kerala Recipes</h2>
      <ul>
        {keralaRecipes.map((recipe, index) => (
          <li key={index}>
            <strong>{recipe.name}:</strong> {recipe.description}
          </li>
        ))}
      </ul>

      <h2>Kerala Restaurants in Etobicoke</h2>
      <ul>
        {keralaRestaurants.map((restaurant, index) => (
          <li key={index}>
            <strong>{restaurant.name}:</strong> {restaurant.cuisine} | Location: {restaurant.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kerala;
