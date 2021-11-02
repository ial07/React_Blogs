import React from 'react'
import { useHistory } from 'react-router'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

const Login = () => {
    const history = useHistory()
    return (
        <div className='main-page'>
            <div className='kiri'>
                <img src={LoginBg} alt='Login' className='bg-img' />
            </div>
            <div className='kanan'>
                <p className='title'>Login</p>
                <Input label='Email' placeholder='Masukan Email' />
                <Gap height={15} />
                <Input label='Password' placeholder='Masukan Password' />
                <Gap height={50} />
                <Button label='Save' onClick={() => history.push('/')} />
                <Gap height={80} />
                <Link label='New in Blog, Please Register!' onClick={() => history.push('/register')} />
            </div>
        </div>
    )
}

export default Login
