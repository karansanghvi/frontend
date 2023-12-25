import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

function PostDetails() {
  return (
    <>
      <div>
        <Navbar />
        <div className='px-8 md:px-[200px] mt-8'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-black md:text-3xl'>
              10 Uses Of Artificial Intelligence In Day To Day Life
            </h1>
            <div className='flex items-center justify-center space-x-2'>
              <p>
                <BiEdit />
              </p>
              <p>
                <MdDelete />
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between mt-2 md:mt-4'>
            <p>@karansanghvi</p>
            <div className='flex space-x-2'>
              <p>16/06/2023</p>
              <p>16:45</p>
            </div>
          </div>
          <img
            src='https://www.analyticsinsight.net/wp-content/webp-express/webp-images/uploads/2021/12/Top-10-real-life-applications-of-artificial-intelligence.jpg.webp'
            alt=''
            className='w-full mx-auto mt-8'
          />
          <p className='mx-auto mt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio dui, hendrerit sit amet tincidunt ac, euismod sed risus. Nam vitae venenatis dui. Morbi sollicitudin blandit malesuada. Nunc tincidunt tortor dolor, quis malesuada dui pellentesque faucibus. Pellentesque ullamcorper neque non suscipit porttitor. Morbi quis mauris sed lectus accumsan pharetra a feugiat nunc. Nullam porta nunc et vestibulum cursus. Sed magna nulla, dapibus a tincidunt eu, cursus vel lorem. Curabitur et sem rutrum, mattis massa vitae, cursus turpis. Suspendisse ut quam quis urna varius pulvinar vel et nisl. Nam sit amet est iaculis, cursus dui ac, pulvinar orci. Morbi ac ex et justo congue egestas.
            Mauris dapibus quis neque imperdiet accumsan. Vivamus malesuada, tortor id dapibus elementum, quam diam interdum nunc, vel blandit leo orci et nisi. Ut placerat ipsum et metus dictum sagittis. Vivamus sed libero cursus, aliquet dui sed, aliquam massa. Nullam hendrerit faucibus ullamcorper. Phasellus in ex arcu. Aliquam ultricies dolor ac urna mollis, a auctor ligula volutpat. Praesent rutrum mattis purus. Nunc volutpat vitae sem a scelerisque. Suspendisse sit amet augue nec ex lacinia fermentum. Donec ut felis malesuada, aliquam justo id, pulvinar nulla. Nunc posuere vehicula felis, vitae dapibus dui imperdiet sit amet.
          </p>
          <div className='flex items-center mt-8 space-x-4 font-semibold'>
            <p>Categories:</p>
            <div className='flex justify-center items-center space-x-2'>
              <div className='bg-gray-300 rounded-lg px-3 py-1'>Tech</div>
              <div className='bg-gray-300 rounded-lg px-3 py-1'>AI</div>
            </div>
          </div>
          <div className='flex flex-col mt-4'>
            <h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
            {/* COMMENT */}
            <div className='px-2 py-2 bg-gray-200 rounded-lg my-2'>
              <div className='flex items-center justify-between'>
                <h3 className='font-bold text-gray-600'>@karansanghvi</h3>
                <div className='flex justify-center items-center space-x-4'>
                  <p className='text-gray-500 text-sm'>16/06/2023</p>
                  <p className='text-gray-500 text-sm'>16:45</p>
                    <div className='flex items-center justify-center space-x-2'>
                        <p>
                            <BiEdit />
                        </p>
                        <p>
                            <MdDelete />
                        </p>
                    </div>
                </div>
              </div>
              <p className='px-4 mt-2'>
                Nice Information!!
              </p>
            </div>

            {/* COMMENT */}
            <div className='px-2 py-2 bg-gray-200 rounded-lg my-2'>
              <div className='flex items-center justify-between'>
                <h3 className='font-bold text-gray-600'>@karansanghvi</h3>
                <div className='flex justify-center items-center space-x-4'>
                  <p className='text-gray-500 text-sm'>16/06/2023</p>
                  <p className='text-gray-500 text-sm'>16:45</p>
                    <div className='flex items-center justify-center space-x-2'>
                        <p>
                            <BiEdit />
                        </p>
                        <p>
                            <MdDelete />
                        </p>
                    </div>
                </div>
              </div>
              <p className='px-4 mt-2'>
                Nice Information!!
              </p>
            </div>
          </div>
          {/* WRITE A COMMENT */}
          <div className='w-full flex flex-col mt-4 md:flex-row'>
            <input 
                type="text" 
                className='md:w-[80%] outline-none px-4 py-2 mt-4 md:mt-0'
                placeholder='Write a comment'
            />
            <button className='bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0'>
                Add Comment
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PostDetails;
