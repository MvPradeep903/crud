import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
function Employee() {
    var navigate = useNavigate();
     var initialValues={ firstname:'',lastname:'',age:''};
     
     
     var validationSchema = Yup.object({
        firstname:Yup.string().min(3,"Minimum 3 Characters").required("Firstname is Required"),
        lastname:Yup.string().min(4,"Minimum 4 Characters").required("Lastname is Required"),
        age:Yup.number().required("Age is Required")
     })
    var [empdata,setEmpData] = useState([]);
    var [curdata,setCurData] = useState({id:"",firstname:"",lastname:"",age:""})
    var [successMessage,setSuccessMessage] = useState(false);


    var onSubmit = (values,{resetForm})=>{
        setEmpData([...empdata,values]);
        resetForm();
        setSuccessMessage(true);
        setTimeout(()=>setSuccessMessage(false),3000);
        fetch("http://localhost:3001/Users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(values)
        }).then((res)=>{
            return res.json()
        })
        .then((nuser)=>{
            setEmpData(prevData => [...prevData,nuser]);
            setCurData({id:"",firstname:"",lastname:"",age:""})
        });
        navigate("/table");
        //navigate("/table",{table:{empdata}});
    };

// console.log("qwer",empdata)
    
    
  return (
    <div className='p-4 d-flex justify-content-center align-items-center flex-column'>
      <div className='border border-warning p-5 rounded-2'>
            <h4>EMPLOYEE REGISTRATION</h4>
            <br />
            <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
                {
                    (empform)=>{
                        console.log(empform)
                        console.log(empdata)
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
                                    <button className='btn btn-outline-success mt-1' type='submit' disabled={!empform.dirty || !empform.isValid}>Register</button>
                                </div>
                                {
                                    successMessage && (<div className='text-success d-flex justify-content-center'>Registerd Successfully</div>)
                                }
                            </Form>
                    }
                }
            </Formik>
      </div>
      {/* Table */}
    </div>
  )
}

export default Employee
// <div className='p-4'>
{/* <h4 className='d-flex justify-content-center'>EMPLOYEE DETAILS</h4>
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
        empdata.map((d,i)=>{
            return <tr key={i}>
                    <td>{d.firstname}</td>
                    <td>{d.lastname}</td>
                    <td>{d.age}</td>
                    <td>
                        {/* <Link className='btn btn-primary mx-1' to={`edit/${i}`}>Edit</Link> */}
                        //<button className='btn btn-danger' onClick={()=>{handleDlt(i)}}>Delete</button>
         //           </td>
     //           </tr>
   //     })
  //  }
//</tbody>
//</table>
//</div> */}