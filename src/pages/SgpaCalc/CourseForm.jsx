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