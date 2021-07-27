import React, { useState } from 'react'

export default function Task({id}) {

    const [editing, setEditing] = useState(false)

    return (
        <div className='task row'>
            <div>
                <input type='checkbox' />
            </div>
            <div className='row'>
                <button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</button>
                <button className='danger' >Delete</button>
            </div>
        </div>
    )
}
