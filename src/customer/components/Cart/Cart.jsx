import React from 'react'
import CartItem from '../Cart/CartItem'
import Button from '../Buttons/TextOnlyButton'

const Cart = () => {
  const cartItems = [1, 2, 3] // dummy items
  const itemPrice = 12
  const subtotal = itemPrice * cartItems.length
  const shipping = 5
  const total = subtotal + shipping

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

      <div className="lg:flex lg:space-x-10">
        {/* Cart Items */}
        <div className="lg:w-2/3 space-y-6">
          {cartItems.map((_, index) => (
            <CartItem key={index} />
          ))}
        </div>

        {/* Price Details */}
        <div className="lg:w-1/3 mt-10 lg:mt-0">
          <div className="bg-white shadow-md rounded-md p-6 space-y-4">
            <h3 className="text-xl font-semibold">Price Details</h3>
            <div className="flex justify-between text-gray-700">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Button
              text="Proceed to Checkout"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart