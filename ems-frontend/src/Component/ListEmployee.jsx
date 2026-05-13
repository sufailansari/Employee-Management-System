import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../service/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployee = () => {
   const [employee,setEmployees] = useState([])

   const navigator = useNavigate();

   useEffect(()=>{
   getAllEmployee();

   },[])

   function getAllEmployee(){
     listEmployees().then((response)=>
    {
        setEmployees(response.data);
    }).catch(error =>{
        console.error(error)
    })

   }

   function addNewEmployee()
   {
    navigator('/add-employee')
   }

   function updateEmployee(employeeId){
    navigator(`/edit-employee/${employeeId}`)
    }

    function removedEmployee(employeeId){
        console.log(employeeId);
        
        deleteEmployee(employeeId).then((response)=>{
            getAllEmployee();
        }).catch(error=>{
            console.error(error);
        })
    }

  return (
    <>
    <div className='container'>
        <h1 className='text-center' >list of Employees</h1>  
        <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
    <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                employee.map(employee=>
                    <tr key={employee.employeeId}>
                        <td>{employee.employeeId}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=>updateEmployee(employee.employeeId)}>Update</button>
                            <button className='btn btn-danger' onClick={()=> removedEmployee(employee.employeeId)} 
                                style={{marginLeft:'10px'}}>Delete</button>
                        </td>

                    </tr>
                )
            }
        </tbody>
    </table>
    </div>
    
    </>

  );
}

export default ListEmployee
