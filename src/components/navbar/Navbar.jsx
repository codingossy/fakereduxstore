import React from 'react'
import './Header.css'


const Navbar = () => {
  return (
    <nav className='capitalize hidden lg:flex'>
    <ul className='flex items-center space-x-12'>
      <li className='nav-link'>home</li>
      <li className='nav-link'>shop</li>
      <li className='bg-blue-500 text-white rounded-md py-2 px-5 capitalize'>cart: <span>0</span></li>

    </ul> 
</nav>
  )
}

export default Navbar