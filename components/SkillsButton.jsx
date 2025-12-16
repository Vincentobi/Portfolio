import React from 'react'

const SkillsButton = ({children}) => {
  return (
    <span className='px-3 py-1 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default'>
        {children}
    </span>
  )
}

export default SkillsButton