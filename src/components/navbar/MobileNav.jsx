import React from 'react'
import './Header.css'
import {IoClose} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const MobileNav = ( {setNavMobile }) => {

  const { carts } = useSelector((state) => state.items);

  return (
    <nav className='lg:hidden bg-black text-gray-300 w-full h-full'>
      
      <IoClose onClick={()=> setNavMobile(false)} className='text-3xl absolute right-6 top-6 cursor-pointer ' />

      <ul className='flex flex-col justify-center space-y-8 h-full items-center capitalize font-secondary'>
          <li className='text-2xl'>home</li>
          <li className='text-2xl'>home</li>
          <Link to={"/cart"}>
          <li className="rounded-md bg-blue-500 py-2 px-5 capitalize text-white">
            cart: <span>{carts.length}</span>
          </li>
        </Link>
        </ul> 


    </nav>
  )
}

export default MobileNav