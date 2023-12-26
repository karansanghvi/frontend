import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Register() {
  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-between px-4 md:px-[200px] py-4'>
      {/* Logo */}
      <h1 className='text-lg md:text-xl font-extrabold mb-2 md:mb-0'>
        <Link to='/'>InsightfulBytes</Link>
      </h1>
      <h3>
        <Link to='/login'>Login</Link>
      </h3>
    </div>
    <div className='w-full flex justify-center items-center h-[80vh]'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1 className='text-xl font-bold text-left'>
          Create An Account
        </h1>
        <input 
          type="text" 
          className='w-full px-4 py-2 border-2 border-black outline-0'
          placeholder='Enter your name'
        />
        <input 
          type="text" 
          className='w-full px-4 py-2 border-2 border-black outline-0'
          placeholder='Enter your email'
        />
        <input 
          type="password" 
          className='w-full px-4 py-2 border-2 border-black outline-0'
          placeholder='Enter your password'
        />
        <button className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'>
          Register
        </button>
        <div className='flex justify-center items-center space-x-3'>
          <p>Already have an account?</p>
          <p className='text-gray-500 hover:text-black'>
            <Link to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div> 
    <Footer/>
    </>
  )
}

export default Register
