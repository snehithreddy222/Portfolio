import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-20 relative overflow-hidden'>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/50 to-primary-100/80 dark:via-primary-900/10 dark:to-primary-900/20 pointer-events-none" />

      <div className='relative z-10'>
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center py-12'
        >
          <motion.h6
            whileHover={{ scale: 1.05 }}
            className='gradient-text text-[32px] font-bold mx-auto mb-4 cursor-pointer inline-block'
          >
            Snehith Reddy.
          </motion.h6>

          <div className='w-max flex items-center gap-3 mx-auto mb-6 group'>
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="Email"
              className='w-6 group-hover:scale-110 transition-transform'
            />
            <a
              href="mailto:snehithreddy022@gmail.com"
              className='text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium'
            >
              snehithreddy022@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className='flex items-center justify-center gap-6 mt-8'>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/snehith-reddy-katkuri-98b274194/"
              className='w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-glow flex items-center justify-center border border-gray-200 dark:border-gray-700 group'
            >
              <svg className="w-5 h-5 text-primary-600 group-hover:text-primary-800 dark:text-primary-400 dark:group-hover:text-primary-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/snehithreddy222"
              className='w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-glow flex items-center justify-center border border-gray-200 dark:border-gray-700 group'
            >
              <svg className="w-5 h-5 text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/snehithreddy222"
              className='w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-glow flex items-center justify-center border border-gray-200 dark:border-gray-700 group'
            >
              <svg className="w-5 h-5 text-accent-600 group-hover:text-accent-800 dark:text-accent-400 dark:group-hover:text-accent-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className='text-center sm:flex items-center justify-between border-t-2 border-gray-300 dark:border-gray-700 mx-[10%] mt-8 py-8'>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='text-gray-600 dark:text-gray-400 font-medium'
          >
            © {currentYear} Snehith Reddy Katkuri. All rights reserved.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='flex items-center gap-8 justify-center mt-4 sm:mt-0'
          >
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/snehithreddy222"
                className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium'
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/snehith-reddy-katkuri-98b274194/"
                className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium'
              >
                Contact
              </a>
            </li>
          </motion.ul>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='text-center pb-8'
        >
          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="#top"
            className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white shadow-lg hover:shadow-glow mx-auto'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
          <p className='text-sm text-gray-500 dark:text-gray-500 mt-2'>Back to Top</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
