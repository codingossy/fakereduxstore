import React from 'react'
import loader from '../../assets/Ghost.gif'

const Loader = () => {
  return (
    <div className='py-32 px-0 flex items-center justify-center'>
      <img src={loader} alt="" className='w-32'/>
    </div>
  )
}

export default Loader