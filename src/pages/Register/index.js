import React from 'react'
import { useHistory } from 'react-router'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'

const Register = () => {
    const history = useHistory()
    return (
        <div className='main-page'>
            <div className='kiri'>
                <img src={RegisterBg} alt='register' className='bg-img' />
            </div>
            <div className='kanan'>
                <p className='title'>Register</p>
                <Input label='Nama Lengkap' placeholder='Masukan Nama Lengkap' />
                <Gap height={15} />
                <Input label='Email' placeholder='Masukan Email' />
                <Gap height={15} />
                <Input label='Password' placeholder='Masukan Password' />
                <Gap height={50} />
                <Button label='Save' onClick={() => history.push('/login')} />
                <Gap height={80} />
                <Link label='Back' onClick={() => history.push('/login')} />
            </div>
        </div>
    )
}

export default Register
