import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function LoginView() {
    const [username, SetUsername] = useState('');
    const [pass, SetPass] = useState('');
    const [users, setUsers] = useState('');
    let navigate = useNavigate();

    const getUsers = () => {
        setUsers(JSON.stringify(localStorage.getItem('users')));
        console.log(users);
    }
    const handleUsernameChange = (e) => {
        SetUsername(e.target.value)
    }

    const handlePassChange = (e) => {
        SetPass(e.target.value)
    }

    const handleLogin = () => {
        getUsers();
        console.log('handle login :' + username + 'da');
        if (username === 'admin' && pass === 'admin') {
            localStorage.setItem('user', '1');
            navigate('/');
        }
    }

    return (
        <div className='App'>
            <div className='form-input'>
                <h2>Login</h2>
                <h3>Username</h3><input type="text" onChange={(e) => handleUsernameChange(e)} />
                <h3>Password</h3><input type="text" onChange={(e) => handlePassChange(e)} />
                <h3><input type='submit' value='Login' onClick={() => handleLogin()} /></h3>
            </div>
        </div>
    )
}
