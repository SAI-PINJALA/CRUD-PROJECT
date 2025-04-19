import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-[80px] w-[100%] bg-black flex justify-evenly items-center'>
        <Link to="/" className='text-white'>CREATE-USER</Link>
        <Link to="/users" className='text-white'>USERS</Link>

    </div>
  )
}

export default Home