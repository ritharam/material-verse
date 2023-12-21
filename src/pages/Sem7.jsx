import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

import React from 'react'

function Sem7() {
  return (
    <div className="bg-[#f5f5f5]">
    <Navbar/>
    <div className="font-[FontSpring] text-4xl font-bold pb-8 text-center pt-36">Select Subject</div>
      <div className=" flex flex-wrap px-8 pb-8">
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-xl font-semibold pb-4">Civil Engineering</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
            <a href="https://drive.google.com/drive/folders/1TrPgMy8DjKzDyfq3CErbCE4SGXt4EXKj" 
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              target="_blank" rel="noopener noreferrer">
            Select</a>  
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-xl font-semibold pb-4">Computer Science and Engineering</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
            <a href="https://drive.google.com/drive/folders/1-HEpyaQnS9SXSrfPAvgpUmQMFZ22xxhv" 
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              target="_blank" rel="noopener noreferrer">
            Select</a>  
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-xl font-semibold pb-4">Electronics and Communications Engineering</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
            <a href="https://drive.google.com/drive/folders/13q8MwbJvpqcOJkJxNpDl3lH8aPlVTO7t" 
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              target="_blank" rel="noopener noreferrer">
            Select</a>  
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-xl font-semibold pb-4">Information and Communication Technology</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
            <a href="https://drive.google.com/drive/folders/1rCflwOBdLQZo0OwZDMER8aL58UFJisWn" 
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              target="_blank" rel="noopener noreferrer">
            Select</a>  
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-xl font-semibold pb-4">Mechanical Engineering</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
            <a href="https://drive.google.com/drive/folders/13KpWIWpvJ_H4IlsbvxK5KNJWqX1YVS_w" 
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              target="_blank" rel="noopener noreferrer">
            Select</a>  
            </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Sem7