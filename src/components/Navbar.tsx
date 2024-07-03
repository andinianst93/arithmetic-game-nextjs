import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='border-b border-zinc-200 dark:border-zinc-800'>
      <nav className='flex items-center justify-between container p-4'>
        <div>
          <h1 className='text-2xl font-extrabold uppercase'><Link href={'/'}>Arithmetic Game</Link> </h1>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
