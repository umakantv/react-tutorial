import React, { useState } from 'react'

export default function Form({initial = '', onSubmit}) {

    const [title, setTitle] = useState(initial)

    const submit = (e) => {
        e.preventDefault()
        onSubmit({ title })
        setTitle('')
    }
    
    return (
        <form className='row' onSubmit={submit}>
            <div className='stretch'>
                <input placeholder='Buy Groceries' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <button type='submit' disabled={!title}>Submit</button>
            </div>
        </form>
    )
}
