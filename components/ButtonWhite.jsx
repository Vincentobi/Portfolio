import React from 'react'

const ButtonWhite = ({ children, href, className = "" }) => {
  return (
    <a className={`inline-flex items-center justify-center h-9 px-4 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors text-slate-700 dark:text-white whitespace-nowrap ${className}`} href={href}>
      {children}
    </a>
  )
}

export default ButtonWhite