import React from 'react';

const Button = ({ icon, href, children }) => (
  <a href={href} className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:scale-105 hover:shadow-lg active:scale-100 transition duration-150 ease-in-out">
    {icon} <span className='text-white'>{children}</span>
  </a>
);

export { Button };
