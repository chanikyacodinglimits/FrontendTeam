'use client';
import { use, useState } from "react";


export default function ToDO(){
    const [task, setTask]=useState("");
    const [tasks, setTasks] =useState([]);
    const [editIndex, setEditIndex]=useState(null);
    const [deleteTaskIndex, setDeleteTaskIndex]=useState(null);

    const handleAddTask=()=>{
        if(!task.trim()) return;
        else if(editIndex !== null){
            const updated=[...tasks];
            updated[editIndex]=task;
            setTasks(updated);
            setEditIndex(null);
        } 
        else{
            setTasks([...tasks,task])
        }
        setTask("")
    }

    const handleEdit=(i)=>{
        setTask(tasks[i]);
        setEditIndex(i);

    }
    const handleDelete=(i)=>{
        const updated=tasks.filter((_,index)=> index !== i)
        setTasks(updated)
    }
    return (
        
        <div className="w-full h-full flex flex-col gap-3 justify-start items-center">
            <input 
            className="w-[25%] h-14 p-2"
            placeholder="write task here..."
            value={task}
            onChange={(e)=>setTask(e.target.value)}/>

            <button className="w-[25%] h-14 bg-amber-600 rounded" onClick={()=>handleAddTask()}>Add</button>
            {/* <button className="w-[25%] h-14 bg-amber-400 rounded">Edit</button> */}

            <div className="mt-10">
                {tasks.map((k,i)=>
                     (
                        <div key={i} className="font-semibold text-xl mt-2">{k}
                        <button className="ml-3 bg-amber-400 p-2 border rounded-xl" onClick={()=>handleEdit(i)}>Edit</button>
                        <button className="ml-2 bg-amber-700 p-2 border rounded-xl" onClick={()=>handleDelete(i)}>Delete</button>
                        </div>
                        
                   
                     )
                )}
            </div>
        </div>
       
    )
}