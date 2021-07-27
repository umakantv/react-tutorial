import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import Form from './Form'

export default function AddTask() {

    const {addTask} = useContext(TaskContext)

    const onSubmit = ({title}) => {
        addTask({title, done: false, id: new Date().toISOString()})
    }
    
    return (
        <Form onSubmit={onSubmit} />
    )
}
