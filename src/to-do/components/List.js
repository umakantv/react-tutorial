import React from 'react'
import Task from './Task'

export default function List() {

    const incomplete = []
    const complete = []

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
