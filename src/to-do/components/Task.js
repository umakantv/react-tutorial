import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

export default function Task({id}) {

    const {tasks, removeTask, toggleComplete} = useContext(TaskContext)

    const task = tasks.find(task => id === task.id)
    if(!task) {
        return ''
    }

    return (
        <div className='task row'>
            <div>
                <input type='checkbox' checked={task.done} onChange={() => toggleComplete(id)} />
            </div>
            <div className='stretch'>
                <h3 style={{textDecoration: task.done ? 'line-through': 'none'}}>{task.title}</h3>

            </div>
            <div className='row'>
                <button className='danger' onClick={() => removeTask(id)}>Delete</button>
            </div>
        </div>
    )
}
