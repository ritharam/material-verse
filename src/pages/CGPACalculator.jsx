// import React, { useState } from 'react'
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';

// const CGPACalculator = () => {
//   const [input, setInput] = useState(false);
//   const [semester, setSemester] = useState(1); 
//   const [credit, setCredit] = useState(0); 
//   const [sgpa, setSgpa] = useState(0); 

//   const handleAddSubject = () => { 
//     if (credit > 0 && sgpa>0) { 
//       const newCourse = { 
//         semester,
//         credit,
//         sgpa,
//       }; 

//       onAddCourse(newCourse); 
//       setSemester(1); 
//       setCredit(0); 
//       setSgpa(0); 
//     } else { 
//       alert('Please enter valid course details.'); 
//     } 
// };

//   const increamentSemester = () => {
//     setSemester(prevSemester => prevSemester + 1);
//   };
  
//   return (
//     <div className='bg-[#f5f5f5]'>
//     <Navbar/>
//       <div className="flex justify-center items-center">
//         <div className="bg-white border-1 m-44 p-8 max-w-1/2 rounded-lg shadow-lg">
//         <div className="font-[FontSpring] text-2xl font-semibold text-center">CGPA Calculator</div>
//         <div className="font-[FontSpring] text-base font-normal p-4 ">Calculate your CGPA based on SGPA and credits.</div>
//         <div className="border-t-[1px] border-black my-2"></div>
//         <button type='button'
//          onClick={() => setInput(true)} 
//           className="rounded-full  my-2 bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-[2px] font-semibold">
//             Add Semester
//         </button>
//         <div className="border-t-[1px] my-2 border-black"></div>

//         { input &&

//         <div className="flex flex-wrap justify-between my-4 mx-2">
//           <div className="font-[FontSpring] text-base font-normal my-2">
//             Semester {semester}
//           </div>
//           <div className="">
//             <input 
//             type="number"
//             placeholder='Credit'
//             value={credit} 
//             onChange={(e) => setCredit(Number(e.target.value))} 
//             className="max-w-[100px] text-left text-base py-2 px-2 border-[1px] rounded-lg border-[#d1d7d7]"
//             />
//           </div>
//           <div className="">
//             <input 
//             type="number"
//             placeholder='SGPA'
//             value={sgpa} 
//             onChange={(e) => setSgpa(Number(e.target.value))} 
//             className="max-w-[100px] text-left text-base py-2 px-2 border-[1px] rounded-lg border-[#d1d7d7]"
//             />
//           </div>
//           <div className="">
//             <button className="bg-red-500 text-white rounded-full text-2xl px-4 py-[2px]">
//               &times;
//             </button>
//           </div>
//         </div>

//         }
        
//         <button 
//         type='button'
//         onClick={handleAddSubject} 
//         className="rounded-full my-2 bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-[2px] font-semibold">
//             Calculate CGPA
//         </button>
//         <div className="font-[FontSpring] my-2 text-2xl font-semibold text-center">Your CGPA is</div>
//         </div>
//       </div>
//     <Footer/>
//     </div>
//   )
// }

// export default CGPACalculator

import React, { useState } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function CGPACalculator() {
  const [semesters, setSemesters] = useState([]);
  const [cgpa, setCGPA] = useState(0);

  const handleAddClick = () => {
    setSemesters([...semesters, { credits: "", sgpa: "" }]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...semesters];
    list[index][name] = value;
    setSemesters(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...semesters];
    list.splice(index, 1);
    setSemesters(list);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    for (let i = 0; i < semesters.length; i++) {
      let credits = parseInt(semesters[i].credits);
      let sgpa = parseFloat(semesters[i].sgpa);
      if (isNaN(credits) || isNaN(sgpa)) {
        alert("Please enter valid numbers for credits and SGPA");
        return;
      }
      totalCredits += credits;
      totalPoints += credits * sgpa;
    }
    let cgpa = totalPoints / totalCredits;
    setCGPA(cgpa.toFixed(4));
  };

  return (
    <div className='bg-[#f5f5f5]'>
      <Navbar/>
      <div className="flex flex-nowrap justify-center items-center">
        <div className="bg-white border-1 my-44 md:mx-44 mx-10 p-8 max-w-1/2 rounded-lg shadow-lg">
        <div className="font-[FontSpring] text-2xl font-semibold text-center">CGPA Calculator</div>
          <div className="font-[FontSpring] text-base font-normal p-4 ">Calculate your CGPA based on SGPA and credits.</div>
          <div className="border-t-[1px] border-black my-2"></div>
          <button type='button'
          className="rounded-full  my-2 bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-[2px] font-semibold"
          onClick={handleAddClick}>Add Semester</button>
          {semesters.map((semester, i) => {
          return (
        <div className="flex flex-nowrap justify-between my-4 mx-2" key={i}>
          <div className="font-[FontSpring] text-base font-normal my-2"> 
            <label>Semester {i + 1}</label>
          </div>
          <div>
            <input
              type="number"
              name="credits"
              placeholder="Credits"
              value={semester.credits}
              onChange={(e) => handleInputChange(e, i)}
              className="max-w-[100px] text-left text-base py-2 px-2 border-[1px] rounded-lg border-[#d1d7d7]"
            />
          </div>
          <div>
            <input
              type="number"
              name="sgpa"
              placeholder="SGPA"
              value={semester.sgpa}
              onChange={(e) => handleInputChange(e, i)}
              className="max-w-[100px] text-left text-base py-2 px-2 border-[1px] rounded-lg border-[#d1d7d7]"
            />
          </div>
          <div className="my-1">
            {semesters.length > 0 && (
              <button 
              className="bg-red-500 text-white rounded-full text-2xl px-3" onClick={() => handleRemoveClick(i)}>
              &times;
              </button>
            )}
          </div>
          </div>
        );
      })}
      <div className="border-t-[1px] my-2 border-black"></div>
      <button type='button'
      onClick={calculateCGPA}
      className="rounded-full my-2 bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-[2px] font-semibold">
      Calculate CGPA</button>
      <div className="font-[FontSpring] my-2 text-2xl font-semibold text-center">Your CGPA is {cgpa}</div>
      </div>
      </div>
    <Footer/>
    </div>
  );
}

export default CGPACalculator;
