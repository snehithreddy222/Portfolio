import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
    const professionalProjects = [
        {
            title: "Salesforce Data Migration",
            company: "Virtusa (Client: BT)",
            duration: "Jul 2021 - Jan 2023",
            location: "Chennai, India",
            description: [
                "Orchestrated Salesforce data migration from BPS to EVS, achieving a 99.9% data integrity rate.",
                "Engineered complex PL/SQL scripts and managed ETL processes via Oracle Data Integrator (ODI).",
                "Designed scalable web applications using Next.js and TypeScript, integrating with Salesforce API.",
                "Implemented GIT-based version control within Agile/Scrum, enhancing development efficiency by 20%."
            ],
            techStack: ["Oracle DB", "SQL Server", "PL/SQL", "ODI", "Next.js", "TypeScript", "Salesforce API"],
            image: assets.salesforce_data_migration // Add migration image
        },
        {
            title: "Dynamic Web Application Development",
            company: "Virtusa (Client: BT)",
            duration: "Feb 2023 - Dec 2024",
            location: "Chennai, India",
            description: [
                "Developed a responsive web app using Next.js, TypeScript, and Material UI, increasing user satisfaction by 30%.",
                "Enhanced code efficiency by 25% through modular component design following industry best practices.",
                "Integrated frontend components with Node.js and Express.js backend, reducing API response time by 20%.",
                "Translated complex business needs into technical solutions, delivering 3 major project phases successfully."
            ],
            techStack: ["Next.js", "TypeScript", "Material UI", "Node.js", "Express.js", "MongoDB", "AWS"],
            image: assets.bt_web_app // Add web app image
        }
    ];

    const personalProjects = workData.filter(project => project.type === "personal");

    return (
        <div className='w-full px-[12%] py-10 scroll-mt-200' id="work">
            <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Projects</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my Portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
            </p>

            {/* Client Section (BT) */}
            <div className="flex items-center justify-center mb-12">
                <Image src={assets.bt_logo} alt="BT Logo" width={100} height={50} className="mr-4"/>
                <h3 className="text-3xl font-bold">Client: British Telecom (BT)</h3>
            </div>

            {/* Professional Projects Section */}
            <div className='my-16'>
                <h3 className='text-center text-3xl font-Ovo mb-8'>Professional Projects (Virtusa)</h3>
                <div className='space-y-10'>
                    {professionalProjects.map((project, index) => (
                        <div key={index} 
                            className='bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border dark:border-gray-700 
                            transform transition duration-300 cursor-pointer 
                             hover:bg-bluecolor  hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                        >
                            {/* Project Image */}
                            <div className="mb-4">
                                <Image src={project.image} alt={project.title} width={300} height={300} className="rounded-lg"/>
                            </div>

                            <h4 className='text-xl font-semibold mb-2'>{project.title}</h4>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>{project.company} | {project.duration} | {project.location}</p>
                            <ul className='list-disc list-inside mt-3 space-y-2 text-gray-800 dark:text-gray-300'>
                                {project.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <div className='mt-4'>
                                <strong className='text-gray-700 dark:text-gray-300'>Technologies Used:</strong>
                                <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>{project.techStack.join(", ")}</p>
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
                        <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <a href={project.link} target="_blank"><Image src={assets.send_icon} alt="" className="w-5" /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right arrow" className='w-4' />
            </a>
        </div>
    )
}

export default Work;




{/*import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

{/*
    import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Work = ({isDarkMode}) => {
    return (
        <div  className='w-full px-[12%] py-10 scroll-mt-200' id="work">
            <h4  className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
            <h2  className='text-center text-5xl font-Ovo'>My Projects</h2>
            <p  className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my Portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
            </p>
            <div  className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                {workData.map((project, index) => (
                    <div  className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
                        duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-smibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition '>
                                <a href={project.link} target="_blank"><Image src={assets.send_icon} alt="" className="w-5" /></a>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration: 1,delay:0.6 }} href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
            my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover '>
                Show more <Image src={isDarkMode? assets.right_arrow_bold_dark:assets.right_arrow_bold} alt="Right arrow" className='w-4' />
            </a>
        </div>
    )
}

export default Work  this is on of my components about projects so based on this can you give me above code  

const Work = ({ isDarkMode }) => {
    // Split workData into professional and personal projects
    const professionalProjects = workData.filter(project => project.type === "professional");
    const personalProjects = workData.filter(project => project.type === "personal");

    return (
        <div className='w-full px-[12%] py-10 scroll-mt-200' id="work">
            <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Projects</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my Portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
            </p>

            {/* Professional Projects Section *
            <div className='my-16'>
                <h3 className='text-center text-3xl font-Ovo mb-8'>Professional Projects (Virtusa)</h3>
                <div className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                    {professionalProjects.map((project, index) => (
                        <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <a href={project.link} target="_blank"><Image src={assets.send_icon} alt="" className="w-5" /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Personal Projects Section 
            <div className='my-16'>
                <h3 className='text-center text-3xl font-Ovo mb-8'>Personal Projects</h3>
                <div className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
                    {personalProjects.map((project, index) => (
                        <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <a href={project.link} target="_blank"><Image src={assets.send_icon} alt="" className="w-5" /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button 
            <a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right arrow" className='w-4' />
            </a>
        </div>
    )
}

export default Work */}
