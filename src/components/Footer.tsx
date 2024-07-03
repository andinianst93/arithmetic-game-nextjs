import React from 'react'
export default function Footer() {
  return (
    <footer className='border-t border-zinc-200 dark:border-zinc-800 p-4'>
      <div className='flex justify-center items-center'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Andini&apos;s Arithmetic Game. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
