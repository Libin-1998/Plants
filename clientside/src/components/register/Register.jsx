import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {

  const navigate=useNavigate()
  const[data,Setdata]=useState({})
  
  const dataChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    Setdata({...data,[name]:value})
  }
  console.log(data);
  
const handleSubmit=(event)=>{
event.preventDefault()
axios.post('http://localhost:1001/api/auths/register',data)
.then((response)=>{
  console.log(response);
toast.success(response.data.message)

  setTimeout(() => {
  navigate('/login')
  }, 2000);
  
})
.catch((error)=>{
  console.log(error);
  
})
}


  return (
    <>
    <div className='registerpage'>
      <ToastContainer/>
<div class="registerform">
      <div class="registertitle">Welcome</div>
      <div class="registersubtitle">Let's create your account!</div>

      <div class="registerinput-container registeric1">
        <input placeholder="" type="text" class="registerinput" id="name" onChange={dataChange} name='name'/>
        <div class="registercut"></div>
        <label class="registeriLabel" for="name">Name</label>
      </div>

      <div class="registerinput-container registeric2">
        <input placeholder="" type="text" class="registerinput" id="lastname" onChange={dataChange} name='phone'/>
        <div class="registercut"></div>
        <label class="registeriLabel" for="lastname">Phone</label>
      </div>
      <div class="registerinput-container registeric2">
        <input placeholder="" type="text" class="registerinput" id="email" onChange={dataChange} name='email'/>
        <div class="registercut registercut-short"></div>
        <label class="registeriLabel" for="email">Email</label>
      </div>
      <div class="registerinput-container registeric2">
        <input placeholder="" type="password" class="registerinput" id="password" onChange={dataChange} name='password'/>
        <div class="registercut registercut-short"></div>
        <label class="registeriLabel" for="password">Password</label>
      </div>
      <button class="registersubmit" type="text" onClick={handleSubmit}>Register</button>
    <p style={{color:'white'}}>Already Have an Acoount ? SIGN IN</p>

    </div>
    </div>
      
    </>
  )
}
