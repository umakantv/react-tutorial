import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import Task from './Task'

export default function List() {


    const {tasks = []} = useContext(TaskContext)



    const incomplete = tasks.filter((task) => !task.done)
    const complete = tasks.filter((task) => task.done)

    return (
        <div>
            <h3>To be done</h3>
            <hr />
            {
                incomplete.map((task, index) => {
                    return <Task key={String(task.id)} id={task.id} />
                })
            }
            <h3>Completed</h3>
            <hr />
            {
                complete.map((task, index) => {
                    return <Task key={String(task.id)} id={task.id} />
                })
            }
        </div>
    )
}
