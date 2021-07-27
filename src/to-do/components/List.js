import React from 'react'
import Task from './Task'

export default function List() {

    const incomplete = []
    const complete = []

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
