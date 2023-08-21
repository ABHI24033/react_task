import React,{useState} from 'react';

import useCourseStore from '../store/zustand';

const CourseForm = () => {

    const addCourse=useCourseStore((state)=>state.addCourse);
    const [courseTitle,setTitle]=useState('');

    console.log(courseTitle);
    const handleForm=()=>{
        if(!courseTitle)return alert("Please add a course title");

        addCourse({
            id:Math.ceil(Math.random()*10000),
            title:courseTitle
        })
        setTitle('')
    }
  return (
    <div>
      <input type="text"
      value={courseTitle}
      onChange={(e)=>{setTitle(e.target.value)}}
      className=''/>
      <button 
      onClick={()=>{handleForm();}}
      className="form_button">
        Add Course
      </button>
    </div>
  );
}

export default CourseForm;
