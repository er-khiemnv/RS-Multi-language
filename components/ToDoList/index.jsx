'use client'
import React, { useState } from 'react';

const TodoList = ({dictionary}) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const deleteTask = index => {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className='container'>
      <h1>{dictionary.title}</h1>
      <input className='input' type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button className="button" onClick={addTask}>{dictionary.add}</button>
      <ul className='list'>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button className='button' onClick={() => deleteTask(index)}>{dictionary.delete}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;