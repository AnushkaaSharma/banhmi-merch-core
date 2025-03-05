import React from 'react'

const ProductCard = ({ title, image, price }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center overflow-hidden mt-10'>
      {/* Image Container with Background */}
      <div className=' bg-neutral-white flex justify-center items-center h-[400px] w-full p-4 border-r-0 transition-transform duration-300 ease-in-out hover:-translate-y-2'>
        <img className="object-contain w-full h-full" src={image} alt={title} />
      </div>

      {/* Text Content */}
      <div className='p-5 text-center font-body'>
        <h3 className="text-sm font-regular text-neutral-900 hover:underline">{title}</h3>
        <p className="text-primary-500 font-regular">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard