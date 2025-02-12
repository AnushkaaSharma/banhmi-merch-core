import React from 'react'

const HomeSectionCard = ({title, description, image, price}) => {
  return (
    <div>
      <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden w-[16rem] mx-3'>
        <div className='h-[13rem]'>
            <img className="object-cover object-top w-full h-full" 
            src={image} alt={title} />
        </div>

        <div className='p-4'>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
            <p>{price}</p>
        </div>
      </div>
    </div>

    
  )
}

export default HomeSectionCard