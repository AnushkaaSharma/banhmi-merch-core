import React from 'react'

const PrimaryButton = ({text, onClick, className, type="button"}) => {
  return (
    <button type={type}
        onClick={onClick}
        className={`py-3 px-6 rounded-full text-neutral-100 bg-primary-500 text-center hover:bg-primary-600 hover:outline-none text-p font-regular font-body ${className}`}>
        {text}
    </button>
  )
}

export default PrimaryButton