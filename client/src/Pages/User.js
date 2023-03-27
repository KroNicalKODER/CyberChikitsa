import React from 'react'
import Sidepane from '../components/User/Sidepane'
import { Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='min-h-screen bg-bg-violet'>
        <Sidepane/>
    </div>
  )
}

export default User