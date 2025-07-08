import React, { useState } from 'react'
import LoginForm from './LoginForm'
import AddressForm from './AddressForm'
import OrderSummary from './OrderSummary'
import PaymentForm from './PaymentForm'

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment']

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <LoginForm />
      case 2: return <AddressForm />
      case 3: return <OrderSummary />
      case 4: return <PaymentForm />
      default: return null
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-body">
      <h2 className="text-h5 font-semibold mb-10 text-neutral-900">Checkout</h2>

      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between relative">
          {steps.map((step, index) => {
            const isCompleted = index + 1 < currentStep
            const isActive = index + 1 === currentStep

            return (
              <div key={index} className="flex-1 flex flex-col items-center relative z-10">
                {/* Line Connector */}
                {index !== 0 && (
                  <div className={`absolute top-4 -left-1/2 w-full h-1 transition-all duration-300 
                    ${isCompleted ? 'bg-primary-500' : 'bg-neutral-300'}`} />
                )}

                {/* Step Circle */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                  border-2 transition-all duration-300
                  ${isActive 
                    ? 'bg-primary-500 text-white border-primary-500' 
                    : isCompleted 
                      ? 'bg-white border-primary-500 text-primary-500' 
                      : 'bg-white border-neutral-400 text-neutral-600'
                  }
                  font-medium`}>
                  {index + 1}
                </div>

                {/* Step Label */}
                <p className={`mt-2 text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-500' 
                    : 'text-neutral-600'
                }`}>
                  {step}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Step Form */}
      <div className="mb-10">
        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        {currentStep > 1 ? (
          <button
            onClick={prevStep}
            className="px-6 py-2 border border-neutral-400 rounded-md text-sm hover:bg-neutral-200 transition"
          >
            Back
          </button>
        ) : <div />}

        {currentStep < steps.length && (
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm rounded-md transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default Checkout