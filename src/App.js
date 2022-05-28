import React from 'react';
import { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './contants/routes';
import TodoList from './containers/TodoList';
import LoginView from './containers/LoginView';
import PrivateRoute from './conponents/privateRoute';
import AuthRoute from './conponents/authRoute';
import SignUp from './containers/SignUp';

function App() {
  const [user, setUser] = useState('');

  useEffect(
    () => {
      setUser(localStorage.getItem('user'));
    },[user]
  )

  const reSetUser = () => {
    setUser(null);
    localStorage.setItem('user',null);
  }

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={
          <PrivateRoute>
            <button onClick={() => reSetUser()} >Log out</button>
            <TodoList />
          </PrivateRoute>
        } />
        <Route exact path='/signup' element={
            <SignUp />
        } />
        <Route exact path='/login' element={
          <AuthRoute>
            <LoginView />
          </AuthRoute>
        } />
      </Routes>
    </div>
  );
}


export default App;