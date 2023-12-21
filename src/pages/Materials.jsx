import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

import React from 'react'

function Materials() {
  return (
    <div className="bg-[#f5f5f5]">
    <Navbar/>
    <div className="font-[FontSpring] text-4xl font-bold pb-8 text-center pt-36">Select Semester</div>
      <div className=" flex flex-wrap px-8 pb-6">
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-2xl font-semibold pb-4">Placements</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
              <Link
              to={"/Placements"}
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              aria-current="page"
              >
              Select 
              </Link>
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-2xl font-semibold pb-4">Semester 1 & 2</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
              <Link
              to={"/Sem12"}
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              aria-current="page"
              >
              Select 
              </Link>
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-2xl font-semibold pb-4">Semester 3</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
              <Link
              to={"/Sem3"}
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              aria-current="page"
              >
              Select 
              </Link>
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-2xl font-semibold pb-4">Semester 4</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
              <Link
              to={"/Sem4"}
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              aria-current="page"
              >
              Select 
              </Link>
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-2xl font-semibold pb-4">Semester 5</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
              <Link
              to={"/Sem5"}
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              aria-current="page"
              >
              Select 
              </Link>
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-2xl font-semibold pb-4">Semester 6</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
              <Link
              to={"/Sem6"}
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              aria-current="page"
              >
              Select 
              </Link>
            </button>
        </div>
        <div className='bg-white rounded-lg border-[1px] w-64 p-4 m-5'>
          <div className="font-[FontSpring] text-2xl font-semibold pb-4">Semester 7</div>
          <button type='button' className="rounded-full bg-[#05acb4]">
              <Link
              to={"/Sem7"}
              className="font-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              aria-current="page"
              >
              Select 
              </Link>
            </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Materials