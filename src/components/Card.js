
import React from 'react';

const Card = ({ children }) => (
  <div style={{
    border: '0px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 3px 6px 2px rgba(0, 0, 0, 0.1)',
    background: 'white'
  }}>
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div>{children}</div>
);

export { Card, CardContent };


