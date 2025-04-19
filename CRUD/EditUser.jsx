import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  let obj = useParams()
  let navigate = useNavigate()
  console.log(obj);

  let [name, setName] = useState("")
  let [salary, setSalary] = useState("")
  let [company, setCompany] = useState("")


  useEffect(() => {
    axios.get(`http://localhost:5000/employees/${obj.abc}`)
      .then((resp) => {
        setName(resp.data.empName)
        setSalary(resp.data.empSalary)
        setCompany(resp.data.empCompany)

          ;
      })
      .catch(() => { console.log("didnt get the data"); })

  }, [])

  let formHandle = (z) => {
    z.preventDefault()

    let payload = {
      empName: name,
      empSalary: salary,
      empCompany: company
    }

    axios.put(`http://localhost:5000/employees/${obj.abc}`, payload)
      .then(() => { console.log("updated"); navigate("/Users") })
      .catch(() => {console.log("NOT UPDATED")})
  }



  return (
    <div className='h-[90vh] w-[100%] bg-gray-600 flex justify-center items-center' >
      <form className='h-[300px] w-[350px] border-[1px] shadow-lg rounded-lg flex justify-evenly items-center flex-col'>

        <h1 className='text-white underline'>EDIT USER</h1>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className='h-[40px] w-[300px] bg-black border-[1px] p-[10px] text-white text-center rounded-full ' placeholder='ENTER YOUR NAME' />
        <input type="text" value={salary} onChange={(e) => { setSalary(e.target.value) }} className='h-[40px] w-[300px] bg-black border-[1px] p-[10px] text-white text-center rounded-full ' placeholder='ENTER YOUR SALARY' />
        <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} className='h-[40px] w-[300px] bg-black border-[1px] p-[10px] text-white text-center rounded-full ' placeholder='ENTER YOUR COMPANY' />
        <button className='h-[40px] w-[100px] bg-black border-[1px] text-white rounded-full' onClick={formHandle}>UPDATE</button>

      </form>

    </div>
  )
}

export default EditUser