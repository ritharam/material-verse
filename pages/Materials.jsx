import {useState} from 'react';
// import { Link } from "react-router-dom";
import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai";
import Navbar from '../components/Navbar'

import React from 'react'

function Materials() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
      <Navbar/>
        <div className="relative flex flex-col items-cnter w-[340px] h-[340px] rounded-lg">
            <button onClick={() => setIsOpen((prev) =>!prev)}
            className="bg-blue-400 p-4 w-full items-center justify-between fon text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">
                Dropdown
                {!isOpen ? ( <AiOutlineCaretDown/>):(<AiOutlineCaretUp/>)}
            </button>


        </div>
    </div>

  )
}

export default Materials