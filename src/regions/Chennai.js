import React, { useState } from 'react';

const chennaiStyle = {
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

const Chennai = () => {
  const [chennaiRecipes, setChennaiRecipes] = useState([
    {
      name: 'Chettinad Chicken Curry',
      description: 'Chettinad Chicken Curry is a spicy and flavorful chicken curry with a blend of aromatic spices. It\'s a famous Chettinad dish from Tamil Nadu.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-buyOBkodK4RG9MDvAPdYyszhF3jO53n03Q&usqp=CAU', // Add an image URL field
    },
    {
      name: 'Idli and Sambar',
      description: 'Idli and Sambar is a classic South Indian breakfast consisting of soft rice cakes (idli) served with a tangy lentil soup (sambar).',
      imageUrl: 'https://www.vegrecipesofindia.com/wp-content/uploads/2014/05/idli-sambar-1.jpg', // Add an image URL field
    },
    {
      name: 'Masala Dosa',
      description: 'Masala Dosa is a crispy and savory pancake filled with a spiced potato filling. It\'s a popular South Indian dish often served with chutney and sambar.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwytcXX3GpEqmWedgiOlvZtO1ip9_FnSu8Q&usqp=CAU', // Add an image URL field
    },
  ]);

  const chennaiRestaurants = [
    {
      name: 'Chennai Spice House',
      location: '123 Main Street, Etobicoke',
      cuisine: 'Chettinad Cuisine',
    },
    {
      name: 'Saravana Bhavan',
      location: '456 Elm Avenue, Etobicoke',
      cuisine: 'South Indian Specialties',
    },
    {
      name: 'Anjappar Chettinad',
      location: '789 Oak Road, Etobicoke',
      cuisine: 'Chettinad Flavors',
    },
  ];

  return (
    <div style={chennaiStyle}>
      <h2>Chennai Recipes</h2>
      <ul>
        {chennaiRecipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            {recipe.imageUrl && (
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '50%' }}
              />
            )}
          </li>
        ))}
      </ul>

      <h2>Chennai Restaurants</h2>
      <ul>
        {chennaiRestaurants.map((restaurant, index) => (
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

export default Chennai;
