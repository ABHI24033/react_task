import React, { useState,useRef, useEffect } from 'react';
import {useTodoStore} from '../store/TudoStore';
// import { useNavigate } from 'react-router-dom';
const Tudo = () => {
  const postTudoApi=useTodoStore((state)=>state.postTudoApi);

  const [task,settask]=useState('');
  const [notification,setnotifcation]=useState();
  // const navigate=useNavigate();
  const handleChange=(e)=>{
    settask({...task,[e.target.name]:e.target.value})
  }
  // const tudo=useRef('');
  // console.log(tudo.current);
  // const payload={
    // tudo:tudo.current.valueOf,
  // }
  // console.log(payload);
  const postTodo=async()=>{
    if(task===""||task==undefined){
      setnotifcation(true);
      console.log(task==='')
    }else{
       await postTudoApi(task);
    }
    
  }
  useEffect(()=>{

  },[])
  return (
    <>
      <div className=" bg-blue-200 w-full h-[20vh] flex justify-center flex-col border-b-2 border-black ">
        {
            notification==true?<p>Please enter Todo work</p>:''      
        }
        <h1 className=' text-3xl font-extrabold uppercase underline'>To do</h1>
        <div>
            <input type="text" name='tudo'
            className=' w-96 h-10 p-3 m-2 outline-none rounded-md' 
            placeholder='Enter Your Task' 
            onChange={(e)=>handleChange(e)}
            required
            // ref={tudo}
            />
            <input type="button" 
              onClick={()=>postTodo()}
            className=' text-3xl text-white bg-red-700 rounded-3xl w-10 h-10 pb-2 cursor-pointer active:bg-red-400'
            value="+" />
        </div>
      </div>
    </>
  );
}

export default Tudo;
