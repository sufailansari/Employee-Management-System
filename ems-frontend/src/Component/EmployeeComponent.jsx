import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeComponent() {

  const[firstName,setFirstName]= useState('')
  const[lastName,setLastName]= useState('')
  const[email,setEmail]= useState('')
  const{employeeId}=useParams();
  const [error,setError]=useState({
    firstName:'',
    lastName:'',
    email:''
  })
  

  const navigator =  useNavigate();
  useEffect(()=>{

    if (employeeId) {
      getEmployee(employeeId).then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email)
      }).catch(error=>{
        console.error(error);
      })
    }
  },[employeeId])

  
  function saveOrUpdateEmployee(e){
    e.preventDefault();
    if(validateForm()){


      const employee ={firstName,lastName,email}
      console.log(employee);

      if (employeeId) {
        updateEmployee(employeeId,employee).then((response)=>{
          console.log(response.data);
          navigator('/employee');
        }).catch(error=>{
          console.error(error);
        })
      }else{
        createEmployee(employee).then((response) =>{
        console.log(response.data);
        navigator('/employee');
      
      }).catch(error=>{
          console.error(error);
        })
      }

      
    }
   
  }

  function validateForm(){
    let valid = true;

    const errorCopy = {... error}

    if(firstName.trim()){
      errorCopy.firstName ='';
    }else{
      errorCopy.firstName='first Name is required';
      valid=false;
    }

    if(lastName.trim()){
      errorCopy.lastName ='';
    }else{
      errorCopy.lastName='last Name is required';
      valid=false;
    }
  
    if(email.trim()){
      errorCopy.email ='';
    }else{
      errorCopy.email='Email is required';
      valid=false;
    }

    setError(errorCopy);
    return valid;
  }

  function pageTitle(){
    if (employeeId) {
      return <h2 className='text-center'>Update Employee</h2>
    }else{
      return <h2 className='text-center'>Add Employee</h2>
    }
  }



  return (
    <div className='container'>
      <br /> <br /> <br />
      <div  className='row'>
        <div className='card col-md-6 offset-md-3'>
          {pageTitle()}
          <div className='Card-body'>
            <form action="" onSubmit={saveOrUpdateEmployee}>
              <div className='form-group mb-2'>
                <label className='form-label'>First name</label>
                <input type="text"
                placeholder='Enter the employee first name'
                name='firstName'
                value={firstName}
                className={`form-control ${ error.firstName?'is-invalid':''}`}
                onChange={(e)=>setFirstName(e.target.value)}
                />
                { error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last name</label>
                <input type="text"
                placeholder='Enter the employee Last name'
                name='lastName'
                value={lastName}
                className={`form-control ${ error.lastName?'is-invalid':''}`}
                onChange={(e) =>setLastName(e.target.value)}
                />
                { error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
              </div>

               <div className='form-group mb-2'>
                <label className='form-label'>Email</label>
                <input type="text"
                placeholder='Enter the employee Email'
                name='email'
                value={email}
                className={`form-control ${ error.email? 'is-invalid':''}`}
                onChange={(e) => setEmail(e.target.value)}
                />
                { error.email && <div className='invalid-feedback'>{error.email}</div>}
              </div>

              <button type='submit' className='btn btn-success' >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent