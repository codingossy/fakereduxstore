import React from 'react'

const Product = ( { item } ) => {
  return (
    <div className='w-full text-black'>
        <div>
            <img src={`${item.image}`} alt="" />
            <div>
                <h1>{item.title}</h1>
                <h4>{item.price}</h4>

                <button>buy now</button>
            </div>
        </div>
    </div>
  )
}

export default Product