import React from 'react'
import './link.scss'

const Link = ({ label, onClick }) => {
    return (
        <p onClick={onClick} className='link'>{label}</p>

    )
}

export default Link
