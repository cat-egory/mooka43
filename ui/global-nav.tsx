'use client'

import { useState } from 'react'

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <div className='flex py-4 text-center text-3xl font-bold'>
      <div className='mx-auto'>MooKA</div>
    </div>
  )
}
