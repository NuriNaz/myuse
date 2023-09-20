import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const[tabledark,setTabledark]=useState(false);
  const [checked, setChecked] = useState(false); 
  const getData = async () => {
    await axios
      .get("https://65095fb2f6553137159b4d14.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  };
  const handleDelete=async(id)=>{
    await axios.delete(`https://65095fb2f6553137159b4d14.mockapi.io/crud/${id}`)
    .then(()=>{
        getData();
    })

  }
  const setToLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);

  }

  const handleChange =(e)=>{
    console.log(e.target.checked)
    if(e.target.checked === true){
      setTabledark(true)
    }else{
      setTabledark(false
        )
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"
 onChange={handleChange} />
</div>
      <div className='d-flex justify-content-between m-2'>
            <h2>Read</h2>
            <Link to='/'>
            <button className='btn btn-secondary'>create</button>
            </Link>
            </div>
      <table style={{background:tabledark? "#000":"#fff"}} >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <> 
             <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to='/update'>
                    <button className="button-success" onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email)}
                    >Edit{" "}</button>
                    </Link>
                  </td>
                  <td>
                    <button className="button-danger" onClick={()=>handleDelete(eachData.id)}>Delete{""}</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      </>
    
  );
};

export default Read;
