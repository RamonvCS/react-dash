import { TextInput } from '@tremor/react';
import React from 'react';
import { SearchIcon } from '@heroicons/react/solid'; // Make sure to import the SearchIcon

const Navbar = () => {
  return (
    <div id="top" className='relative w-full sm:flex justify-between items-center p-2'>

      <h1 className='font-bold text-gray-300'>Dashboard</h1>
      {/* Este className cambia el margen del Search Bar entre Dashboard */}
      <div className='py-2'>
        <TextInput icon={SearchIcon} placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;
