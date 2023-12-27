import React,{useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ReqSgpa() {
  const [cgpagoal,setCgpagoal] = useState();
  const [curcgpa,setCurcgpa] = useState();
  const [cursem,setCursem] = useState();
  const [lastsem,setLastsem] = useState();
  const [sgpa,setSgpa] = useState();

  const calculateReqSgpa = () => {
    let x = parseFloat(cgpagoal*(cursem+lastsem));
    let y = parseFloat(curcgpa*lastsem);
    let sgpa = ((x-y)/cursem);
    setSgpa(sgpa);
  }

  return (
    <div>
    <Navbar/>
      <div className="bg-[#f5f5f5]">
        <div className="flex justify-center items-center">
          <div className="bg-white border-1 mx-96 my-44 md:mx-44 mx-10 w-full p-8 rounded-lg shadow-lg">
          <div className="font-[FontSpring] text-2xl font-semibold text-center">Required SGPA Calculator</div>
          <div className="font-[FontSpring] text-base font-normal p-4 ">Calculate required SGPA for achieving a target CGPA.</div>
          <div className="border-t-[1px] border-black my-2"></div>
            <div className="flex flex-col justify-between my-4 mx-2">
              <div className="my-2">
                <input type="text" name="cgpagoal" id="cgpagoal" placeholder="CGPA Goal" 
                value={cgpagoal} onChange={(e) => setCgpagoal(e.target.value)}
                className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
              </div>
              <div className="my-2">
                <input type="text" name="curcgpa" id="curcgpa" placeholder="Current CGPA" 
                value={curcgpa} onChange={(e) => setCurcgpa(e.target.value)}
                className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
              </div>
              <div className="my-2">
                <input type="text" name="cursem" id="cursem" placeholder="Current Semester Credits" 
                value={cursem} onChange={(e) => setCursem(e.target.value)}
                className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
              </div>
              <div className="my-2">
                <input type="text" name="lastsem" id="lastsem" placeholder="Credits till Last Semester" 
                value={lastsem} onChange={(e) => setLastsem(e.target.value)}
                className="w-full text-base py-3 px-2 border-[1px] rounded-lg border-[#d1d7d7]"/>
              </div>
            </div>
            <div className="border-t-[1px] border-black my-2"></div>       
          <button type='button'
          onClick={calculateReqSgpa}
          className="rounded-full my-2 bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-[2px] font-semibold">
          Calculate </button>
          <div className="font-[FontSpring] my-2 text-2xl font-semibold text-center">
          {sgpa > 10 ?  "Not Acheivable" : `Required SGPA is ${sgpa}`}</div>
        </div>
        </div>
      </div>
    <Footer/>
    </div>
  )
}

export default ReqSgpa

// import React, { useState } from "react";

// function ExpExt() {
//   // Initialize state variables for input and output
//   const [internals, setInternals] = useState(0);
//   const [externals, setExternals] = useState({
//     S: "NA",
//     Aplus: "NA",
//     A: "NA",
//     B: "NA",
//     C: "NA",
//     D: "NA",
//   });

//   // Handle input change for internals
//   const handleInputChange = (e) => {
//     const { value } = e.target;
//     setInternals(value);
//   };

//   // Calculate the required externals based on the input
//   const calculateExternals = () => {
//     let internals = parseInt(internals);
//     if (isNaN(internals) || internals < 0 || internals > 50) {
//       alert("Please enter a valid number for internals between 0 and 50");
//       return;
//     }
//     let externals = {};
//     // Formula: externals = (grade * 10 - internals * 2) / 2
//     externals.S = internals >= 45 ? "NA" : Math.ceil((90 - internals * 2) / 2);
//     externals.Aplus = Math.ceil((85 - internals * 2) / 2);
//     externals.A = Math.ceil((75 - internals * 2) / 2);
//     externals.B = Math.ceil((60 - internals * 2) / 2);
//     externals.C = Math.ceil((50 - internals * 2) / 2);
//     externals.D = Math.ceil((40 - internals * 2) / 2);
//     setExternals(externals);
//   };

//   return (
//     <div className="container">
//       <h1>Expected Externals</h1>
//       <p>Calculate the externals marks required to get each overall grade based on internal marks.</p>
//       <input
//         type="number"
//         name="internals"
//         placeholder="Internals"
//         value={internals}
//         onChange={handleInputChange}
//       />
//       <button onClick={calculateExternals}>Calculate</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Grade</th>
//             <th>Externals</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>S</td>
//             <td>{externals.S}</td>
//           </tr>
//           <tr>
//             <td>A+</td>
//             <td>{externals.Aplus}</td>
//           </tr>
//           <tr>
//             <td>A</td>
//             <td>{externals.A}</td>
//           </tr>
//           <tr>
//             <td>B</td>
//             <td>{externals.B}</td>
//           </tr>
//           <tr>
//             <td>C</td>
//             <td>{externals.C}</td>
//           </tr>
//           <tr>
//             <td>D</td>
//             <td>{externals.D}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ExpExt;
