import React from 'react';

const aboutStyle = {
  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.pinimg.com/originals/e9/88/09/e988093865a29fbf6ed8c4f0beb8e302.jpg")',
  backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  color: 'white',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  padding: '20px',
  border: '1px solid white',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const h2Style = {
  fontSize: '50px',
  fontWeight: 'bold',
  fontFamily: 'Lily Script One, cursive',
  textAlign: 'center',
};

const pStyle = {
  fontSize: '24px',
  textAlign: 'center',
};

const About = () => {
  return (
    <div style={aboutStyle}>
      <h2 style={h2Style}>About Us</h2>
      <p style={pStyle}>
        "SOUTH SIZZLE" is your gateway to South Indian culinary excellence. Discover an array of authentic dishes from different South Indian states, each with detailed descriptions and mouthwatering images. With easy navigation and regional filters, finding your favorite flavors has never been simpler. Join us for a taste of tradition and innovation SOUTH SIZZLE today.
      </p>
    </div>
  );
};

export default About;
