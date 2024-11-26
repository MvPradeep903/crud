import React, { useEffect, useState } from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom';

function EditForm() {
    
    var params = useParams();
    var navigate = useNavigate();
    var [initialValues,setInitialValues]=useState({ firstname:'',lastname:'',age:''});
     
    var validationSchema = Yup.object({
        firstname:Yup.string().min(3,"Minimum 3 Characters").required("Firstname is Required"),
        lastname:Yup.string().min(4,"Minimum 4 Characters").required("Lastname is Required"),
        age:Yup.number().required("Age is Required")
    })

    var onSubmit = (values)=>{
        console.log(values)
        fetch(`http://localhost:3001/Users/${params.id}`,{
            method:"PUT",
            headers:{ "Content-Type":"application/json" },
            body:JSON.stringify(values)
        })
        .then((res)=>{
            return res.json();
        })
        .then(()=>{ navigate("/table") })
    }

    useEffect(()=>{
        fetch(`http://localhost:3001/Users/${params.id}`)
        .then((res)=>{
            return res.json();
        })
        .then((dt)=>{
        console.log("useEffect",dt);
        setInitialValues(dt)
        })
    },[params.id])
  return (
    <div className='p-4 d-flex justify-content-center align-items-center flex-column'>
      <div className='border border-success p-5 rounded-2'>
            <h4>EDIT EMPLOYEE DATA</h4>
            <br />
            <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema} enableReinitialize>
                {
                    (empform)=>{
                        console.log(empform)
                    
                        return <Form>
                                <Field type="text" name="firstname" className={empform.touched.firstname && empform.errors.firstname ? 'form-control is-invalid' : empform.touched.firstname ? 'form-control is-valid' : 'form-control border border-primary'} placeholder="Enter FirstName"/>

                                <ErrorMessage name="firstname" component="div" className='text-danger'/>
                                <br />

                                <Field type="text" name="lastname" className={empform.touched.lastname && empform.errors.lastname ? 'form-control is-invalid' : empform.touched.lastname ? 'form-control is-valid' : 'form-control border border-primary'} placeholder="Enter  LastName"/>

                                <ErrorMessage name="lastname" component="div" className='text-danger'/>
                                <br />

                                <Field type="text" name="age" className={empform.touched.age && empform.errors.age ? 'form-control is-invalid' : empform.touched.age ? 'form-control is-valid' : 'form-control border border-primary'} placeholder="Enter Age"/>

                                <ErrorMessage name="age" component="div" className='text-danger'/>
                                <br />

                                <div className='d-flex justify-content-center'>
                                    <button className='btn btn-outline-success mt-1' type='submit' disabled={!empform.dirty || !empform.isValid}>Update</button>
                                </div>
                                
                            </Form>
                    }
                }
            </Formik>
      </div>
      {/* Table */}
    </div>
  )
}

export default EditForm
