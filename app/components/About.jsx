import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
    return (
        <div id="about" className='w-full px-[12%] py-20 scroll-mt-20'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>
                    Introduction
                </h4>
                <h2 className='text-center text-5xl font-Ovo mb-4'>
                    <span className="gradient-text">About me</span>
                </h2>
            </motion.div>

            <div className='flex w-full flex-col lg:flex-row items-start gap-16 lg:gap-20 my-20'>

                {/* Profile Image - Left Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='w-full lg:w-80 flex-shrink-0 mx-auto lg:mx-0'
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                        <Image
                            src={assets.user_image1}
                            alt="Snehith Reddy"
                            className="w-full rounded-3xl relative z-10 border-4 border-white dark:border-gray-800 shadow-xl"
                        />
                    </div>
                </motion.div>

                {/* Content - Right Side */}
                <div className='flex-1 w-full'>
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='mb-10'
                    >
                        <p className='font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4'>
                            I am <span className="font-semibold gradient-text">Snehith Reddy Katkuri</span>, a passionate Full Stack Developer with <span className="font-semibold text-primary-600 dark:text-primary-400">3 years of professional experience</span> building secure, scalable, and high-performance web applications across startup and enterprise environments.
                        </p>
                        <p className='font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4'>
                            I recently <span className="font-semibold text-success-600 dark:text-success-400">completed my Master's in Computer Information Technology from Elmhurst University, Chicago</span>, where I deepened my expertise in advanced software engineering, cloud architecture, and full-stack development.
                        </p>
                        <p className='font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4'>
                            My technical foundation is built on <span className="font-semibold">React, Vue.js, Next.js, Node.js, Django, PostgreSQL, MongoDB, Redis, Docker, and modern CI/CD pipelines</span>. I specialize in crafting seamless user experiences, architecting robust backend systems, and deploying production-ready applications to cloud platforms like Azure and DigitalOcean.
                        </p>
                        <p className='font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4'>
                            Throughout my career, I've contributed to impactful projects at <span className="font-semibold gradient-text-accent">Varmodel AI</span> (building social platforms with Vue 3 and Django REST), <span className="font-semibold gradient-text-accent">Treevah</span> (developing enterprise file management with React and Azure), and <span className="font-semibold gradient-text-accent">Virtusa</span> (delivering critical solutions for British Telecommunications).
                        </p>
                        <p className='font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                            I'm driven by the challenge of solving complex technical problems, optimizing system performance, and creating digital products that make a real difference. Let's build something amazing together!
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Info Cards - Full Width Below, Starting from Left */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='flex flex-wrap gap-5 mb-12'
            >
                {infoList.map(({ icon, iconDark, title, description }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.03 }}
                        className='group relative bg-white dark:bg-gray-900 
                                   border-2 border-gray-200 dark:border-gray-800 
                                   rounded-2xl p-6 cursor-pointer 
                                   hover:shadow-xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/30
                                   hover:border-primary-400 dark:hover:border-primary-500 
                                   transition-all duration-300 overflow-hidden
                                   w-full sm:w-[calc(33.333%-14px)] min-w-[200px]'
                    >
                        {/* Gradient background on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 dark:from-primary-900/10 dark:to-accent-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30">
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 h-7' />
                            </div>
                            <h3 className='text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:gradient-text transition-all'>
                                {title}
                            </h3>
                            <p className='text-gray-600 text-sm dark:text-gray-400 leading-relaxed'>
                                {description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Tools Section - Full Width, Starting from Left */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h4 className='text-2xl font-bold text-gray-800 font-Ovo dark:text-white mb-6'>
                    Tools & Technologies I use
                </h4>
                <div className='flex flex-wrap gap-4'>
                    {toolsData.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                            whileHover={{ scale: 1.1, y: -4 }}
                            className='group flex items-center justify-center w-16 h-16
                                       bg-white dark:bg-gray-900 
                                       border-2 border-gray-200 dark:border-gray-800 
                                       rounded-xl cursor-pointer 
                                       hover:border-primary-400 dark:hover:border-primary-500 
                                       hover:shadow-lg hover:shadow-primary-500/20 dark:hover:shadow-primary-500/30
                                       transition-all duration-300
                                       p-3'
                        >
                            <Image
                                src={tool}
                                alt="technology"
                                className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default About
