import React, { useState } from 'react';

const Footer = () => {
  const [showList, setShowList] = useState(false);

  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '1rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '80%', margin: '0 auto' }}>
        <h1 style={{ color: '#ff0080', fontSize: '2rem', fontFamily: 'cursive' }}>Flirtbate</h1>
        <button 
          onClick={handleButtonClick} 
          style={{ 
            color: '#ff0080', 
            border: 'none', 
            background: 'transparent', 
            fontSize: '1rem', 
            textDecoration: 'underline',
            cursor: 'pointer' 
          }}>
          By the Way 
        </button>
      </div>
      {showList && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '80%', margin: '0 auto' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Home</li>
            <li>FAQs</li>
            <li>Sign up</li>
            <li>Login</li>
          </ul>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Home</li>
            <li>FAQs</li>
            <li>Sign up</li>
            <li>Login</li>
          </ul>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Home</li>
            <li>FAQs</li>
            <li>Sign up</li>
            <li>Login</li>
          </ul>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Resources</li>
            <li>Privacy statement</li>
            <li>Cookie statement</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
      )}
      <div style={{ bottom: 0, width: '100%', textAlign: 'center' }}>
        <p>© 2025 Flirtbate, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;