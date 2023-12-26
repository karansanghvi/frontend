import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProfilePosts from '../components/ProfilePosts'

function Profile() {
  return (
    <>
      <div>
        <Navbar/>
            <div className='px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse'>
                <div className='flex flex-col md:w-[70%] w-full'>
                    <h1 className='text-xl font-bold mb-4'>Your Posts</h1>
                    <ProfilePosts/>
                </div>
                <div className='flex flex-col space-y-4 md:w-[30%] w-full'>
                    <h1 className='text-xl font-bold mb-4'>Profile</h1>
                    <input 
                        type="text" 
                        className='outline-none px-4 py-2 text-gray-500'
                        placeholder='Username'
                    />
                    <input 
                        type="email" 
                        className='outline-none px-4 py-2 text-gray-500'
                        placeholder='Email Address'
                    />
                    <input 
                        type="password" 
                        className='outline-none px-4 py-2 text-gray-500'
                        placeholder='Password'
                    />
                </div>
            </div>
        <Footer/>
      </div>
    </>
  )
}

export default Profile
