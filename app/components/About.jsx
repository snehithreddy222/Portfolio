import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const About = ({isDarkMode}) => {
    return (
        <div   id="about" className='w-full px-[12%] py-10 scroll-mt-200'>
            <h4  className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
            <h2  className='text-center text-5xl font-Ovo'>About me</h2>
            <div  className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                
                <div  className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image1} alt="user" className="w-full rounded-3xl" />
                </div>
                
                    <p className='mb-10 max-w-2xl font-Ovo'>
  I am Snehith Reddy, a results-driven Full Stack Developer specializing in building secure, scalable, and high-performance web applications using technologies like Vue, React, Django, Node.js, PostgreSQL, Redis, Docker, and CI/CD pipelines. Currently pursuing my Master’s in Computer Information Technology at Elmhurst University, I have hands-on experience across both startup and enterprise environments. At Varmodel AI, I work on a Vue 3 and Django REST-based social platform, implementing OAuth integrations, PostgreSQL-backed APIs, Redis caching, and automated deployments on DigitalOcean through GitLab CI/CD. Previously at Treevah, I developed a React and Node.js file management system with Azure AD authentication, sandbox personas, and Azure-based CI/CD deployments. Earlier, as a Software Engineer at Virtusa, I built enterprise-grade applications for British Telecommunications using React, Next.js, Node.js, and Oracle DB, delivering data-driven dashboards and analytics solutions. Passionate about solving complex problems, optimizing performance, and enhancing user experience, I strive to create impactful digital products that blend innovation with scalability.
</p>


                

            </div>
            <div  className='flex-1'>
                    <ul  className='grid grid-cols-1 sm:grid-cols-3 gap-6 mx-w-2xl'>
                        {infoList.map(({icon,iconDark,title,description,index})=>(
                            <li   key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                             hover:bg-bluecolor  hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                <Image src={isDarkMode ? iconDark:icon} alt="title" className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </li>
                        ))}
                    </ul>
                    <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools & Technologies I use</h4>
                    <ul  className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool,index)=>(
                            <li  key={index} className='flex items-center justify-center w-14 sm:w-15
                            border-gray-400 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1  duration-500'><Image src={tool} alt="tool" className='w-5 sm:w-7' /></li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default About
