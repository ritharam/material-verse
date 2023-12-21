// import React, { useState } from 'react'; 
// import CourseForm from './CourseForm'; 
// import CourseList from './CourseList'; 
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
  
// const gradePoints = { 
//     'S': 10.0, 
//     'A+': 9.0, 
//     'A': 8.0, 
//     'B': 7.0, 
//     'C': 6.0, 
//     'D': 5.0, 
//     'F': 2.0, 
//     'E': 2.0
// }; 
  
// const GPACalculator = () => { 
  
//   const [courses, setCourses] = useState([]); 
  
//   const handleAddCourse = (newCourse) => { 
//     setCourses([...courses, newCourse]); 
//   }; 
  
//   const handleDeleteCourse = (index) => { 
//     const updatedCourses = courses.filter((course, i) => i !== index); 
//     setCourses(updatedCourses); 
//   }; 
  
//   const calculateGPA = () => { 
//     let totalGradePoints = 0; 
//     let totalCreditHours = 0; 
  
//     courses.forEach((course) => { 
//       totalGradePoints += gradePoints[course.grade] * course.creditHours; 
//       totalCreditHours += course.creditHours; 
//     }); 
  
//     return totalCreditHours === 0 ? 0 : totalGradePoints / totalCreditHours; 
//   }; 
  
//   return ( 
//     <div className='bg-[#f5f5f5]'>
//     <Navbar/>
//     <div className='container max-w-2xl m-1.5'> 
//       <h1 className="text-[30px] font-['Poppins-Regular'] text-center">GPA Calculator</h1> 
//       <div className="section border-2 rounded-sm p-5 bg-blue-400"> 
//         <CourseForm onAddCourse={handleAddCourse} /> 
//         <CourseList courses={courses} onDeleteCourse={handleDeleteCourse} calculateGPA={calculateGPA} /> 
//       </div> 
//     </div>
//     <Footer/>
//     </div> 
//   ); 
// }; 
  
// export default GPACalculator; 

import React, { useState } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const gradePoints = { 
    'S': 10.0, 
    'A+': 9.0, 
    'A': 8.0, 
    'B': 7.0, 
    'C': 6.0, 
    'D': 5.0
}; 

function SGPACalculator() {
  const [subjects, setSubjects] = useState([]);
  const [sgpa, setSGPA] = useState(0);

  const handleAddClick = () => {
    setSubjects([...subjects, { credits: "", grade: "" }]);
    // calculateSGPA();
  };

  const handleInputChange = (e, index, inputType) => {
    const { value } = e.target;
    const list = [...subjects];

    if (inputType === 'credits'){
      list[index].credits = value;
    } else if (inputType === 'grade'){
      list[index].grade = value;
    } 
    setSubjects(list);
    // calculateSGPA();
  };

  const handleRemoveClick = (index) => {
    const list = [...subjects];
    list.splice(index, 1);
    setSubjects(list);
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;
    for (let i = 0; i < subjects.length; i++) {
      let credits = parseInt(subjects[i].credits);
      let grade = subjects[i].grade;
      // if (isNaN(credits) || !gradePoints.hasOwnProperty(grade)) {
      //   alert("Please enter valid numbers for credits and SGPA");
      //   return;
      // }
      totalCredits += credits;
      totalGradePoints += gradePoints[grade] * credits;
    }
    if (totalCredits === 0){
      alert("Please add subjects to calculate SGPA.");
      return;
    }
    let sgpa = totalGradePoints / totalCredits;
    setSGPA(sgpa.toFixed(4));
  };

  return (
    <div className='bg-[#f5f5f5]'>
      <Navbar/>
      <div className="flex justify-center items-center">
        <div className="bg-white border-1 m-44 p-8 max-w-1/2 rounded-lg shadow-lg">
        <div className="font-[FontSpring] text-2xl font-semibold text-center">CGPA Calculator</div>
          <div className="font-[FontSpring] text-base font-normal p-4 ">Calculate your CGPA based on SGPA and credits.</div>
          <div className="border-t-[1px] border-black my-2"></div>
          <button type='button'
          className="rounded-full  my-2 bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-[2px] font-semibold"
          onClick={handleAddClick}>Add Subject</button>
          {subjects.map((subject, i) => {
          return (
        <div className="flex flex-wrap justify-between my-4 mx-2" key={i}>
          <div className="font-[FontSpring] text-base font-normal my-2"> 
            <label>Subject {i + 1}</label>
          </div>
          <div>
            <input
              type="number"
              name="credits"
              placeholder="Credits"
              value={subject.credits}
              onChange={(e) => handleInputChange(e, i,'credits')}
              className="max-w-[100px] text-left text-base py-2 px-2 border-[1px] rounded-lg border-[#d1d7d7]"
            />
          </div>
          <div>
            <select 
              value={subject.grade} 
              placeholder="Grades"
              onChange={(e) => handleInputChange(e, i,'grade')}
              className="max-w-[100px] text-left text-base py-2 px-2 border-[1px] rounded-lg border-[#d1d7d7]">
                <option value="Select">Select</option> 
                <option value="S">S</option> 
                <option value="A+">A+</option> 
                <option value="A">A</option> 
                <option value="B">B</option> 
                <option value="C">C</option> 
                <option value="D">D</option> 
            </select> 
          </div>
          <div className="my-1">
            {subjects.length > 0 && (
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
        onClick={calculateSGPA}
        className="rounded-full my-2 bg-[#05acb4] ont-light leading-[35.6px] text-[16px] font-['FontSpring'] text-[#f0f4f4] px-4 py-[2px] font-semibold">
        Calculate SGPA</button>
        <div className="font-[FontSpring] my-2 text-2xl font-semibold text-center">Your SGPA is {sgpa}</div>
        </div>
      </div>
    <Footer/>
    </div>
  );
}

export default SGPACalculator;