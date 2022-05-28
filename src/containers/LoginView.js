import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function LoginView() {
    const [username, SetUsername] = useState('');
    const [pass, SetPass] = useState('');

    let navigate = useNavigate();
    const handleUsernameChange = (e) => {
        SetUsername(e.target.value)
    }

    const handlePassChange = (e) => {
        SetPass(e.target.value)
    }

    const hanldeLogin = () => {
        console.log('handle login :' + username+ 'da');
        if(username === 'admin' && pass === 'admin') {
            localStorage.setItem('user', '1');
            navigate('/');
        }
    }

    return (
        <div className='App'>
            <h3>Username</h3><input type="text" onChange={(e) => handleUsernameChange(e)} />
            <h3>Password</h3><input type="text" onChange={(e) => handlePassChange(e)} />
            <h3><button onClick={() => hanldeLogin()}>Login</button></h3>
        </div>
    )
}
