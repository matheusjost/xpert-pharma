import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ children, className = '', ...rest }) => (
  <button
    className={`bg-white hover:bg-teal-50 text-gray-700 py-3 px-4 rounded-md text-left border border-gray-300 flex justify-between items-center transition-colors ${className}`}
    {...rest}
  >
    {children}
  </button>
)

export default Button
