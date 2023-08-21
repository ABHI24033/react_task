import React, { useEffect, useState } from 'react';
import { useTodoStore,getTodoById } from '../store/TudoStore';
// import useCourseStore from '../store/zustand';
import music from '../constant/music.mp3';
import {  Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

const TodoList = () => {
    const allTodos = useTodoStore((state) => state.Tudos);
    const callgetapi = useTodoStore((state) => state.getApi);
    const deleteTodoApi=useTodoStore((state)=>state.deleteTodoApi);
    
    // console.log(allTodos);

    // =====================Alarm functionalities================================

    // const useparams=useParams();
    // console.log(useparams.id);
    // const [alarm, setAlarm] = useState('');
    // const handleAlarm = (e) => {
    //     setAlarm(e.target.value);
    // }

    // let alarmTime = new Date(alarm);
    // let now = new Date();
    // const TimeToAlarm = alarmTime - now;
    // const audio = new Audio(music);
    // const ringmusic = () => {

    //     audio.play();
    // }
    // function PauseAudio() {
    //     // setTimeout(()=>{
    //     audio.pause();
    //     // },5000)
    // }
    // if (TimeToAlarm >= 0) {
    //     setTimeout(() => {
    //         ringmusic();
    //     }, TimeToAlarm);

        
    // }

    // ==============================================================================
    useEffect(() => {
        callgetapi();

    }, [])
    return (
        <>
            <div className='py-5  bg-blue-200 flex justify-around flex-col'>
                <h1 className=' text-2xl font-semibold underline py-4'>List of Works</h1>
                <div className=' m-auto'>
                    <ul className='flex gap-10justify-center text-xl h-10  '>

                        <li className='border-r-2 cursor-pointer bg-pink-500 text-center w-80 pt-1
                         hover:text-white active:text-white active:bg-pink-400'>
                            To do
                        </li>

                        <li className='border-r-2 cursor-pointer bg-pink-500 text-center w-80 pt-1
                          hover:text-white active:text-white active:bg-pink-400'>
                            Active
                        </li>

                        <li
                            className='border-r-2 cursor-pointer bg-pink-500 text-center w-80 pt-1
                         hover:text-white active:text-white active:bg-pink-400'>
                            Completed
                        </li>

                        <li
                            className='border-r-2 cursor-pointer bg-pink-500 text-center w-80 pt-1
                         hover:text-white active:text-white active:bg-pink-400'>
                            setAlarm
                        </li>
                    </ul>
                </div>


                {
                    allTodos.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className='flex flex-col w-[100%]'>
                                    <div className=' w-[95%] mx-auto text-left '>
                                        <div className='p-3 m-2 bg-white flex justify-between'>
                                            <span>{index + 1}. {item.tudo}</span>
                                            <div>
                                                <a href={`/id:${item._id}`}>
                                                <input type="datetime-local" name="alarm" id="alarm"
                                                    // onChange={(e) => handleAlarm(e)}
                                                    className='w-5 rounded-md mx-10 cursor-pointer bg-green-500 hover:bg-green-600'
                                                />
                                                </a>
                                                {/* <span className='text-sm'><span>Alarm Time:-</span>({alarm})</span> */}

                                                <button varient="container"
                                                    className=' bg-blue-500 w-16 h-7 cursor-pointer text-white mx-2 hover:bg-blue-400 '
                                                    
                                                >Edit</button>
                                                <button
                                                    className='bg-red-500 w-16 h-7 cursor-pointer text-white mx-2 hover:bg-red-400 '
                                                    onClick={()=>deleteTodoApi(item._id)}
                                                >Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }




            </div>

        </>
    );
}

export default TodoList;
