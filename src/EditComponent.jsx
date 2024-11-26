import { useFormik } from 'formik'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import * as Yup from 'yup';
function EditComponent() {
    var a = useLocation();
    console.log(a)
    var {id} = useParams();
    var studentInd = parseInt(id);

    var editForm = useFormik({
        initialValues:{
            firstname:a.state.firstname,
            lastname:a.state.lastname,
            age:a.state.age
        },
        validationSchema:Yup.object({
            firstname:Yup.string().min(3,"Minimum 3 Characters").required("Firstname is Required"),
            lastname:Yup.string().max(8,"Maximum 8 Characters"),
            age:Yup.number().required("Age is Mandatory")
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div className='p-4'>
      <h1>Edit Component</h1>
      <form onSubmit={editForm.handleSubmit}>
        <input type="text" name='firstname' onChange={editForm.handleChange} onBlur={editForm.handleBlur}/>
        <br />
        <input type="text" name='lastname' onChange={editForm.handleChange} onBlur={editForm.handleBlur}/>
        <br />
        <input type="text" name='age' onChange={editForm.handleChange} onBlur={editForm.handleBlur}/>
        <br />
        <button className='btn btn-warning mt-1'>Update</button>
      </form>
    </div>
  )
}

export default EditComponent
