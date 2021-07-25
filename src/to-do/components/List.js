import React, { useContext } from 'react'
import TaskContext from '../contexts/TaskContext'
import Task from './Task'

export default function List() {
    
    const {tasks} = useContext(TaskContext)

    const incomplete = tasks.filter(task => !task.done)
    const complete = tasks.filter(task => task.done)

    return (
        <div>
            {
                incomplete.map((task, index) => {
                    return <Task key={String(task.id)} id={task.id} />
                })
            }
            <hr />
            {
                complete.map((task, index) => {
                    return <Task key={String(task.id)} id={task.id} />
                })
            }
        </div>
    )
}
