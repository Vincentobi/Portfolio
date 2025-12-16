import React from 'react'
import ButtonBlue from './ButtonBlue'
import ButtonWhite from './ButtonWhite'
import { motion } from 'motion/react'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-40 pb-24 bg-background-light dark:bg-background-dark overflow-x-hidden transition-colors duration-900 ease-in-out" id="home">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 flex flex-col gap-6 text-center lg:text-left z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                            className="inline-flex items-center justify-center lg:justify-start gap-2 text-primary font-semibold tracking-wide uppercase text-sm"
                        >
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Fullstack Developer
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white"
                        >
                            Building <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">scalable</span> web experiences.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Hello, I&apos;m <span className="text-slate-900 dark:text-white font-semibold">Obiora Vincent</span>. I specialize in building robust backends and intuitive frontends, turning complex problems into elegant solutions.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                            className="flex gap-4 justify-center lg:justify-start pt-4"
                        >
                            <ButtonBlue href="#work">View My Work</ButtonBlue>
                            <ButtonWhite href="#contact">Contact Me</ButtonWhite>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                            className="flex gap-8 justify-center lg:justify-start mt-10 pt-8 border-t border-slate-200 dark:border-slate-800/50"
                        >
                            <div>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">3+</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Years Exp.</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">15+</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Projects</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">10+</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Clients</p>
                            </div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex-1 relative w-full max-w-[500px] lg:max-w-full"
                    >
                        <div className="relative z-10 p-4 bg-surface/90 backdrop-blur rounded-lg border border-slate-700 shadow-xl">
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent opacity-60"></div>
                            <div className="flex gap-1.5 mb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-1 font-mono text-xs text-slate-300">
                                <p><span className="text-primary">const</span> developer = {'{'}</p>
                                <p className="pl-4">name: <span className="text-green-400">&apos;Obiora&apos;</span>,</p>
                                <p className="pl-4">role: <span className="text-green-400">&apos;Fullstack Dev&apos;</span>,</p>
                                <p className="pl-4">status: <span className="text-blue-400">true</span></p>
                                <p>{'}'}</p>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/30 -z-10"></div>
                    </motion.div>
                </div>
            </div>
            <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors animate-bounce" href="#about"
            >
                <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </motion.a>
        </section>
    )
}

export default Hero