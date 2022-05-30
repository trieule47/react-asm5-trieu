import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import '../App.css';

export default function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const [lists, setLists] = useState([]);
  const navigate = useNavigate();
  const onSubmit = data => console.log(data);

  const handleAccoutAdd = (data) => {
    setData(JSON.stringify(data));
    console.log(data);
    setLists([...lists, data]);
    console.log(lists);
    localStorage.setItem('users',JSON.parse(lists));
    const List = JSON.parse(localStorage.getItem('users'));
    console.log(List);
    navigate('/');
  }

  return (
    <div className='App'>
      <div className='form-input'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit((data) => handleAccoutAdd(data))} >
          <input {...register("UserName", { pattern: /^(?=.*[a-z])[A-Za-z\d]{3,15}$/ })} placeholder="User name" />
          {errors?.UserName?.type === "pattern" && (
            <p>Password Minimum 3 characters and maximum 15 characters, at least one lowercase letter</p>
          )}
          <br></br><input {...register("Password", { pattern: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{3,15}$/ })} placeholder="Password" />
          {errors?.Password?.type === "pattern" && (
            <p>Password Minimum 3 characters and maximum 15 characters, at least one lowercase letter, one number</p>
          )}
          <br></br>
          <input type="submit" />
        </form>
        <p>{data}</p>
        <input onClick={()=> navigate('/')} type="submit" value="login" />
      </div>
    </div>
  )
}
