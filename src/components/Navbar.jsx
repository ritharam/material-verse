import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [utilitiesOpen, setUtilitiesOpen] = useState(false);
  const [usefulOpen, setUsefulOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [contributeOpen, setContributeOpen] = useState(false);

  return (
    <nav className="bg-white p-2 drop-shadow-lg fixed w-full top-0">
      <div className="max-w-screen-xl flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex justify-between w-full md:w-1/4">
          <div>
            <Link 
            to={"/"}
            className="font-[IntroScript] text-3xl font-bold text-[#05acb4]">
              Unitastic</Link>
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
            rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow md:flex-none items-center flex md:h-auto overflow-hidden" +
            (navbarOpen ? " h-auto" : " h-0")
          }
          id="navbar-default"
        >
          <ul className="font-extrabold text-[#6a7070] text-center justify-center flex flex-col p-4 md:p-0 mt-2 md:flex-row md:space-x-10 md:mt-0 md:border-0 ">
            <li className="md:pt-2 py-1">
              <Link
                to={"/Materials"}
                className="font-normal leading-[35.6px] text-[18px] font-['FontSpring']"
                aria-current="page"
              >
                Materials 
              </Link>
            </li>
            <li className="md:pt-2 py-1">
              <div className="relative flex flex-col items-center">
                <button
                  data-collapse-toggle="utilities-default"
                  className="font-normal leading-[35.6px] text-[18px] font-['FontSpring'] inline"
                  onClick={() => setUtilitiesOpen(!utilitiesOpen)}
                  aria-controls="utilities-default"
                  aria-expanded="false"
                  >
                  Utilities
                  {utilitiesOpen ? (
                    <AiOutlineCaretUp className="inline"/>
                    ):(
                      <AiOutlineCaretDown className="inline"/>
                      )}
                </button>
              </div>
              <div
                className={
                  "lg:absolute lg:bg-white lg:px-4 lg:rounded-lg overflow-hidden" +
                  (utilitiesOpen ? " h-auto" : " h-0")
                }
                id="utilities-default"
              >
                <ul className="">
                  <li className="md:pt-1 py-0.5">
                    <Link
                      to="/SgpaCalc"
                      className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']"
                      aria-current="page"
                    >
                      SGPA Calculator
                    </Link>
                  </li>
                  <li className="md:pt-1 py-0.5">
                    <Link
                      to="/CgpaCalc"
                      className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']"
                      aria-current="page"
                    >
                      CGPA Calculator
                    </Link>
                  </li>
                  <li className="md:pt-1 py-0.5">
                    <Link
                      to="/ReqSgpa"
                      className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']"
                      aria-current="page"
                    >
                      Required SGPA
                    </Link>
                  </li>
                  <li className="md:pt-1 py-0.5">
                    <Link
                      to="/ExpExt"
                      className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']"
                      aria-current="page"
                    >
                      Expected Externals
                    </Link>
                  </li>
                  <li className="md:pt-1 py-0.5">
                    <Link
                      to="/ClassSkip"
                      className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']"
                      aria-current="page"
                    >
                      Class Skippablity
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="md:pt-2 py-1">
              <div className="relative flex flex-col items-center">
                <button
                  data-collapse-toggle="useful-default"
                  className="font-normal leading-[35.6px] text-[18px] font-['FontSpring'] inline"
                  onClick={() => setUsefulOpen(!usefulOpen)}
                  aria-controls="useful-default"
                  aria-expanded="false"
                  >
                  Useful Links
                  {usefulOpen ? (
                    <AiOutlineCaretUp className="inline"/>
                    ):(
                      <AiOutlineCaretDown className="inline"/>
                      )}
                </button>
              </div>
              <div
                className={
                  "lg:absolute lg:bg-white lg:px-4 lg:rounded-lg overflow-hidden" +
                  (usefulOpen ? " h-auto" : " h-0")
                }
                id="useful-default"
              >
                <ul className="">
                  <li className="md:pt-1 py-0.5">
                    <a href="https://webstream.sastra.edu/sastrapwi/" target="_blank" rel="noopener noreferrer"
                    className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']">
                      Student Web Interface</a>
                  </li>
                  <li className="md:pt-1 py-0.5">
                    <a href="https://webstream.sastra.edu/sastraparentweb/" target="_blank" rel="noopener noreferrer"
                    className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']">
                      Parent Web Interface</a>
                  </li>
                  <li className="md:pt-1 py-0.5">
                    <a href="https://biometric.sastra.edu/" target="_blank" rel="noopener noreferrer"
                      className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']">
                      Hostel Leave Portal</a>
                  </li>
                  <li className="md:pt-1 py-0.5">
                  <a href="https://www.sastra.edu/downloads/menu/Academics/Academic_Calender_2023_24_TPJ.pdf" target="_blank" rel="noopener noreferrer"
                      className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']">
                      Academic Calender</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="md:pt-2 py-1">
              <div className="relative flex flex-col items-center">
                <button
                  data-collapse-toggle="archive-default"
                  className="font-normal leading-[35.6px] text-[18px] font-['FontSpring'] inline"
                  onClick={() => setArchiveOpen(!archiveOpen)}
                  aria-controls="archive-default"
                  aria-expanded="false"
                  >
                  Archive
                  {archiveOpen ? (
                    <AiOutlineCaretUp className="inline"/>
                    ):(
                      <AiOutlineCaretDown className="inline"/>
                      )}
                </button>
              </div>
              <div
                className={
                  "lg:absolute lg:bg-white lg:px-4 lg:rounded-lg overflow-hidden" +
                  (archiveOpen ? " h-auto" : " h-0")
                }
                id="archive-default"
              >
                <ul className="">
                  <li className="md:pt-1 py-0.5">
                    <a href="https://materialbase.github.io/" target="_blank" rel="noopener noreferrer"
                    className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']">
                      Material Base</a>
                  </li>
                  <li className="md:pt-1 py-0.5">
                    <a href="https://linktr.ee/materialhub" target="_blank" rel="noopener noreferrer"
                    className="font-normal leading-[35.6px] text-[16px] font-['FontSpring']">
                      Material Hub</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="md:pt-2 py-1">
              <div className="relative flex flex-col items-center">
                <button
                  data-collapse-toggle="contribute-default"
                  className="font-normal leading-[35.6px] text-[18px] font-['FontSpring'] inline"
                  onClick={() => setContributeOpen(!contributeOpen)}
                  aria-controls="contribute-default"
                  aria-expanded="false"
                  >
                  Contibute
                  {contributeOpen ? (
                    <AiOutlineCaretUp className="inline"/>
                    ):(
                      <AiOutlineCaretDown className="inline"/>
                      )}
                </button>
              </div>
              <div
                className={
                  "lg:absolute lg:bg-white lg:px-4 lg:rounded-lg overflow-hidden" +
                  (contributeOpen ? " h-auto" : " h-0")
                }
                id="contribute-default"
              >
                <ul className="">
                  <li className="md:pt-1 py-0.5">
                    <Link
                      to={"/MaterialForm"}
                      className="font-normal leading-[35.6px] text-[18px] font-['FontSpring']"
                      aria-current="page"
                    >
                      Materials 
                    </Link>
                  </li>
                  <li className="md:pt-1 py-0.5">
                    <Link
                      to={"/Feedback"}
                      className="font-normal leading-[35.6px] text-[18px] font-['FontSpring']"
                      aria-current="page"
                    >
                      Feedback
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;