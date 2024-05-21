import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='max-w-7xl mx-auto flex items-center justify-between p-5'>
        <div>
            <h1 className='text-2xl font-semibold px-3 py-2 bg-slate-700 text-white rounded-md'>Logo</h1>
        </div>
        <ul className='flex items-center justify-between '>
          <Link href='' className='font-semibold text-slate-800 me-6'>Register</Link>
          <Link href='' className='font-semibold text-white bg-blue-500 rounded-md px-3 py-2'>Login</Link>
        </ul>
    </header>
  )
}
