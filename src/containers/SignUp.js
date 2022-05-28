import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import '../App.css';

export default function SignUp() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const [lists, setLists] = useState([]);
  const onSubmit = data => console.log(data);

  const handleAccoutAdd = (data) => {
    setData(JSON.stringify(data));
    setLists([...lists, data ]);
    localStorage.setItem('users',JSON.stringify(lists));
    const List = JSON.parse(localStorage.getItem('users'));
    console.log(List);
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit((data) => handleAccoutAdd(data))} >
        <input {...register("UserName", { pattern: /^(?=.*[a-z])[A-Za-z\d]{3,15}$/ })} placeholder="User name" />
        {errors?.Username?.type === "pattern" && (
          <p>UserName Minimum 3 characters and maximum 15 characters, at least one lowercase letter,</p>
        )}
        <br></br><input {...register("Password", { pattern: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{3,15}$/ })} placeholder="Password" />
        {errors?.Password?.type === "pattern" && (
          <p>Password Minimum 3 characters and maximum 15 characters, at least one lowercase letter, one number</p>
        )}
        <br></br>
        <input type="submit" />
        <p>{data}</p>
      </form>
    </div>
  )
}
