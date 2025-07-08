import React from 'react'
import sriracha from '../../../assets/images/product-sriracha.png'
import Button from '../Buttons/TextOnlyButton'

const CartItem = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-5 shadow-sm rounded-md bg-white">
      {/* Image + Info */}
      <div className="flex items-center gap-5 w-full lg:w-auto">
        <div className="w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
          <img src={sriracha} alt="Sriracha" className="w-full h-full object-cover rounded-md" />
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-lg">Sriracha</p>
          <p className="text-sm text-gray-500">Hot chili sauce, 17oz bottle</p>
          <p className="text-xl font-bold text-gray-900 mt-2">$12.00</p>
        </div>
      </div>

      {/* Quantity + Remove */}
      <div className="flex items-center justify-between w-full lg:w-auto gap-4">
        <div className="flex items-center border rounded-md px-2 py-1">
          <button className="p-1 text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="px-3 text-sm">1</span>
          <button className="p-1 text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <Button text="Remove" className="text-red-500 hover:text-red-700 text-sm" />
      </div>
    </div>
  )
}

export default CartItem