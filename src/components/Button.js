import React from 'react';

const Button = ({ icon, href, children }) => (
  <button style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    background: '#0078D4',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    border: 'none',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 24px 0 rgba(0, 0, 0, 0.19)',
    },
    '&:active': {
      transform: 'scale(1.2)',
    },
  }}>
    {icon} {children}
  </button>
);

export { Button };
