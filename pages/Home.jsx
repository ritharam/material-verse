import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
    <Navbar/>
      <div className="flex flex-col md:flex-row bg-[#f5f5f5] pt-24">
        <div className="max-w-1/2 p-20">
          <div className="font-[IntroScript] text-6xl font-bold text-[#05acb4]">Unitastic</div>
          <div className="font-[FontSpring] text-4xl font-bold py-2">A one stop solution for all your university needs</div>
          <div className="border-t-[6px] border-[#05acb4] w-1/4 py-2"></div>
          <div className="font-normal text-[#6a7070] text-[18px] font-['FontSpring']">
            <p>Unitastic is a collection of tools and utilities that will help you get through your university 
            life with ease. From calculating your SGPA to finding out number of classes you can skip, Unitastic 
            has it all.</p>
            <br></br>
            <p>Unitastic also provides you with all the materials you need for your university life, be it 
            notes, previous question papers, or even textbooks.</p>
          </div>
          <div className='pt-5'>
            <button type='button' className="rounded-full bg-[#05acb4]">
              <Link
              to={"/Materials"}
              className="font-normal leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
              aria-current="page"
              >
              Get Materials 
              </Link>
            </button>
          </div>
        </div>
        <img src="/assets/images/collegeStudents.svg" alt="CS" className="md:max-w-1/2 lg:w-1/2 md:items-center" />
      </div>
      <div className="text-center p-10">
        <div className="font-[IntroScript] text-5xl font-bold text-[#05acb4]">Random Thought</div>
        <div className="font-normal text-black text-[22px] font-['FontSpring'] px-10 py-2">Our greatest 
        weakness lies in giving up. The most certain way to succeed is always to try just one more time.</div>
        <div className="font-normal text-[#6a7070] text-[18px] font-['FontSpring'] italic">- Thomas Edison</div>
      </div>

      <div className="flex flex-col md:flex-row bg-[#f5f5f5]">
        <img src="/assets/images/library.svg" alt="CS" className="md:max-w-1/2 lg:w-1/2 md:items-center" />
        <div className="max-w-1/2 p-20">
          <div className="font-[IntroScript] text-5xl font-bold text-[#05acb4]">Materials</div>
          <div className="font-normal text-[#6a7070] text-[18px] font-['FontSpring'] py-5">
            <p>Get all the materials you need for your university life, be it notes, previous question papers,
             or even textbooks.</p>
            <br></br>
            <p>Content in Unitastic is curated from students and teachers belonging to various departments 
            and schools across the university.</p>
            <br></br>
            <p>You can also contribute to Unitastic by uploading your own materials.</p>
            <br></br>
            <p>If you find any discrepancies in the content, you can report it to us using the feedback form 
            and we will take care of it.</p>
            </div>
            <div className=''>
              <button type='button' className="rounded-full bg-[#05acb4]">
                <Link
                  to={"/Materials"}
                  className="font-normal leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
                  aria-current="page"
                  >
                  Get Materials 
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row bg-[#f5f5f5]">
        <div className="max-w-1/2 p-20">
          <div className="font-[IntroScript] text-5xl font-bold text-[#05acb4]">Utilities</div>
          <div className="font-normal text-[#6a7070] text-[18px] font-['FontSpring'] py-5">
            <p>Calculate your SGPA, CGPA, find out how many classes you can skip, and much more with Unitastic's utilities.</p>
            <br></br>
            <p>Unitastic utilities are designed to make your university life easier by simplifying and bringing
            together all the tools you need in one place.</p>
            <br></br>
            <p>If you have any suggestions for new utilities, you can let us know using the feedback form.</p>
            </div>
            <div className=''>
              <div className='p-1'>
              <button type='button' className="rounded-full bg-[#05acb4]">
                <Link
                  to={"/Materials"}
                  className="font-normal leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
                  aria-current="page"
                  >
                  Get Materials 
                </Link>
              </button>
              </div>
              <div className='p-1'>
              <button type='button' className="rounded-full bg-[#05acb4]">
                <Link
                  to={"/Materials"}
                  className="font-normal leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
                  aria-current="page"
                  >
                  CGPA Calculator
                </Link>
              </button>
              </div>
              <div className='p-1'>
              <button type='button' className="rounded-full bg-[#05acb4]">
                <Link
                  to={"/Materials"}
                  className="font-normal leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
                  aria-current="page"
                  >
                  Required SGPA Calculator
                </Link>
              </button>
              </div>
              <div className='p-1'>
              <button type='button' className="rounded-full bg-[#05acb4]">
                <Link
                  to={"/Materials"}
                  className="font-normal leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
                  aria-current="page"
                  >
                  Skippability Calculator
                </Link>
              </button>
              </div>
              <div className='p-1'>
              <button type='button' className="rounded-full bg-[#05acb4]">
                <Link
                  to={"/Materials"}
                  className="font-normal leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] p-3"
                  aria-current="page"
                  >
                  Expected External Calculator
                </Link>
              </button>
              </div>
            </div>
          </div>
        <img src="/assets/images/calculator.svg" alt="CS" className="md:max-w-1/2 lg:w-1/2 md:items-center" />
        </div>
      <Footer/>
    </div>
  )
}

export default Home