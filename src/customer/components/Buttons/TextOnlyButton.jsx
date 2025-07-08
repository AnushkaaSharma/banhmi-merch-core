import React from 'react'

const TextOnlyButton = ({text, onClick, className='', type="button"}) => {
  return (
    <button type={type}
        onClick={onClick}
        className={`py-3 px-6 text-primary-500 text-uppercase text-center hover:outline-none text-p font-regular font-body ${className}`}>
        {text}
    </button>
  )
}

export default TextOnlyButton