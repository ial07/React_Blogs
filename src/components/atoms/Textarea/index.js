import React from 'react'
import './textarea.scss'

const Textarea = ({ ...rest }) => {
    return (
        <div >
            <textarea className='textarea' {...rest}>

            </textarea>
        </div >
    )
}

export default Textarea
