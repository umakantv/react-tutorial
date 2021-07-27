import React from 'react'
import Form from './Form'

export default function AddTask() {

    const onSubmit = ({title}) => {
    }
    
    return (
        <Form onSubmit={onSubmit} />
    )
}
