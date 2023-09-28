import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    
        const[user,setUser] = useState([])

        const loadUsers = async () =>{
        const getUrl = await axios.get('http://localhost:8080/userGet') 
        setUser(getUrl.data)
        console.log(getUrl.data)
        }

        useEffect(() => {
            loadUsers()
        },[])
        
        







    return (
        <div>
             {
                user.map((item,index) => <div key={index}>
                    <h2>{item.name}</h2>
                    <h2>{item.mail}</h2>
                </div>)
             }





        </div>
    );
};

export default Home;