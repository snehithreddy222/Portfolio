import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
// (motion was imported but unused; you can remove if not needed)

const Work = ({ isDarkMode }) => {
  const professionalProjects = [
    {
      title: "Startup Social Platform – Full-Stack Delivery",
      company: "Varmodel AI",
      duration: "Aug 2025 – Present",
      location: "Remote, USA",
      description: [
        "Built end-to-end features with Vue 3 (Nuxt 3), Pinia, Tailwind, and TypeScript.",
        "Designed Django REST APIs, PostgreSQL schemas, and Redis caching for low-latency feeds.",
        "Implemented Google/LinkedIn OAuth (OpenID Connect) and secure token flows.",
        "Dockerized services and shipped via GitLab CI/CD to DigitalOcean + Nginx (QAT/Staging/Prod)."
      ],
      techStack: [
        "Vue 3", "Nuxt 3", "Pinia", "Tailwind", "TypeScript",
        "Django REST", "PostgreSQL", "Redis",
        "Docker", "GitLab CI/CD", "DigitalOcean", "Nginx", "OAuth"
      ],
      image: assets.varmodel // add a thumbnail (see guidance below)
    },
    {
      title: "Smart File Management Platform",
      company: "Treevah",
      duration: "May 2024 – Aug 2025",
      location: "Remote, USA",
      description: [
        "Developed React front-end modules: auth flows, file/folder CRUD, persona-based sandbox.",
        "Built Node.js/Express APIs with PostgreSQL + Redis for fast indexing and access control.",
        "Integrated Azure AD B2C/B2B; added guest restrictions with upgrade prompts to marketing site.",
        "Automated Azure App Service deployments via GitHub Actions; tuned performance and DX."
      ],
      techStack: [
        "React", "TypeScript", "Tailwind", "Node.js", "Express",
        "PostgreSQL", "Redis", "Azure App Services",
        "GitHub Actions", "Azure AD B2C/B2B"
      ],
      image: assets.treevah // add a thumbnail (see guidance below)
    },
    {
      title: "Enterprise Web Application (Client: BT)",
      company: "Virtusa",
      duration: "Jul 2021 – Jun 2022",
      location: "Chennai, India",
      description: [
        "Built responsive UI with React/Next.js + Material UI; modular components and forms.",
        "Developed Node.js/Express APIs; improved response times with efficient data flows.",
        "Delivered data-driven dashboards/analytics; collaborated in Agile sprints and code reviews.",
        "Enabled automated multi-env deployments using GitLab CI/CD."
      ],
      techStack: [
        "React", "Next.js", "TypeScript", "Material UI",
        "Node.js", "Express.js", "Oracle DB", "MongoDB", "GitLab CI/CD"
      ],
      image: assets.bt_web_app // add a thumbnail (see guidance below)
    }
  ]

  const personalProjects = workData.filter(project => project.type === "personal")

  return (
    <div className='w-full px-[12%] py-10 scroll-mt-200' id="work">
      <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Projects</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my Portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
      </p>

      {/* Professional Projects Section */}
      <div className='my-16'>
        <h3 className='text-center text-3xl font-Ovo mb-8'>Professional Projects</h3>
        <div className='space-y-10'>
          {professionalProjects.map((project, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border dark:border-gray-700 
                         transform transition duration-300 cursor-pointer 
                         hover:bg-bluecolor hover:-translate-y-1 duration-500 hover:shadow-black 
                         dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
            >
              {/* Project Image */}
              <div className="mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={450}
                  className="rounded-lg w-full h-auto object-cover"
                  priority={index === 0}
                />
              </div>

              <h4 className='text-xl font-semibold mb-2'>{project.title}</h4>
              <p className='text-sm text-gray-600 dark:text-gray-400'>
                {project.company} | {project.duration} | {project.location}
              </p>

              <ul className='list-disc list-inside mt-3 space-y-2 text-gray-800 dark:text-gray-300'>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className='mt-4'>
                <strong className='text-gray-700 dark:text-gray-300'>Technologies Used:</strong>
                <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>
                  {project.techStack.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Projects Section */}
      <div className='my-16'>
        <h3 className='text-center text-3xl font-Ovo mb-8'>Personal Projects</h3>
        <div className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
          {personalProjects.map((project, index) => (
            <div
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Image src={assets.send_icon} alt="Open project" className="w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <a
        href=""
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
      >
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right arrow" className='w-4' />
      </a>
    </div>
  )
}

export default Work
