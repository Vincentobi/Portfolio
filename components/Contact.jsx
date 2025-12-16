import React, { useState } from 'react'
import { aboutData } from '../assets/assets';
import { motion } from 'motion/react'

const Contact = () => {

    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        if (res.ok) {
            alert('Message sent successfully!')
            e.target.reset()
        } else {
            alert('Something went wrong')
        }
        setLoading(false)
    }


    return (
        <section className="py-24 relative dark:bg-surface-dark" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">Let&apos;s work together.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                            Have a project in mind or just want to say hi? I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <div className="space-y-6">
                            <a className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700 hover:border-primary transition-colors group" href={`mailto:${aboutData.mailAdress}`}>
                                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Me</p>
                                    <p className="text-lg font-bold text-slate-900 dark:text-white">{aboutData.mailAdress}</p>
                                </div>
                            </a>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700">
                                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
                                    <span className="material-symbols-outlined">share</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Follow Me</p>
                                    <div className="flex gap-4">
                                        <a className="text-slate-400 hover:text-primary transition-colors font-semibold" href="#">LinkedIn</a>
                                        <a className="text-slate-400 hover:text-primary transition-colors font-semibold" href="#">GitHub</a>
                                        <a className="text-slate-400 hover:text-primary transition-colors font-semibold" href="#">Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">Name</label>
                                    <input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white" id="name" name="name" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email</label>
                                    <input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white" id="email" name="email" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="subject">Subject</label>
                                <input className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white" id="subject" name="subject" placeholder="Project Inquiry" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-900 dark:text-white resize-none" id="message" name="message" placeholder="Tell me about your project..." rows="4"></textarea>
                            </div>
                            <button className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-2 cursor-pointer" type="submit">
                                Send Message
                                <span className="material-symbols-outlined text-sm">send</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact