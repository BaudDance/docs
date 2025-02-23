import React from 'react';

const Button = ({ icon, href, children }) => (
  <button
    href={href}
    className="flex items-center gap-2 px-6 py-2 rounded-md bg-[#2D8E0A] text-white shadow-md cursor-pointer font-bold no-underline hover:no-underline hover:scale-105 hover:shadow-lg active:scale-100 transition duration-150 ease-in-out"
  >
    {icon} <span className="text-white no-underline">{children}</span>
  </button>
);

export { Button };
