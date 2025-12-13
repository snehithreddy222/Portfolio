import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import DarkModeToggle from './popup';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translate(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translate(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (

        <>

            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="" className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
         ${isScroll ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-800/50" : ""}`}>
                <a href="#top" className="hover:scale-105 transition-transform">
                    <h6 className='text-[28px] font-bold gradient-text'>Snehith Reddy.</h6>
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-medium transition-all duration-300
            ${isScroll ? "bg-gray-50/50 dark:bg-gray-800/50" : "bg-white/50 dark:bg-gray-900/50 shadow-md border border-gray-200/50 dark:border-gray-700/50"}`}>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' href="#top">Home</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' href="#about">About me</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' href="#skills">Skills</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' href="#experience">Experience</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' href="#services">Services</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' href="#work">My Work</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' href="#contact">Contact</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <DarkModeToggle />
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full bg-gradient-primary text-white font-medium shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300'>
                        Contact
                        <Image src={assets.right_arrow_white} className='w-3' alt="" />
                    </a>
                    <button className='block md:hidden hover:scale-110 transition-transform' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/*--------------Mobile Menu-------*/}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
         bg-gradient-to-b from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 transition duration-500 dark:text-white shadow-2xl'>
                    <div className='absolute right-6 top-6 hover:scale-110 transition-transform' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='cursor-pointer w-5' />
                    </div>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' onClick={closeMenu} href="#skills">Skills</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' onClick={closeMenu} href="#experience">Experience</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo hover:text-primary-600 dark:hover:text-primary-400 transition-colors' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
