import React, { useState } from 'react'; 
  
const CourseForm = ({ onAddCourse }) => { 
    const [courseName, setCourseName] = useState(''); 
    const [creditHours, setCreditHours] = useState(0); 
    const [grade, setGrade] = useState('S'); 
  
    const handleAddCourse = () => { 
        if (courseName && creditHours > 0 && grade) { 
            const newCourse = { 
                courseName, 
                creditHours, 
                grade, 
            }; 

            onAddCourse(newCourse); 
            setCourseName(''); 
            setCreditHours(0); 
            setGrade('S'); 
        } else { 
            alert('Please enter valid course details.'); 
        } 
    }; 
  
    return ( 
        <div className="section1 flex justify-between items-center w-full"> 
            <div classname="m-1"> 
                <p>Course</p> 
                <input 
                    type="text"
                    value={courseName} 
                    onChange={(e) => setCourseName(e.target.value)} 
                    className="max-w-[100px] text-left"
                /> 
            </div> 
            <div classname="m-1"> 
                <p>Credits</p> 
                <input 
                    type="number"
                    value={creditHours} 
                    onChange={(e) => setCreditHours(Number(e.target.value))} 
                    className="max-w-[100px] text-left"

                /> 
            </div> 
            <div classname="m-1 text-left"> 
                <p>Grade</p> 
                <select 
                value={grade} 
                onChange={(e) => setGrade(e.target.value)}
                className="w-full border-2 rounded"> 
                    <option value="S">S</option> 
                    <option value="A+">A+</option> 
                    <option value="A">A</option> 
                    <option value="B">B</option> 
                    <option value="C">C</option> 
                    <option value="D">D</option> 
                    <option value="E">E</option> 
                    <option value="F">F</option> 
                </select> 
            </div> 
            <div classname="m-1 text-left"> 
                <p
                className="" 
                style={{ opacity: 0 }}
                >-</p> 
                <button
                className="p-1.5 outline-none bg-white border-2 rounded-md cursor-pointer transition-all duration-500 hover:bg-slate-100" 
                onClick={handleAddCourse}>Add</button> 
            </div> 
        </div> 
    ); 
}; 
  
export default CourseForm; 

import React, { useState } from "react";

function SGPACalculator() {
  // Initialize state variables for input and output
  const [subjects, setSubjects] = useState([{ credits: "", grade: "" }]);
  const [sgpa, setSGPA] = useState(0);

  // Handle input change for each subject
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...subjects];
    list[index][name] = value;
    setSubjects(list);
  };

  // Handle click event for adding a new subject
  const handleAddClick = () => {
    setSubjects([...subjects, { credits: "", grade: "" }]);
  };

  // Handle click event for removing a subject
  const handleRemoveClick = (index) => {
    const list = [...subjects];
    list.splice(index, 1);
    setSubjects(list);
  };

  // Calculate the SGPA based on the input
  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    for (let i = 0; i < subjects.length; i++) {
      let credits = parseInt(subjects[i].credits);
      let grade = parseFloat(subjects[i].grade);
      if (isNaN(credits) || isNaN(grade)) {
        alert("Please enter valid numbers for credits and grade");
        return;
      }
      totalCredits += credits;
      totalPoints += credits * grade;
    }
    let sgpa = totalPoints / totalCredits;
    setSGPA(sgpa.toFixed(4));
  };

  return (
    <div className="container">
      <h1>SGPA Calculator</h1>
      <p>Calculate your SGPA based on credits and expected grade.</p>
      <button onClick={handleAddClick}>Add Subject</button>
      {subjects.map((subject, i) => {
        return (
          <div className="subject" key={i}>
            <label>Subject {i + 1}</label>
            <input
              type="number"
              name="credits"
              placeholder="Credits"
              value={subject.credits}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              type="number"
              name="grade"
              placeholder="Grade"
              value={subject.grade}
              onChange={(e) => handleInputChange(e, i)}
            />
            {subjects.length > 1 && (
              <button className="remove" onClick={() => handleRemoveClick(i)}>
                X
              </button>
            )}
          </div>
        );
      })}
      <button onClick={calculateSGPA}>Calculate SGPA</button>
      <p>Your SGPA is {sgpa}</p>
    </div>
  );
}

export default SGPACalculator;
