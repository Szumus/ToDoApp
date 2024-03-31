import React from 'react';
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";


function ToDoItem({ task, deleteTask, toggleCompleted }) {
    const handleChange = () => {
        toggleCompleted(task.id);
    };

    return (
        <div className='flex justify-between mb-[8px]'>
            {task.completed ? (
                <ImCheckboxChecked  onClick={handleChange} className='hover:scale-125 transition duration-300 cursor-pointer' />
            ) : (
                <ImCheckboxUnchecked  onClick={handleChange} className='hover:scale-125 transition duration-300 cursor-pointer' />
            )}
            <p className={task.completed ? 'text-[#888] line-through' : ' text-gray-900'}>
                {task.text}
            </p>
            <MdDeleteForever onClick={() => deleteTask(task.id)} className='cursor-pointer hover:scale-125 transition duration-300' />
            
        </div>
    );
}

export default ToDoItem;