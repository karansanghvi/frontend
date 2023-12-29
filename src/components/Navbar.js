import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaBars } from "react-icons/fa";
import Menu from './Menu';
import { UserContext } from '../context/UserContext';
import { useLocation } from 'react-router-dom';

function Navbar() {
  
  const [prompt, setPrompt] = useState("");
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  // console.log(param);
  // console.log(prompt);

  const showMenu = () => {
    setMenu(!menu);
  }

  const {user} = useContext(UserContext);
  // console.log(user);

  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-[200px] py-4'>
      {/* Logo */}
      <h1 className='text-lg md:text-xl font-extrabold mb-2 md:mb-0'>
        <Link to='/'>InsightfulBytes</Link>
      </h1>

      {/* Search */}
      {path === "/" &&
        <div className='flex justify-center items-center space-x-0 mb-2 md:mb-0'>
          <p 
            className='cursor-pointer'
            onClick={() => navigate(prompt?"?search="+prompt:navigate("/"))}
          >
            <BsSearch />
          </p>
          <input
            className='outline-none px-3'
            placeholder='Search a post'
            type='text'
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
      }

      {/* Links */}
      <div className='hidden md:flex items-center justify-center space-x-2 md:space-x-4'>
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
          <div onClick={showMenu}>
            {menu && <Menu/>}
            <p className='cursor-pointer relative'><FaBars /></p>
          </div>
        ) : (
          <h3>
            <Link to='/register'>Register</Link>
          </h3>
        )}
      </div>
      <div className='md:hidden text-lg' onClick={showMenu}>
        <p className='cursor-pointer relative'><FaBars /></p>
        {menu && <Menu/>}
      </div>
    </div>
  );
}

export default Navbar;
