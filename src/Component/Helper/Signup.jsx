import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [user,setuser] = useState({name:"",phone:"",password:""})
    const navigate = useNavigate();

    const server = 'http://localhost:5000'
    const submit=async()=>{

      const response = await fetch(`${server}/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();
            console.log(result);

            navigate('/home'); 
    }
    const handlechange=(e)=>{
        // console.log(e.target.value);
        setuser((prev)=>{
            const state = {...prev,[e.target.name] : e.target.value}
            return state;
        })
    }
  return (
    <>
    <Navbar/>
       <div className='main'>
          <div className='box'>
             <div className=''> Signup</div>                
                                                             { /*"name": "vishwjee1",
                                                            "phone":"99909302",
                                                            "password":"12345",
                                                            "location":"bhopal" */ }
            Name :        <input onChange={handlechange} name='name'    value={user.name} type="text" />
            phone :       <input onChange={handlechange} name='phone'   value={user.phone} type="text" />
            password :    <input onChange={handlechange} name='password'value={user.password} type="text" />
 
            submit <button onClick={submit}> submit</button>
          </div>

       </div>
    
    </>
    
  )
}

export default Signup