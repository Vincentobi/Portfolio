import React from 'react'

const ButtonBlue = ({ children, href, className = "" }) => {
  return (
    <a className={`inline-flex items-center justify-center h-9 px-4 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20 whitespace-nowrap ${className}`} href={href}>
      {children}
    </a>
  )
}

export default ButtonBlue