import React, { useState } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle payment form submission logic
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="cardNumber" className="block text-neutral-700 font-medium mb-2">Card Number</label>
        <input 
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <label htmlFor="expiryDate" className="block text-neutral-700 font-medium mb-2">Expiry Date</label>
        <input 
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <label htmlFor="cvv" className="block text-neutral-700 font-medium mb-2">CVV</label>
        <input 
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <PrimaryButton text="Complete Payment" onClick={handleSubmit} />
      </div>
    </form>
  )
}

export default PaymentForm
