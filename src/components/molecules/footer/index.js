import React from 'react'
import { FB, IG, Logo } from '../../../assets'
import './footer.scss'

const Icon = ({ img }) => {
    return (
        <div className='sosmed'>
            <img className='icon-medsos' src={img} alt='ig' />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='logo'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='sosial-wrapper'>
                    <Icon img={FB} />
                    <Icon img={IG} />
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
