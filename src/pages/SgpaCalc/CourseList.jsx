import React from 'react'; 
  
const CourseList = ({ courses, onDeleteCourse, calculateGPA }) => { 
  return ( 
    <div className="section2"> 
      <div> 
        <h2>Course List</h2> 
        <ul className="text-sm list-none pl-0 grid grid-cols-4 gap-4 items-center m-5 border-b-2 pb-2.5"> 
          <li>Course</li> 
          <li>Credits</li> 
          <li>Grade</li> 
          <li>Action</li> 
        </ul> 
        {courses.map((course, index) => ( 
          <ul 
          key={index}
          className="text-sm list-none pl-0 grid grid-cols-4 gap-4 items-center m-5 border-b-2 pb-2.5"> 
            <li>{course.courseName}</li> 
            <li>{course.creditHours}</li> 
            <li>{course.grade}</li> 
            <li>
              <button
              className="p-1.5 outline-none bg-white border-2 rounded-md cursor-pointer transition-all duration-500 hover:bg-slate-100"  
              onClick={() => onDeleteCourse(index)}>
              Delete</button>
            </li> 
          </ul> 
        ))} 
      </div> 
      <div> 
        <h3 className="font-medium">SGPA: {calculateGPA().toFixed(2)}</h3> 
      </div> 
    </div> 
  ); 
}; 
  
export default CourseList; 