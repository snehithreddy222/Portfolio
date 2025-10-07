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
  I am Snehith Reddy, a passionate and results-driven Full Stack Developer specializing in building secure, scalable, and high-performance web applications. Currently pursuing my Master’s in Computer Information Technology at Elmhurst University, I bring hands-on experience from multiple product and internship roles across startup and enterprise environments.
  <br /><br />
  At <b>Varmodel AI</b>, I work on a Vue 3 + Django REST-based social platform, developing OAuth integrations, PostgreSQL-backed APIs, Redis caching, and CI/CD pipelines with Docker and GitLab for cloud deployments on DigitalOcean. Previously at <b>Treevah</b>, I built a React + Node.js file management system integrated with Azure AD authentication, guest sandbox personas, and automated deployments on Azure.
  <br /><br />
  Earlier, as a <b>Software Engineer at Virtusa</b>, I developed enterprise-grade applications for British Telecommunications using React, Next.js, Node.js, and Oracle DB, delivering data-driven dashboards and analytics.
  <br /><br />
  Skilled across modern technologies — including Vue, React, Django, Node.js, PostgreSQL, Redis, Docker, and CI/CD — I’m deeply passionate about crafting smooth user experiences, secure API architectures, and efficient system designs. I’m actively seeking opportunities to contribute as a Full Stack Developer in dynamic, product-driven teams.
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
