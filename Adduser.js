import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    let navigate = useNavigate()
    const[user,setUser] = useState({
        name: "",
        mail:""

    })

    const{name,mail} = user

    const handleChange = (e) =>{
        setUser({...user,[e.target.name] : e.target.value})


    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        await axios.post('http://localhost:8080/user',user)
        navigate('/')

    }



    return (
        <div className='formC'>
            <form onSubmit={submitHandler} className='forms'>
                <input onChange={handleChange} value={name} type='name' name='name' placeholder='enter your name'></input>
                <input onChange={handleChange} value={mail} type='email' name='mail' placeholder='enter your mail'></input>
                <button type='submit'>submit</button>


            </form>
        </div>
    );
};

export default Adduser;