import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`max-w-[800px] mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}
