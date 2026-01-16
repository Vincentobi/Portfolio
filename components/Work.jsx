import React from 'react'
import { projectData } from '../assets/assets'
import ButtonBlue from './ButtonBlue'
import ButtonWhite from './ButtonWhite'
import { motion } from 'motion/react'
import IconMapper from './IconMapper'

const Work = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#15202b] relative" id="work">
            <div className="absolute inset-0 bg-slate-50 dark:bg-background-dark skew-y-1 transform origin-bottom-left -z-10 h-full"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-4">
                            My Portfolio
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            A curated selection of my work where I solve real-world problems. Each project represents a unique challenge and solution.
                        </p>
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary text-slate-700 dark:text-white hover:text-primary font-bold transition-all" href="https://github.com/Vincentobi" target='_blank' rel="noopener noreferrer"
                    >
                        View GitHub <IconMapper iconName="arrow_outward" />
                    </motion.a>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } }
                    }}
                    className="flex flex-col gap-20"
                >
                    {projectData.map((project, index) => (
                        <motion.article
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                            }}
                            className="group relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                        >
                            <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-surface-dark aspect-16/10 border border-slate-200 dark:border-slate-700 group-hover:border-primary/50 transition-colors duration-500 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                                <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${project.img.src})` }}>
                                </div>
                            </div>
                            <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-primary font-bold tracking-wider text-sm uppercase">{project.type}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                                    <span className="text-slate-500 dark:text-slate-400 text-sm">{project.year}</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    {project.para}
                                </p>
                                <div className="flex gap-4">
                                    {project.buttons.map((btn, btnIndex) => (
                                        btn.variant === "Blue" ? (
                                            <ButtonBlue className="group-hover:text-primary cursor-pointer transition-colors" key={btnIndex} href={btn.link}>
                                                {btn.text} <IconMapper iconName={btn.icon} className="text-lg" />
                                            </ButtonBlue>
                                        ) : (
                                            <ButtonWhite className="group-hover:text-primary cursor-pointer transition-colors" key={btnIndex} href={btn.link}>
                                                {btn.text} <IconMapper iconName={btn.icon} className="text-lg" />
                                            </ButtonWhite>
                                        )
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
                <div className="mt-16 text-center">
                    <a className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium" href="https://github.com/Vincentobi" target="_blank" rel="noopener noreferrer">
                        See all projects on GitHub <IconMapper iconName="arrow_forward" className="text-sm" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Work