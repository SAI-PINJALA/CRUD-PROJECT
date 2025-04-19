import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  let [content, setContent] = useState([])
  let [flag, setFlag]=useState(false)

  useEffect(() => {
    axios.get("http://localhost:5000/employees")
      .then((result) => { setContent(result.data); setFlag(true) })
      .catch(() => { console.log("failed to fetch data"); })
  }, [flag])

let deleteuser=(id)=>{
  axios.delete(`http://localhost:5000/employees/${id}`)
  setFlag(false)
}

  return (
    <div className='h-[100%] w-[100%] bg-black flex justify-evenly items-center flex-wrap'>
      {content.map((Users) => {
        return (
          <div key={Users.id} className='h-[270px] w-[250px] border-[1px] rounded-xl shadow-red-400 shadow-md'>
            <table className='text-white'>
              <tr>
                <td className='p-[20px]'>NAME</td>
                <td className='p-[20px]'>{Users.empName}</td>
              </tr>

              <tr>
                <td className='p-[20px]'>SALARY</td>
                <td className='p-[20px]'>{Users.empSalary}</td>
              </tr>

              <tr>
                <td className='p-[20px]'>COMPANY</td>
                <td className='p-[20px]'>{Users.empCompany}</td>
              </tr>

              <tr>
                <td className='p-[20px]'><button className='h-[30px] w-[70px] border-[1px] rounded-full text-[12px] shadow-md hover:shadow-white'><Link to={`/edit/${Users.id}`}>EDIT</Link></button></td>
                <td className='p-[20px]'><button className='h-[30px] w-[70px] border-[1px] rounded-full text-[12px] shadow-md hover:shadow-white'onClick={()=>{deleteuser(Users.id)}}>DELETE</button></td>
              </tr>


            </table>

          </div>
        )
      })}

    </div>
  )
}

export default Users