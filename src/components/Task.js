import React, { useContext, useState } from 'react'
import TaskContext from '../contexts/TaskContext'
import Form from './Form'

export default function Task({id}) {

    const [editing, setEditing] = useState(false)
    const {tasks, toggleDone, removeTask, updateTask} = useContext(TaskContext)
    const task = tasks.find((task) => task.id === id)

    // console.log(id, task)

    if(!task) {
        console.log('Task not found', id);
        return '';
    }
    const {title, done = false} = task

    const onUpdateTask = (task) => {
        console.log(task)
        updateTask(id, task.title)
        setEditing(false)
    }
    return (
        <div className='task row'>
            <div>
                <input type='checkbox' checked={done} onChange={() => toggleDone(id)} />
            </div>
            <div className='stretch'>
                {
                    editing ?
                    <Form initial={title} onSubmit={onUpdateTask} /> :
                    <h3 style={{textDecoration: done ? 'line-through': 'none'}}>{title}</h3>
                }
            </div>
            <div className='row'>
                <button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</button>
                <button className='danger' onClick={() => removeTask(id)}>Delete</button>
            </div>
        </div>
    )
}
