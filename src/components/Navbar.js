import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

function Navbar() {
  const user = false;

  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-[200px] py-4'>
      {/* Logo */}
      <h1 className='text-lg md:text-xl font-extrabold mb-2 md:mb-0'>
        <Link to='/'>InsightfulBytes</Link>
      </h1>

      {/* Search */}
      <div className='flex justify-center items-center space-x-0 mb-2 md:mb-0'>
        <p>
          <BsSearch />
        </p>
        <input
          className='outline-none px-3'
          placeholder='Search a post'
          type='text'
        />
      </div>

      {/* Links */}
      <div className='flex items-center justify-center space-x-2 md:space-x-4'>
        {user ? (
          <h3>
            <Link to='/write'>Write</Link>
          </h3>
        ) : (
          <h3>
            <Link to='/login'>Login</Link>
          </h3>
        )}
        {user ? (
          <h3>Profile</h3>
        ) : (
          <h3>
            <Link to='/register'>Register</Link>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Navbar;
