import React, { useState } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

const AddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle address form submission
    onSubmit() // Proceed to next step in checkout
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="address" className="block text-neutral-700 font-medium mb-2">Address</label>
        <input 
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-neutral-700 font-medium mb-2">City</label>
        <input 
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <label htmlFor="zipCode" className="block text-neutral-700 font-medium mb-2">Zip Code</label>
        <input 
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />
      </div>

      <div>
        <PrimaryButton text="Continue to Order Summary" onClick={handleSubmit} />
      </div>
    </form>
  )
}

export default AddressForm
