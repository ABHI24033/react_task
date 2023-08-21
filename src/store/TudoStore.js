import {create} from 'zustand';
// import { devtools } from 'zustand/middleware';
import { immer } from "zustand/middleware/immer";
import axios from "axios";


// const backendUrl='http://localhost:8000/';
const backendUrl='https://task-5jn7l1wov-abhi24033.vercel.app/';
 export const useTodoStore = create(
    immer((set) => ({
    Tudos: [],
    
    getApi:async()=>{
        // const apiResponse = await axios.get("http://localhost:8000/");
        const apiResponse = await axios.get(backendUrl);
        // console.log(apiResponse);
        set((state)=>{
            state.Tudos=apiResponse.data;
        })
    },
    postTudoApi: async (payload) => {
        const apiResponse = await axios.post(
          // "http://localhost:8000/tudo",
          `${backendUrl}tudo`,
          payload
        );
        set((state) => {
          state.Tudos.push(apiResponse.data);
        })
    },
    deleteTodoApi:async(todoId)=>{
      // const apiResponce=
      await axios.delete(`${backendUrl}${todoId}`);
      set((state)=>{
        state.Tudos=state.Tudos.filter((tudos)=>tudos._id!==todoId)
      })
    },
    EditTodoApi:async(todoId)=>{

    },
  })));


  export const getTodoById = (id) => {
    return (state) => {
      let todo = state.Tudos.filter((c) => c.id === id);
      if (todo) {
        return todo[0];
      }
      return null;
    };
  };
