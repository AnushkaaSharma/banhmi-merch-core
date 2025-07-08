import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

const OrderSummary = ({ onSubmit }) => {
  return (
    <div className="space-y-6">
      <div className="text-neutral-800">
        <h3 className="text-h5 font-medium mb-4">Order Summary</h3>
        {/* Sample items and prices */}
        <ul>
          <li className="flex justify-between mb-2">
            <span>Sriracha Sauce</span>
            <span>$12.00</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$5.00</span>
          </li>
          <li className="flex justify-between mb-4 font-semibold">
            <span>Total</span>
            <span>$17.00</span>
          </li>
        </ul>
      </div>

      <div>
        <PrimaryButton text="Proceed to Payment" onClick={onSubmit} />
      </div>
    </div>
  )
}

export default OrderSummary