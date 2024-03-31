import React, { useState } from 'react';
import ToDoItem from './ToDoIteam';

function ToDoApp() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Wake Up',
            completed: true
        },
      
    ]);

    const [text, setText] = useState('');

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    };

    return (
        <div className=' '>
            {tasks.map(task => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <input type="text" value={text} onChange={e => setText(e.target.value)} className=' border-gray-400 border-solid border-[1px] rounded-md px-2 py-1 ml-[25%] mt-2' /><br/>
            <button onClick={() => addTask(text)} className='bg-blue-600 text-white rounded-md px-2 py-1 ml-[45%] mt-2'>Add</button>
        </div>
    );
}

export default ToDoApp;