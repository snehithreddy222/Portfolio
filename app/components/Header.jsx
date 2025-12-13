import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative'>

      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-72 h-72 bg-success-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Profile Image with Glow Effect */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-40 animate-pulse-slow" />
        <Image
          src={assets.profile_img}
          alt="Snehith Reddy Katkuri"
          className='rounded-full w-32 relative z-10 border-4 border-white dark:border-gray-800 shadow-glow'
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        Hi! I'm <span className="gradient-text font-bold">Snehith Reddy Katkuri</span>
        <motion.span
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <Image src={assets.hand_icon} alt="" className='w-6' />
        </motion.span>
      </motion.h3>

      {/* Main Title with Gradient */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo font-bold'
      >
        <span className="gradient-text">Full Stack Developer</span>
        <br />
        <span className="text-gray-700 dark:text-gray-300">based in Chicago, USA</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg leading-relaxed"
      >
        <span className="font-semibold text-primary-600 dark:text-primary-400">Master's Graduate</span> in Computer Information Technology with <span className="font-semibold text-primary-600 dark:text-primary-400">3 years of professional experience</span> across
        <span className="font-semibold"> Varmodel AI</span>,
        <span className="font-semibold"> Treevah</span>, and
        <span className="font-semibold"> Virtusa</span>.
        Specialized in React, Vue, Node.js, Django, and Cloud Architecture.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex gap-4 mt-2"
      >
        <a
          href="https://www.linkedin.com/in/snehith-reddy-katkuri-98b274194/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-glow flex items-center justify-center transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
        >
          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://github.com/snehithreddy222"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-glow flex items-center justify-center transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
        >
          <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a
          href="mailto:snehithreddy022@gmail.com"
          className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-glow flex items-center justify-center transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
        >
          <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </motion.div>

      {/* CTA Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        <motion.a
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(102, 126, 234, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          href='#contact'
          className='gap-2 px-10 py-3 rounded-full bg-gradient-primary text-white flex items-center font-medium shadow-lg hover-lift border-0'
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className='w-4' />
        </motion.a>

        <motion.a
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href='/Snehith_reddy_FullStack_Intern_Resume.pdf'
          download
          className='gap-2 px-10 py-3 rounded-full border-2 border-primary-500 dark:border-primary-400 flex items-center bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 font-medium hover-lift'
        >
          My Resume
          <Image src={assets.download_icon} alt="" className='w-4' />
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-gradient-primary rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Header
