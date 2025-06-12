import * as React from 'react';

export const Button = ({ children }: { children: any }) => (
  <button className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'>
    {children}
  </button>
);
