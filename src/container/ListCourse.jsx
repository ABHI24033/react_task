import React, { useEffect } from 'react';

import useCourseStore from '../store/zustand';
const ListCourse = () => {
  const courses=useCourseStore((state)=>state.courses);
  const removeCourse=useCourseStore((state)=>state.removeCourse);
  const toggleCourseStatus=useCourseStore((state)=>state.toggleCourseStatus);
  // useEffect(()=>{
    
  //   if(courses){
      
  //     console.log(courses);
  //   }
  // },[courses])
  // const toggleCourseStatus=useCourseStore((state)=>state.toggleCourseStatus);
  // const removeCourse=useCourseStore((state)=>state.removeCourse);
    // const {courses,removeCourse,toggleCourseStatus}=useCourseStore((state)=>({
    //   courses:state.courses,
    //   removeCourse:state.removeCourse,
    //   toggleCourseStatus:state.toggleCourseStatus
    // }))
  return (
    <div>
      {
        courses.map((item,index)=>{
          console.log(item.id);
            return(
                // <>
                <li 
                style={{backgroundColor:item.completed?"#347623":"white"}}
                 key={index}
                >
                    <span>
                         <input type="checkbox" name="" id="" 
                         checked={item.completed}
                         onChange={()=>toggleCourseStatus(item.id)}
                        />
                    </span>
                    <span>{item.title}</span>
                    <button onClick={()=>removeCourse(item.id)}>Delete</button>
                </li>
                // </>
            )
        })
      }
    </div>
  );
}

export default ListCourse;
