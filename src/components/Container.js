import React from 'react'

export default function Container(props) {
    return (
        <div className='col-6 col-s-12'>
            {props.children}
        </div>
    )
}
