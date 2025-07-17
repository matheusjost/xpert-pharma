import React from 'react'

// @typescript-eslint/no-explicit-any
const Card: React.FC<{ children: any; className?: string }> = ({
  children,
  className = ''
}) => (
  <div className={`bg-white p-6 rounded-lg shadow-sm mb-6 ${className}`}>
    {children}
  </div>
)

export default Card
