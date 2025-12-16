import React from 'react'
import { skillsData } from '@/assets/assets'
import SkillSet from './SkillSet'
import { motion } from 'motion/react'

const Skills = () => {
    return (
        <section className='py-24 relative overflow-hidden dark:bg-background-dark' id='skills'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-16'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Skills &amp; Technologies
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        My technical toolkit is diverse, allowing me to handle every step of the development process.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-8'
                >
                    {skillsData.map((skillData, index) => (
                        <SkillSet key={index} skillsData={skillData} />
                    ))}
                </motion.div>
            </div>

        </section>
    )
}

export default Skills