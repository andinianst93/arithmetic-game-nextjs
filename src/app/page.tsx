import React from 'react'
import FormContainer from '@/components/FormContainer'
import ChooseLevel from '@/components/ChooseLevel'
export default function Homepage() {
  return (
    <section>
      <FormContainer>
        <h1 className='text-center font-semibold text-2xl mb-4'>Welcome to Arithmetic Game!</h1>
        <p className='leading-7 mb-8 text-center'>The Arithmetic Game challenges you to solve as many arithmetic problems as possible within a two-minute timeframe, making it a high-speed drill.
        </p>
        <ChooseLevel />
      </FormContainer>
    </section>
  )
}
