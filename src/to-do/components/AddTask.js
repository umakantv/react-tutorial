import React, { useContext } from 'react'
import TaskContext from '../contexts/TaskContext'
import Form from './Form'

export default function AddTask() {

    const {addTask} = useContext(TaskContext)

    const onSubmit = ({title}) => {
        addTask({title, done: false})
    }
    return (
        <Form onSubmit={onSubmit} />
    )
}
