import React, { useState } from 'react'; 
import CourseForm from './CourseForm'; 
import CourseList from './CourseList'; 
  
const gradePoints = { 
    'S': 10.0, 
    'A+': 9.0, 
    'A': 8.0, 
    'B': 7.0, 
    'C': 6.0, 
    'D': 5.0, 
    'F': 2.0, 
    'E': 2.0
    // 'A+': 10.0, 
    // 'A': 9.0, 
    // 'A-': 8.0, 
    // 'B+': 7.3, 
    // 'B': 6.0, 
    // 'B-': 5.7, 
    // 'C+': 2.0, 
    // 'C': 2.0
}; 
  
const GPACalculator = () => { 
  const [courses, setCourses] = useState([]); 
  
  const handleAddCourse = (newCourse) => { 
    setCourses([...courses, newCourse]); 
  }; 
  
  const handleDeleteCourse = (index) => { 
    const updatedCourses = courses.filter((course, i) => i !== index); 
    setCourses(updatedCourses); 
  }; 
  
  const calculateGPA = () => { 
    let totalGradePoints = 0; 
    let totalCreditHours = 0; 
  
    courses.forEach((course) => { 
      totalGradePoints += gradePoints[course.grade] * course.creditHours; 
      totalCreditHours += course.creditHours; 
    }); 
  
    return totalCreditHours === 0 ? 0 : totalGradePoints / totalCreditHours; 
  }; 
  
  return ( 
    <div className='container max-w-2xl m-1.5'> 
      <h1 className="text-[30px] font-['Poppins-Regular'] text-center">GPA Calculator</h1> 
      <div className="section border-2 rounded-sm p-5 bg-blue-400"> 
        <CourseForm onAddCourse={handleAddCourse} /> 
        <CourseList courses={courses} onDeleteCourse={handleDeleteCourse} calculateGPA={calculateGPA} /> 
      </div> 
    </div> 
  ); 
}; 
  
export default GPACalculator; 