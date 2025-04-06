import React from 'react'

export default function FullContainer({children, className}) {
  return (
    <div className={`w-full h-screen ${className}`}>
      {children}
    </div>
  )
}
