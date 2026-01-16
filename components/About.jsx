import { aboutData, assets } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'
import IconMapper from './IconMapper'

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-24 bg-white dark:bg-[#15202b]"
            id="about"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 flex justify-center md:justify-end"
                    >
                        <div className="relative">
                            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl relative z-10 group">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-20"></div>
                                <div
                                    className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                                    data-alt="Professional headshot of a developer smiling"
                                    style={{ backgroundImage: `url(${assets.profileImg.src})` }}
                                ></div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 opacity-30 pattern-dots z-0 grid grid-cols-6 gap-2">
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                                <div className="w-1 h-1 rounded-full bg-primary"></div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3 flex flex-col gap-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{aboutData.title}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            {aboutData.para1}
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            {aboutData.para2}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                                <IconMapper iconName='location_on' className='text-primary' />
                                <span className="text-slate-700 dark:text-slate-300">{aboutData.location}</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                                <IconMapper iconName='language' className='text-primary' />
                                <span className="text-slate-700 dark:text-slate-300">{aboutData.languages}</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                                <IconMapper iconName='school' className='text-primary' />
                                <span className="text-slate-700 dark:text-slate-300">{aboutData.degree}</span>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                                <IconMapper iconName='mail' className='text-primary' />
                                <span className="text-slate-700 dark:text-slate-300">{aboutData.mailAdress}</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default About