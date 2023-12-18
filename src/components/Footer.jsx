import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white text-center py-6">
        <div className="font-['FontSpring']">
            <p className="">© Copyright Unitastic 2023. All rights reserved.</p>
        </div>
        <div>
            <ul className="underline text-[#6a7070]">
                <li className="inline">
                    <Link
                        to={"/Terms"}
                        className="font-normal leading-[35.6px] text-[12px] font-['FontSpring']"
                        aria-current="page"
                    >
                        Terms and Condition 
                    </Link>
                </li>
                {/* <li className="inline">
                    <p></p>
                </li> */}
                <li className="inline">
                    <Link
                        to={"/Credits"}
                        className="font-normal leading-[35.6px] text-[12px] font-['FontSpring']"
                        aria-current="page"
                    >
                        s . Credits
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer