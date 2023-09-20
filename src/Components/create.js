import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const history=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("clicked");
        if(!name){
            alert("Name is Required")
        }
        else if(!email){
            alert("Email is Required")
        }
        else{
        try{
        const result = await axios.post('https://65095fb2f6553137159b4d14.mockapi.io/crud',{
            name:name,
            email:email,
        }, {headers:{
            "Content-Type":"application/json"
        }})
        history('/read');
        
        
        if(result.status === 200){
            console.log(result.data, "Hello this is form Data")
        }
       
        
    }catch(err){
        console.log(err, "Hi Error Here")
    }}

    }
  return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <h2>create</h2>
    <Link to='/read'>
    <button className='btn btn-primary'>show data</button>
    </Link>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby='emailHelp'onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  
  
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </>
  )
}

export default Create;
