import React, { useState } from 'react'

const Login=()=> {
    const [name,setName]= useState("");
    const [pass, setPass]= useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
     console.log(name);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>LOGIN HERE</h1>
            <div className='login'>
                <div className='field'>
                    <label>Login ID: </label>
                    <input type='text' name='username' placeholder='Username or Email' value={name} onChange={(e) =>setName(e.target.value)} />
                </div>
                <div className='field'>
                    <label>Password: </label>
                    <input type='password' name='password' placeholder='**********' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                </div>
                <button className='button' type='submit'>SUBMIT</button>
            </div>
        </form>
    </div>
  )
}

export default Login