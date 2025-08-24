import { useState } from 'react'

const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    toggle,
    open,
    close
  }
}

export default useToggle