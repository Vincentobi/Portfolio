import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <p className="text-slate-500 text-sm">© {year} Obiora Vincent. All rights reserved.</p>
            </div>
        </motion.footer>
    )
}

export default Footer