import React from 'react'
import { useHistory } from 'react-router'
import './header.scss'

const Header = () => {
    const history = useHistory()
    return (
        <div className='header'>
            <p className='logo'>Mern Blog</p>
            <div className='menu-item'>
                <p >Contact Me</p>
                <p onClick={() => history.push('/login')}>LogOut</p>
            </div>
        </div>
    )
}

export default Header
