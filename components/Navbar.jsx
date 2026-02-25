import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'


const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef(null)

    const openMenu = () => {
        if (sideMenuRef.current) sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        if (sideMenuRef.current) sideMenuRef.current.style.transform = 'translateX(0)'
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        // run once to set initial state
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>


            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 w-full z-50 glass-nav bg-white/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-slate-800 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Image src={isDarkMode ? assets.logo_dark : assets.logo_light} alt="logo" width={50} height={50} className='w-28 cursor-pointer mr-14' />
                        </div>
                        <div className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#top">Home</a>
                            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#about">About</a>
                            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#skills">Skills</a>
                            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#work">Work</a>
                            <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#contact">Contact</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle theme" className="hover:scale-110 transition-transform">
                                <Image loading='eager' src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="theme" className='w-6 cursor-pointer' />
                            </button>
                            <a className="hidden sm:flex items-center justify-center h-9 px-4 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20" href="#">
                                Resume
                            </a>
                        </div>
                        {/* Mobile Menu Button */}
                        <button onClick={openMenu} aria-label="Toggle menu" className="block md:hidden ml-3">
                            <Image loading='eager' src={isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className='w-6 cursor-pointer' />
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-primary-light dark:bg-primary-dark transition duration-500 dark:text-white overflow-hidden shadow-2xl">
                    <div onClick={closeMenu} className="absolute top-6 right-6 cursor-pointer">
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close" className='w-5' />
                    </div>
                    <li>
                        <a className='hover:underline transform transition-transform' onClick={closeMenu} href="#top">Home</a>
                    </li>
                    <li>
                        <a className='hover:underline transform transition-transform' onClick={closeMenu} href="#about">About</a>
                    </li>
                    <li>
                        <a className='hover:underline transform transition-transform' onClick={closeMenu} href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className='hover:underline transform transition-transform' onClick={closeMenu} href="#work">My Work</a>
                    </li>
                    <li>
                        <a className='hover:underline transform transition-transform' onClick={closeMenu} href="#contact">Contact me</a>
                    </li>
                </ul>
            </motion.nav>
        </>
    )
}

export default Navbar