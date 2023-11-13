import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'

function Utilities() {
  return (
    <div>
        <Navbar/>
        <div className="">
        <ul className="font-medium justify-center flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-10 md:mt-0 md:border-0 lg:mt-[100px]">
            <li className="md:pt-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              <Link
                to={"/SgpaCalc"}
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
                >
                SGPA Calculator
              </Link>
            </button>  
            </li>
            <li className="md:pt-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              <Link
                to={"/CgpaCalc"}
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
                >
                CGPA Calculator
              </Link>
            </button>  
            </li>
            <li className="md:pt-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              <Link
                to={"/ReqSgpa"}
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
                >
                Required SGPA 
              </Link>
            </button>  
            </li>
            <li className="md:pt-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              <Link
                to={"/ExpExt"}
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
                >
                Expected Externals
              </Link>
            </button>  
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              <Link
                to={"/ClassSkip"}
                className="font-normal leading-[35.6px] text-[20px] font-['Poppins-Regular']"
                aria-current="page"
                >
                Class Skippablity
              </Link>
            </button> 
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Utilities