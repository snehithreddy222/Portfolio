import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
  return (
    <div className='w-full px-[12%] py-20 scroll-mt-20' id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>
          What I Offer
        </h4>
        <h2 className='text-center text-5xl font-Ovo mb-4'>
          <span className="gradient-text">My Services</span>
        </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-400'>
          Comprehensive full-stack development services backed by 3 years of professional experience building scalable, secure, and high-performance applications
        </p>
      </motion.div>

      <div className='grid lg:grid-cols-3 grid-cols-auto gap-8 my-10'>
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className='group relative bg-white dark:bg-gray-900/80 border-2 border-gray-200 dark:border-gray-800 rounded-2xl px-8 py-12 cursor-pointer hover:shadow-glow hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 overflow-hidden'
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/50 dark:from-primary-900/20 dark:via-transparent dark:to-accent-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <Image src={icon} alt={title} className='w-12 h-12' />
              </motion.div>

              <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:gradient-text transition-all'>
                {title}
              </h3>

              <p className='text-sm text-gray-600 dark:text-gray-400 leading-6'>
                {description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-16"
      >
        <p className="text-gray-600 dark:text-gray-400 mb-6 font-Ovo">
          Interested in working together?
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-primary text-white rounded-full font-medium shadow-lg hover:shadow-glow transition-all"
        >
          Let's Build Something Amazing
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Services
