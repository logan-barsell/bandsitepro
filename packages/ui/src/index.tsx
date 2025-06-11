import React from 'react';

export const Button: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <button className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'>
    {children}
  </button>
);
