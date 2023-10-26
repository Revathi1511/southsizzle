import React from 'react';

const contactStyle = {
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

const Contact = () => {
  return (
    <div style={contactStyle}>
      <h2 style={h2Style}>Contact Us</h2>
      <p style={pStyle}>
        Have questions or feedback? We'd love to hear from you!
      </p>
      <p style={pStyle}>
        Email: southsizzle@gmail.com
      </p>
      <p style={pStyle}>
        Phone: (123) 456-7890
      </p>
      <p style={pStyle}>
        Address: 123 Food Street, Food City, Toronto.
      </p>
    </div>
  );
};

export default Contact;
