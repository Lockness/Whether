'use-strict';

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-teal">
      <div className="flex flex-wrap justify-between items-center p-4">
        <div className="flex items-center flex-no-shrink text-white">
          <span className="font-semibold text-3xl tracking-tight">Whether</span>
        </div>
        <div className="w-auto flex md:items-center text-white">
          <h4 className="text-base">Settings</h4> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
