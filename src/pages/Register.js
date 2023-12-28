import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import axios from 'axios'
import { URL } from '../url'

function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL+"/api/auth/register",{username, email, password});
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch(err) {
      setError(true);
      console.log(err);
    }
  }

  // console.log(username)
  // console.log(email)
  // console.log(password)

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
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="text" 
          className='w-full px-4 py-2 border-2 border-black outline-0'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          className='w-full px-4 py-2 border-2 border-black outline-0'
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button 
          className='w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black'
          onClick={handleRegister}
        >
          Register
        </button>
        {error && <h3 className='text-red-500 text-lg'>Something went wrong</h3>}
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
