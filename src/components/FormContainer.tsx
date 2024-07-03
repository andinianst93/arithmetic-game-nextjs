import React from 'react'

export default function FormContainer({children}: {children: React.ReactNode}) {
  return (
    <div className='mt-6'>
      <div className='max-w-2xl mx-auto p-4'>{children}</div>
    </div>
  )
}
