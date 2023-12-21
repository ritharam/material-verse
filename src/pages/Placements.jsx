import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

import React from 'react'

function Placements() {
  return (
    <div className="bg-[#f5f5f5]">
    <Navbar/>
    <div className="font-[FontSpring] text-4xl font-bold pb-8 text-center pt-36">Select Subject</div>
      <div className=" flex flex-wrap px-8 pb-36">
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-xl font-semibold pb-4">Aptitude</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
            <a href="https://drive.google.com/drive/folders/1wPTy4-u0jyTH-MoHl90sqWQJWXvJeiA1" 
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              target="_blank" rel="noopener noreferrer">
            Select</a>  
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-xl font-semibold pb-4">Companies List 2022-23</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
            <a href="https://drive.google.com/file/d/1MwT0ICFfIBl2KbF8aEfrbP8upfihC8YI/view" 
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              target="_blank" rel="noopener noreferrer">
            Select</a>  
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-xl font-semibold pb-4">Preparation Guides</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
            <a href="https://drive.google.com/drive/folders/1wPTy4-u0jyTH-MoHl90sqWQJWXvJeiA1" 
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

export default Placements