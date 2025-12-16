import React from 'react'
import Image from 'next/image'
import SkillsButton from './SkillsButton'
import { motion } from 'motion/react'

const SkillSet = ({ skillsData }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className='p-6 rounded-2xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700 shadow-xl dark:shadow-none hover:border-primary/50 transition-colors group'
        >
            <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center'>
                    <Image src={skillsData.code_icon} alt="" width={24} height={24} className='w-6 h-6' />
                </div>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>{skillsData.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skillsData.skills.map((skill, index) => (
                    <SkillsButton key={index}>{skill}</SkillsButton>
                ))}
            </div>
        </motion.div>
    )
}

export default SkillSet