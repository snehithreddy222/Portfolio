import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  const professionalProjects = [
    {
      title: "Startup Social Platform – Full-Stack Delivery",
      company: "Varmodel AI",
      duration: "Sept 2025 – Present",
      location: "Remote, USA",
      description: [
        "Built end-to-end features with Vue 3 (Nuxt 3), Pinia, Tailwind, and TypeScript",
        "Designed Django REST APIs, PostgreSQL schemas, and Redis caching for low-latency feeds",
        "Implemented Google/LinkedIn OAuth (OpenID Connect) and secure token flows",
        "Dockerized services and shipped via GitLab CI/CD to DigitalOcean + Nginx (QAT/Staging/Prod)"
      ],
      techStack: [
        "Vue 3", "Nuxt 3", "Pinia", "Tailwind", "TypeScript",
        "Django REST", "PostgreSQL", "Redis",
        "Docker", "GitLab CI/CD", "DigitalOcean", "Nginx", "OAuth"
      ],
      image: assets.varmodel
    },
    {
      title: "Smart File Management Platform",
      company: "Treevah",
      duration: "May 2025 – Present",
      location: "Remote, USA",
      description: [
        "Developed React front-end modules: auth flows, file/folder CRUD, persona-based sandbox",
        "Built Node.js/Express APIs with PostgreSQL + Redis for fast indexing and access control",
        "Integrated Azure AD B2C/B2B; added guest restrictions with upgrade prompts to marketing site",
        "Automated Azure App Service deployments via GitHub Actions; tuned performance and DX"
      ],
      techStack: [
        "React", "TypeScript", "Tailwind", "Node.js", "Express",
        "PostgreSQL", "Redis", "Azure App Services",
        "GitHub Actions", "Azure AD B2C/B2B"
      ],
      image: assets.treevah
    },
    {
      title: "Enterprise Web Application (Client: BT)",
      company: "Virtusa",
      duration: "Jul 2021 – Dec 2023",
      location: "Chennai, India",
      description: [
        "Built responsive UI with React/Next.js + Material UI; modular components and forms",
        "Developed Node.js/Express APIs; improved response times with efficient data flows",
        "Delivered data-driven dashboards/analytics; collaborated in Agile sprints and code reviews",
        "Enabled automated multi-env deployments using GitLab CI/CD"
      ],
      techStack: [
        "React", "Next.js", "TypeScript", "Material UI",
        "Node.js", "Express.js", "Oracle DB", "MongoDB", "GitLab CI/CD"
      ],
      image: assets.bt_web_app
    }
  ]

  const personalProjects = workData.filter(project => project.type === "personal")

  return (
    <div className='w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent via-accent-50/20 to-transparent dark:via-accent-900/5' id="work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400'>
          My Portfolio
        </h4>
        <h2 className='text-center text-5xl font-Ovo mb-4'>
          <span className="gradient-text">My Projects</span>
        </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-600 dark:text-gray-400'>
          Explore a collection of projects showcasing my expertise in full-stack development across professional and personal work
        </p>
      </motion.div>

      {/* Professional Projects Section */}
      <div className='mb-20'>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='text-3xl font-Ovo font-bold mb-10 gradient-text'
        >
          Professional Projects
        </motion.h3>

        <div className='space-y-8'>
          {professionalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className='bg-white dark:bg-gray-900/80 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 
                         hover:shadow-glow hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 overflow-hidden'
            >
              {/* Project Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h4 className='text-2xl font-bold mb-2 gradient-text'>{project.title}</h4>
                <p className='text-base text-gray-600 dark:text-gray-400 mb-4'>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{project.company}</span> • {project.duration} • {project.location}
                </p>

                <ul className='list-none space-y-3 mb-6'>
                  {project.description.map((point, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <span className='text-primary-500 mt-1 flex-shrink-0'>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className='text-gray-700 dark:text-gray-300 leading-relaxed'>{point}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className='text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3'>Technologies Used:</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.03 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className='px-3 py-1.5 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 
                                   text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium 
                                   border border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-500 
                                   transition-all shadow-sm'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='text-3xl font-Ovo font-bold mb-10 gradient-text'
        >
          Personal Projects
        </motion.h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className='group relative bg-white dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-glow hover:border-accent-400 dark:hover:border-accent-500 transition-all duration-300'
            >
              {/* Project Image as Background */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent-100 to-success-100 dark:from-accent-900/20 dark:to-success-900/20">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Project Info Card */}
              <div className='p-6'>
                <h2 className='text-xl font-bold mb-2 gradient-text'>{project.title}</h2>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>{project.description}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className='inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-accent text-white rounded-full font-medium shadow-md hover:shadow-glow transition-all hover:scale-105'
                  >
                    View Live Demo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
