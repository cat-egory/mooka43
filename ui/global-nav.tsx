'use client'

import { useState } from 'react'

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return <div>global</div>
}
