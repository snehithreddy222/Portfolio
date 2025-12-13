import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Experience = ({ isDarkMode }) => {
    const experiences = [
        {
            company: "Varmodel AI",
            role: "Software Engineer",
            duration: "Sept 2025 - Present",
            location: "Remote, United States",
            type: "Full-time",
            logo: assets.varmodel,
            achievements: [
                "Built end-to-end features for startup social platform using Vue 3, Nuxt 3, Pinia, and Tailwind CSS",
                "Designed Django REST APIs with PostgreSQL and Redis for low-latency social feeds",
                "Integrated Google and LinkedIn OAuth using OpenID Connect and python-social-auth",
                "Dockerized full stack and deployed via GitLab CI/CD to DigitalOcean with Nginx + SSL",
                "Debugged production issues across Docker networking, Redis caching, and database migrations"
            ],
            techStack: ["Vue 3", "Nuxt 3", "Django REST", "PostgreSQL", "Redis", "Docker", "GitLab CI/CD", "Nginx"]
        },
        {
            company: "Treevah",
            role: "Software Engineer Intern",
            duration: "May 2025 - Present",
            location: "Chicago, IL",
            type: "Internship",
            logo: assets.treevah,
            achievements: [
                "Developed Node.js and Express backend with Azure AD B2C and Microsoft OAuth 2.0 authentication",
                "Implemented refresh token and session management using Redis with PostgreSQL data layer",
                "Built React features for file management integrated with Azure Blob Storage and OneDrive",
                "Created Docker images and supported Azure App Services deployments",
                "Built CI/CD pipelines using GitHub Actions and Azure DevOps for automated workflows"
            ],
            techStack: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Azure AD B2C", "Azure Blob Storage", "Docker"]
        },
        {
            company: "Virtusa (Client: BT)",
            role: "Full Stack Developer",
            duration: "July 2021 - Dec 2023",
            location: "Chennai, India",
            type: "Full-time",
            logo: assets.bt_logo,
            achievements: [
                "Built secure internal web application using React, Next.js, TypeScript, and Material UI",
                "Implemented RESTful APIs with Node.js and Express using JWT and OAuth authentication",
                "Optimized Oracle SQL and MongoDB database queries for improved performance",
                "Delivered real-time dashboards and analytics modules in Agile Scrum environment",
                "Automated testing and multi-environment deployments using GitLab CI/CD"
            ],
            techStack: ["React", "Next.js", "Node.js", "Oracle SQL", "MongoDB", "Material UI", "GitLab CI/CD"]
        }
    ]

    return (
        <div className='w-full px-[12%] py-20 scroll-mt-20' id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>
                    Professional Journey
                </h4>
                <h2 className='text-center text-5xl font-Ovo mb-4'>
                    <span className="gradient-text">Work Experience</span>
                </h2>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-400'>
                    3 years of full-stack development across innovative startups and enterprise environments
                </p>
            </motion.div>

            {/* Experience Cards - Simple Professional Layout */}
            <div className='max-w-4xl mx-auto space-y-8'>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className='bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 
                         hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 overflow-hidden'
                        >
                            {/* Card Header */}
                            <div className={`p-6 ${index === 0 ? 'bg-gradient-to-r from-primary-50 to-white dark:from-primary-950/50 dark:to-gray-900' :
                                    index === 1 ? 'bg-gradient-to-r from-accent-50 to-white dark:from-accent-950/50 dark:to-gray-900' :
                                        'bg-gradient-to-r from-success-50 to-white dark:from-success-950/50 dark:to-gray-900'
                                }`}>
                                <div className='flex items-start gap-5'>
                                    {/* Company Logo */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl ${index === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
                                                index === 1 ? 'bg-gradient-to-br from-accent-500 to-accent-600' :
                                                    'bg-gradient-to-br from-success-500 to-success-600'
                                            } p-0.5 flex-shrink-0 shadow-lg`}
                                    >
                                        <div className='w-full h-full bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center p-2'>
                                            <Image
                                                src={exp.logo}
                                                alt={exp.company}
                                                width={56}
                                                height={56}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Title & Meta */}
                                    <div className='flex-1 min-w-0'>
                                        <h3 className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white'>{exp.role}</h3>
                                        <p className='text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400 mt-0.5'>{exp.company}</p>

                                        {/* Meta Tags */}
                                        <div className='flex flex-wrap gap-2 mt-3'>
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${index === 0 ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300' :
                                                    index === 1 ? 'bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-300' :
                                                        'bg-success-100 dark:bg-success-900/40 text-success-700 dark:text-success-300'
                                                }`}>
                                                <span className='w-1.5 h-1.5 rounded-full bg-current' />
                                                {exp.duration}
                                            </span>
                                            <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'>
                                                {exp.location}
                                            </span>
                                            <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'>
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className='p-6 pt-4'>
                                {/* Achievements */}
                                <div className='mb-5'>
                                    <h5 className='text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3'>
                                        Key Achievements
                                    </h5>
                                    <ul className='space-y-2'>
                                        {exp.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                                className='flex items-start gap-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300'
                                            >
                                                <svg className={`w-4 h-4 mt-1 flex-shrink-0 ${index === 0 ? 'text-primary-500' :
                                                        index === 1 ? 'text-accent-500' :
                                                            'text-success-500'
                                                    }`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h5 className='text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3'>
                                        Technologies
                                    </h5>
                                    <div className='flex flex-wrap gap-2'>
                                        {exp.techStack.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.2, delay: i * 0.03 }}
                                                whileHover={{ scale: 1.05 }}
                                                className='px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                                   rounded-lg text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700
                                   hover:border-gray-300 dark:hover:border-gray-600 transition-colors'
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience
