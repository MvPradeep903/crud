import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
function Students () {
  var [data,setData] = useState([
    { firstname: 'Srikanth', lastname: 'Minde', age: 24 },
    { firstname: 'Bharath', lastname: 'Reddy', age: 23 }
  ]); 
  function handleDel(i){
    var temp = [...data];
    temp.splice(i,1)
    setData([...temp])
  } 
  var studentForm = useFormik({
                        initialValues : {
                            firstname:'',
                            lastname:'',
                            age:''
                        },
                        validationSchema:Yup.object({
                            firstname:Yup.string().min(3,"Minimum 3 Characters").required("Firstname is Required"),
                            lastname:Yup.string().max(8,"Maximum 8 Characters").required("Lastname is required"),
                            age:Yup.number().required("Age is Mandatory")
                        }),
                        onSubmit:(values,{resetForm})=>{
                            setData([...data,values])
                            console.log(values)
                            resetForm();
                        }
                    }) 
                    console.log(studentForm) 
                    console.log(data)
  return (
    <div className='d-flex justify-content-center'>
        <div className='p-4'>
            <h4>Student Registration</h4>
            <form onSubmit={studentForm.handleSubmit}>
                
                <input type="text" name='firstname' {...studentForm.getFieldProps('firstname')} className= {studentForm.errors.firstname ? "form-control is-invalid" : "form-control border border-info"}/>
                <br />
                {
                    studentForm.touched.firstname && (<div>{studentForm.errors.firstname}</div>)
                }
                <input type="text" name='lastname' {...studentForm.getFieldProps('lastname')} className= {studentForm.errors.lastname ? "form-control is-invalid" : "form-control border border-info"}/>
                <br />
                {
                    studentForm.touched.lastname && (<div>{studentForm.errors.lastname}</div>)
                }
                <input type="text" name='age' {...studentForm.getFieldProps('age')} className= {studentForm.errors.age ? "form-control is-invalid" : "form-control border border-info"}/>
                <br />
                {
                    studentForm.touched.age && (<div>{studentForm.errors.age}</div>)
                }
                <button className='btn btn-outline-success mt-1' disabled={!studentForm.dirty || !studentForm.isValid}>Register</button>
            </form>
        </div>
            <div className='p-4'>
                <h3 className='d-flex justify-content-center'>Students Details</h3>
                <table className='table table-bordered border border-dark'>
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
                        data.map((d,i)=>{
                            return <tr key={i}>
                                    <td>{d.firstname}</td>
                                    <td>{d.lastname}</td>
                                    <td>{d.age}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-1' state={d} to={`edit/${i}`}>Edit</Link>
                                        <button className='btn btn-danger' onClick={()=>{handleDel(i)}}>Delete</button>
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

export default Students
