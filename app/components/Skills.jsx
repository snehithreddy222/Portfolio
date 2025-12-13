import React from 'react'
import { motion } from "motion/react"

const Skills = ({ isDarkMode }) => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: "💻",
            skills: [
                { name: "React", level: 90, color: "from-blue-400 to-blue-600" },
                { name: "Next.js", level: 85, color: "from-gray-700 to-black" },
                { name: "Vue 3", level: 85, color: "from-green-400 to-green-600" },
                { name: "Nuxt 3", level: 80, color: "from-green-500 to-emerald-600" },
                { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
                { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-600" },
                { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-cyan-600" },
                { name: "Material UI", level: 85, color: "from-blue-400 to-indigo-600" },
                { name: "Redux", level: 82, color: "from-purple-500 to-purple-700" },
                { name: "Pinia", level: 80, color: "from-yellow-500 to-orange-500" },
            ]
        },
        {
            title: "Backend Development",
            icon: "⚙️",
            skills: [
                { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
                { name: "Express", level: 88, color: "from-gray-600 to-gray-800" },
                { name: "Django", level: 85, color: "from-green-600 to-green-800" },
                { name: "Django REST", level: 85, color: "from-red-500 to-red-700" },
                { name: "REST APIs", level: 92, color: "from-orange-400 to-orange-600" },
                { name: "GraphQL", level: 75, color: "from-pink-500 to-pink-700" },
                { name: "WebSockets", level: 78, color: "from-purple-400 to-purple-600" },
                { name: "JWT", level: 88, color: "from-indigo-500 to-indigo-700" },
                { name: "OAuth", level: 85, color: "from-blue-500 to-blue-700" },
            ]
        },
        {
            title: "Databases & Data",
            icon: "🗄️",
            skills: [
                { name: "PostgreSQL", level: 88, color: "from-blue-600 to-blue-800" },
                { name: "MongoDB", level: 85, color: "from-green-500 to-green-700" },
                { name: "Oracle SQL", level: 82, color: "from-red-600 to-red-800" },
                { name: "Redis", level: 80, color: "from-red-500 to-red-700" },
                { name: "Prisma", level: 78, color: "from-indigo-400 to-indigo-600" },
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: "☁️",
            skills: [
                { name: "Docker", level: 88, color: "from-blue-400 to-blue-600" },
                { name: "Docker Compose", level: 85, color: "from-blue-500 to-blue-700" },
                { name: "Nginx", level: 80, color: "from-green-500 to-green-700" },
                { name: "GitLab CI/CD", level: 85, color: "from-orange-500 to-orange-700" },
                { name: "GitHub Actions", level: 85, color: "from-gray-700 to-black" },
                { name: "Azure DevOps", level: 78, color: "from-blue-500 to-blue-700" },
                { name: "Azure App Service", level: 75, color: "from-blue-400 to-blue-600" },
                { name: "Azure Blob Storage", level: 75, color: "from-cyan-500 to-cyan-700" },
                { name: "Azure AD B2C", level: 80, color: "from-indigo-500 to-indigo-700" },
            ]
        },
        {
            title: "Testing & Tools",
            icon: "🧪",
            skills: [
                { name: "Jest", level: 80, color: "from-red-600 to-red-800" },
                { name: "Postman", level: 90, color: "from-orange-500 to-orange-700" },
                { name: "Swagger", level: 82, color: "from-green-500 to-green-700" },
                { name: "Git", level: 92, color: "from-orange-600 to-red-600" },
                { name: "Jira", level: 85, color: "from-blue-500 to-blue-700" },
                { name: "Linux", level: 80, color: "from-yellow-600 to-orange-600" },
            ]
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <div className='w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-900/10' id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>
                    Technical Expertise
                </h4>
                <h2 className='text-center text-5xl font-Ovo mb-4'>
                    <span className="gradient-text">My Skills</span>
                </h2>
                <p className='text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-400'>
                    A comprehensive toolkit of modern technologies and frameworks, honed through 3 years of professional experience
                </p>
            </motion.div>

            <div className='space-y-12'>
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={categoryIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        className='bg-white dark:bg-gray-900/50 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-glow transition-all duration-300'
                    >
                        <h3 className='text-2xl font-semibold mb-6 flex items-center gap-3'>
                            <span className="text-3xl">{category.icon}</span>
                            <span className="gradient-text">{category.title}</span>
                        </h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                        >
                            {category.skills.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    variants={itemVariants}
                                    className='group'
                                >
                                    {/* Skill Card */}
                                    <div className='relative p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover-lift'>
                                        <div className='flex justify-between items-center mb-3'>
                                            <span className='font-medium text-gray-800 dark:text-gray-200'>
                                                {skill.name}
                                            </span>
                                            <span className='text-sm font-semibold text-primary-600 dark:text-primary-400'>
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className='w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: skillIndex * 0.05, ease: "easeOut" }}
                                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                            >
                                                <div className='absolute inset-0 bg-white/30 animate-shimmer'
                                                    style={{
                                                        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                                        backgroundSize: '200% 100%'
                                                    }}
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className='absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16'
            >
                {[
                    { number: "40+", label: "Technologies" },
                    { number: "3+", label: "Years Experience" },
                    { number: "10+", label: "Projects Delivered" },
                    { number: "5+", label: "Tech Stacks" },
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className='text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-800'
                    >
                        <div className='text-4xl font-bold gradient-text mb-2'>{stat.number}</div>
                        <div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills
