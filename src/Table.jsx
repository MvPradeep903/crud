import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Table() {
    var [dt,setDt] = useState([]);
    var navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:3001/Users")
        .then((res)=>{
            return res.json();
        })
        .then((dt)=>{
        console.log(dt);
        setDt([...dt]);
        })
    },[])
    console.log("get",dt)
    function handleDlt(id){
        fetch(`http://localhost:3001/Users/${id}`,{
            method:"DELETE"
        }).then((res)=>{
            if(res.ok){
                setDt(dt.filter((d) => { return d.id !== id}));
            }
        })
    }
  return (
    <div className='p-4'>
        <div className='p-4'>
                <h4 className='d-flex justify-content-center'>EMPLOYEE DETAILS</h4>
                <table className='table table-bordered border border-dark w-50 container text-center'>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dt.map((d,i)=>{
                            console.log("data",d)
                            return <tr key={i}>
                                    <td>{d.firstname}</td>
                                    <td>{d.lastname}</td>
                                    <td>{d.age}</td>
                                    <td>
                                        {/* <Link className='btn btn-primary mx-1' to={`edit/${i}`}>Edit</Link> */}
                                        <button className='btn btn-warning mx-1' onClick={()=>{navigate(`/editform/${d.id}`)}}><i class="bi bi-pencil-square"></i></button>
                                        <button className='btn btn-danger' onClick={()=>{handleDlt(d.id)}}><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                        })
                    }
                </tbody>
                </table>
        </div> 
    </div>
  )
}

export default Table
