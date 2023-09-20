import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  const[id,setId]=useState(0);
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    

  },[])
 const handleUpdate=async(e)=>{
  e.preventDefault();
  try{
    const result=await axios.put(`https://65095fb2f6553137159b4d14.mockapi.io/crud/${id}`,{
      name:name,
      email:email

    })
    navigate('/read');
    if(result.status===200){
      console.log("updated");
    }
  }catch(err){
    console.log("error")

  }
  

 }
  return (
    <>
    <h2>update</h2>
    <form 
    onSubmit={handleUpdate}
    >
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control"
    value={name} 
    onChange={(e)=>setName(e.target.value)}
     />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  aria-describedby='emailHelp'
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  
  
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"> Update</button>
  <Link to='/read'>
  <button  className="btn btn-secondary"> Back</button>
  </Link>

</form>
    
    </>
    
  )
}

export default Update;
