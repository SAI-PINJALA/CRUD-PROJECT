import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");

  let navigate = useNavigate()

  let formHandle = (e) => {
    e.preventDefault()

    let payload = {
      empName: name,
      empSalary: salary,
      empCompany: company
    }
    axios.post("http://localhost:5000/employees", payload)
      .then(() => { console.log("data stored successfully"); navigate("/Users") })
      .catch(() => {console.log("failed to store data")})

  }


  return (
    <div className='h-[90vh] w-[100%] bg-gray-600 flex justify-center items-center' >
      <form className='h-[300px] w-[350px] border-[1px] shadow-lg rounded-lg flex justify-evenly items-center flex-col'>
        
      <h1 className='text-white underline'>CREATE USER</h1>

        <input type="text" value={name}    onChange={(e)=>{setName(e.target.value)}} className='h-[40px] w-[300px] bg-black border-[1px] p-[10px] text-white text-center rounded-full ' placeholder='ENTER YOUR NAME' />
        <input type="text" value={salary}  onChange={(e)=>{setSalary(e.target.value)}} className='h-[40px] w-[300px] bg-black border-[1px] p-[10px] text-white text-center rounded-full ' placeholder='ENTER YOUR SALARY' />
        <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}} className='h-[40px] w-[300px] bg-black border-[1px] p-[10px] text-white text-center rounded-full ' placeholder='ENTER YOUR COMPANY' />
        <button onClick={formHandle} className='h-[40px] w-[100px] bg-black border-[1px] text-white rounded-full'>SUBMIT</button>

      </form>

    </div>
  )
}

export default CreateUser